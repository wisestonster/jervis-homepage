import "server-only";

import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { getSiteUrl } from "@/lib/seo";

export const ADMIN_COOKIE = "jervis_admin";
const SESSION_SECONDS = 60 * 60 * 8;

function secret() {
  return process.env.ADMIN_SESSION_SECRET || "";
}

function sign(payload: string) {
  return createHmac("sha256", secret()).update(payload).digest("base64url");
}

export function adminConfigured() {
  return Boolean((process.env.ADMIN_PASSWORD || "").length >= 8 && secret().length >= 32);
}

export function verifyPassword(password: string) {
  const expected = Buffer.from(process.env.ADMIN_PASSWORD || "");
  const actual = Buffer.from(password);
  return expected.length > 0 && expected.length === actual.length && timingSafeEqual(expected, actual);
}

export function createAdminSession() {
  const payload = String(Math.floor(Date.now() / 1000) + SESSION_SECONDS);
  return `${payload}.${sign(payload)}`;
}

export async function isAdmin() {
  if (!adminConfigured()) return false;
  const value = (await cookies()).get(ADMIN_COOKIE)?.value;
  if (!value) return false;
  const [expires, signature] = value.split(".");
  if (!expires || !signature || Number(expires) <= Math.floor(Date.now() / 1000)) return false;
  const expected = Buffer.from(sign(expires));
  const actual = Buffer.from(signature);
  return expected.length === actual.length && timingSafeEqual(expected, actual);
}

export const adminCookieOptions = {
  httpOnly: true,
  // NODE_ENV가 아니라 실제 접속 주소(NEXT_PUBLIC_SITE_URL) 기준으로 판단합니다.
  // HTTP로 서비스 중일 때 Secure 쿠키를 내려보내면 브라우저가 저장을 거부해 로그인이 계속 풀립니다.
  secure: getSiteUrl().protocol === "https:",
  sameSite: "strict" as const,
  path: "/",
  maxAge: SESSION_SECONDS,
};
