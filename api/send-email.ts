export const config = {
  runtime: 'edge',
};

import type { BrevoEmailPayload, BrevoResponse } from '.';

const RATE_LIMIT_WINDOW = 60_000;
const MAX_REQUESTS = 5;
const API_URL = 'https://api.brevo.com/v3/smtp/email';

const ipRequests = new Map<string, { count: number; timestamp: number }>();

function getClientIp(req: Request): string {
  return req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
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
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ success: false, message: 'Method Not Allowed' }),
      { status: 405, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    console.error('BREVO_API_KEY missing');
    return new Response(
      JSON.stringify({ success: false, message: 'Server misconfigured' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const ip = getClientIp(req);
  if (rateLimit(ip)) return silentOk();

  let payload: BrevoEmailPayload;
  try {
    payload = await req.json();
  } catch (err) {
    console.error('Invalid JSON payload:', err);
    return new Response(
      JSON.stringify({ success: false, reason: 'Invalid JSON' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  // anti-bot check
  if (!!(payload as any).sender?.website?.length) return silentOk();

  // payload validation
  if (!payload.sender?.email || !payload.to?.length || !payload.subject || !payload.htmlContent) {
    return new Response(
      JSON.stringify({ success: false, reason: 'Invalid payload' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  if (!isValidEmail(payload.sender.email)) {
    return new Response(
      JSON.stringify({ success: false, reason: 'Invalid sender email' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  payload.htmlContent = sanitizeHtml(payload.htmlContent);

  const country = req.headers.get('x-vercel-ip-country');
  if (['RU', 'CN', 'KP'].includes(country ?? '')) return silentOk();

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const text = await response.text();
      console.error('Brevo API error:', response.status, text);
      return new Response(
        JSON.stringify({ success: false, reason: 'Brevo API error', status: response.status }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const data: BrevoResponse = await response.json();
    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Fetch failed:', err);
    return new Response(
      JSON.stringify({ success: false, reason: 'Fetch failed' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}