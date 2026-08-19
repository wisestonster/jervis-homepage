import "server-only";

import { lookup } from "node:dns/promises";
import { isIP } from "node:net";

const MAX_HTML_BYTES = 2 * 1024 * 1024;
const MAX_REDIRECTS = 5;

function isPrivateAddress(address: string) {
  const value = address.toLowerCase();
  if (value === "::" || value === "::1") return true;
  if (value.startsWith("fc") || value.startsWith("fd") || /^fe[89ab]/.test(value)) return true;
  if (value.startsWith("::ffff:")) return isPrivateAddress(value.slice(7));
  if (isIP(value) !== 4) return false;
  const [a, b] = value.split(".").map(Number);
  return a === 0 || a === 10 || a === 127 || (a === 169 && b === 254)
    || (a === 172 && b >= 16 && b <= 31) || (a === 192 && b === 168)
    || (a === 100 && b >= 64 && b <= 127) || a >= 224;
}

async function assertPublicUrl(value: string) {
  const url = new URL(value);
  if (!["http:", "https:"].includes(url.protocol)) throw new Error("HTTP 또는 HTTPS 주소만 사용할 수 있습니다.");
  if (url.username || url.password) throw new Error("사용자 정보가 포함된 URL은 사용할 수 없습니다.");
  if (url.port && !["80", "443"].includes(url.port)) throw new Error("기본 HTTP/HTTPS 포트만 사용할 수 있습니다.");
  const hostname = url.hostname.toLowerCase();
  if (hostname === "localhost" || hostname.endsWith(".localhost") || hostname.endsWith(".local")) {
    throw new Error("내부 네트워크 주소는 사용할 수 없습니다.");
  }
  const addresses = isIP(hostname) ? [{ address: hostname }] : await lookup(hostname, { all: true });
  if (!addresses.length || addresses.some(({ address }) => isPrivateAddress(address))) {
    throw new Error("내부 네트워크 주소는 사용할 수 없습니다.");
  }
  return url;
}

async function readHtml(response: Response) {
  const contentLength = Number(response.headers.get("content-length") || 0);
  if (contentLength > MAX_HTML_BYTES) throw new Error("원문 페이지가 너무 큽니다.");
  if (!response.body) return "";
  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let html = "";
  let total = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    total += value.byteLength;
    if (total > MAX_HTML_BYTES) {
      await reader.cancel();
      throw new Error("원문 페이지가 너무 큽니다.");
    }
    html += decoder.decode(value, { stream: true });
  }
  return html + decoder.decode();
}

async function fetchPage(value: string, redirectCount = 0): Promise<{ html: string; finalUrl: URL }> {
  const url = await assertPublicUrl(value);
  const response = await fetch(url, {
    redirect: "manual",
    signal: AbortSignal.timeout(12_000),
    headers: {
      accept: "text/html,application/xhtml+xml",
      "user-agent": "Mozilla/5.0 (compatible; JervisLabsMetadataBot/1.0)",
    },
  });
  if (response.status >= 300 && response.status < 400) {
    if (redirectCount >= MAX_REDIRECTS) throw new Error("원문 페이지의 이동 횟수가 너무 많습니다.");
    const location = response.headers.get("location");
    if (!location) throw new Error("원문 페이지의 이동 주소를 확인할 수 없습니다.");
    return fetchPage(new URL(location, url).toString(), redirectCount + 1);
  }
  if (!response.ok) throw new Error(`원문 페이지를 불러오지 못했습니다. (HTTP ${response.status})`);
  const contentType = response.headers.get("content-type") || "";
  if (contentType && !contentType.includes("text/html") && !contentType.includes("application/xhtml+xml")) {
    throw new Error("HTML 형식의 원문 페이지만 정보를 가져올 수 있습니다.");
  }
  return { html: await readHtml(response), finalUrl: url };
}

function decodeHtml(value: string) {
  const named: Record<string, string> = { amp: "&", quot: '"', apos: "'", lt: "<", gt: ">", nbsp: " " };
  return value
    .replace(/&#(\d+);/g, (_match, code: string) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_match, code: string) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/&([a-z]+);/gi, (match, name: string) => named[name.toLowerCase()] ?? match)
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function attributes(tag: string) {
  const result: Record<string, string> = {};
  const pattern = /([:\w-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g;
  for (const match of tag.matchAll(pattern)) result[match[1].toLowerCase()] = match[2] ?? match[3] ?? match[4] ?? "";
  return result;
}

function extractMetadata(html: string, finalUrl: URL) {
  const metadata = new Map<string, string>();
  for (const match of html.matchAll(/<meta\b[^>]*>/gi)) {
    const attrs = attributes(match[0]);
    const key = (attrs.property || attrs.name || attrs.itemprop || "").toLowerCase();
    if (key && attrs.content && !metadata.has(key)) metadata.set(key, attrs.content);
  }
  const get = (...keys: string[]) => {
    for (const key of keys) {
      const value = metadata.get(key);
      if (value) return decodeHtml(value);
    }
    return "";
  };
  const titleMatch = html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i);
  const title = get("og:title", "twitter:title") || decodeHtml(titleMatch?.[1] || "");
  const summary = get("og:description", "twitter:description", "description");
  const imageValue = get("og:image:secure_url", "og:image", "twitter:image", "twitter:image:src");
  const canonicalTag = Array.from(html.matchAll(/<link\b[^>]*>/gi))
    .map((match) => attributes(match[0]))
    .find((attrs) => (attrs.rel || "").toLowerCase().split(/\s+/).includes("canonical"));
  const absolute = (value: string) => {
    if (!value) return "";
    try { return new URL(value, finalUrl).toString(); } catch { return ""; }
  };
  const publishedValue = get("article:published_time", "datepublished", "date", "pubdate");
  const publishedDate = publishedValue ? new Date(publishedValue) : null;
  return {
    title: title.slice(0, 200),
    summary: summary.slice(0, 5_000),
    imageUrl: absolute(imageValue),
    source: (get("og:site_name", "application-name") || finalUrl.hostname.replace(/^www\./, "")).slice(0, 100),
    sourceUrl: absolute(canonicalTag?.href || "") || finalUrl.toString(),
    publishedAt: publishedDate && !Number.isNaN(publishedDate.getTime()) ? publishedDate.toISOString().slice(0, 10) : "",
    category: get("article:section").slice(0, 30),
  };
}

export async function getPageMetadata(url: string) {
  const { html, finalUrl } = await fetchPage(url);
  return extractMetadata(html, finalUrl);
}
