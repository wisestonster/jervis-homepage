import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

interface InquiryMessage {
  subject: string;
  name: string;
  phone: string;
  email: string;
  type: string;
  message: string;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function textField(value: unknown, maximum: number): string {
  return typeof value === "string" ? value.trim().slice(0, maximum) : "";
}

function mailbox(value: string): string {
  return value.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i)?.[0] ?? "";
}

function sender(value: string, fallbackAddress: string): { name: string; address: string } {
  const cleaned = value.replace(/[\r\n]+/g, " ").replace(/^"|"$/g, "").trim();
  const address = mailbox(cleaned) || fallbackAddress;
  const name = cleaned.replace(address, "").replace(/[<>]/g, "").trim() || "Jervis Labs";
  return { name, address };
}

function response(message: string, status: number) {
  return NextResponse.json(status < 400 ? { ok: true } : { message }, { status });
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 20_000) return response("요청 내용이 너무 큽니다.", 413);
  if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json")) {
    return response("잘못된 요청 형식입니다.", 415);
  }

  let input: Record<string, unknown>;
  try {
    input = await request.json() as Record<string, unknown>;
  } catch {
    return response("입력 내용을 확인해 주세요.", 400);
  }

  if (textField(input.website, 200)) return response("", 200);

  const inquiry: InquiryMessage = {
    subject: textField(input.subject, 120),
    name: textField(input.name, 80),
    phone: textField(input.phone, 40),
    email: textField(input.email, 254),
    type: textField(input.type, 60),
    message: textField(input.message, 5000),
  };

  if (!inquiry.subject || !inquiry.name || !inquiry.phone || !emailPattern.test(inquiry.email) ||
      !inquiry.type || !inquiry.message || input.privacyConsent !== true) {
    return response("필수 입력 항목을 확인해 주세요.", 400);
  }

  const host = process.env.SMTP_HOST?.trim();
  const port = Number(process.env.SMTP_PORT);
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM?.trim();
  const to = process.env.SMTP_TO?.trim() || user;

  if (!host || !Number.isInteger(port) || !user || !pass || !from || !to) {
    return response("메일 서버 설정을 확인해 주세요.", 503);
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    requireTLS: port !== 465,
    auth: { user, pass },
    tls: { minVersion: "TLSv1.2" },
  });

  try {
    await transporter.sendMail({
      from: sender(from, user),
      to,
      replyTo: inquiry.email,
      subject: `[저비스랩스 문의] ${inquiry.subject} - ${inquiry.name}`,
      text: [
        "저비스랩스 웹사이트에서 새 문의가 접수되었습니다.",
        "",
        `이름: ${inquiry.name}`,
        `연락처: ${inquiry.phone}`,
        `이메일: ${inquiry.email}`,
        `문의 유형: ${inquiry.type}`,
        `문의 제목: ${inquiry.subject}`,
        "",
        "문의 내용",
        inquiry.message,
      ].join("\n"),
    });
    return response("", 200);
  } catch (error) {
    console.error("Contact email delivery failed", error instanceof Error ? error.message : "Unknown SMTP error");
    return response("문의 전송에 실패했습니다. 잠시 후 다시 시도해 주세요.", 502);
  }
}

