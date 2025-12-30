import { BrevoEmailPayload, BrevoResponse } from '.';

const RATE_LIMIT_WINDOW = 60_000;
const MAX_REQUESTS = 5;
const API_URL = 'https://api.brevo.com/v3/smtp/email';

const ipRequests = new Map<string, { count: number; timestamp: number }>();

function getClientIp(req: Request): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    'unknown'
  );
}

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = ipRequests.get(ip);

  if (!entry || now - entry.timestamp > RATE_LIMIT_WINDOW) {
    ipRequests.set(ip, { count: 1, timestamp: now });
    return false;
  }

  entry.count++;
  return entry.count > MAX_REQUESTS;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitizeHtml(input: string): string {
  return input
    .replace(/<script.*?>.*?<\/script>/gi, '')
    .replace(/on\w+=".*?"/gi, '');
}

function silentOk() {
  return new Response(
    JSON.stringify({ success: true }),
    { status: 200 }
  );
}

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ success: false, message: 'Method Not Allowed' }),
      { status: 405 }
    );
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return new Response(
      JSON.stringify({ success: false, message: 'Server misconfigured' }),
      { status: 500 }
    );
  }


  const ip = getClientIp(req);

  if (rateLimit(ip)) return silentOk();

  let payload: BrevoEmailPayload;
  try {
    payload = await req.json();
  } catch {
    return silentOk();
  }

  if ((payload as any).sender?.company) {
    return silentOk();
  }

  if (
    !payload.sender?.email ||
    !payload.to?.length ||
    !payload.subject ||
    !payload.htmlContent
  ) {
    return silentOk();
  }

  if (!isValidEmail(payload.sender.email)) {
    return silentOk();
  }

  payload.htmlContent = sanitizeHtml(payload.htmlContent);

  const country = req.headers.get('x-vercel-ip-country');
  if (['RU', 'CN', 'KP'].includes(country ?? '')) {
    return silentOk();
  }

  try {
    const response = await fetch(
      API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return silentOk();
    }

    const data: BrevoResponse = await response.json();

    return new Response(
      JSON.stringify({
        success: true,
        data,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );

  } catch {
    return silentOk();
  }
}