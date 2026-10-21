import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { ContactSchema, buildEmail, rateLimited } from '@/lib/server/contact';

export const runtime = 'nodejs';

// POST /api/contact
// Body: { intent, fields: { name, email, msg, company?, role?, budget?, start? }, company_site? }
// 200 { sent: true } when the email went out.
// 503 { sent: false, reason: 'not_configured' } when RESEND_API_KEY is missing; the page
// then shows the copy / open-in-email fallback, so nothing is lost.
export async function POST(req: Request) {
  const ip = (req.headers.get('x-forwarded-for') ?? '').split(',')[0].trim() || 'unknown';
  if (rateLimited(ip)) {
    return NextResponse.json({ sent: false, reason: 'rate_limited' }, { status: 429 });
  }

  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ sent: false, reason: 'bad_json' }, { status: 400 });
  }

  const parsed = ContactSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { sent: false, reason: 'invalid', issues: parsed.error.issues.map((i) => ({ path: i.path.join('.'), message: i.message })) },
      { status: 400 },
    );
  }

  // Bot filled the hidden field: pretend success, send nothing.
  if (parsed.data.company_site) return NextResponse.json({ sent: true });

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return NextResponse.json({ sent: false, reason: 'not_configured' }, { status: 503 });

  const to = process.env.CONTACT_TO_EMAIL || 'nayeebrahman@gmail.com';
  const from = process.env.CONTACT_FROM_EMAIL || 'Portfolio <onboarding@resend.dev>';
  const { subject, text, html } = buildEmail(parsed.data);

  const { error } = await new Resend(apiKey).emails.send({
    from,
    to,
    replyTo: parsed.data.fields.email,
    subject,
    text,
    html,
  });
  if (error) {
    console.error('contact: resend error', error);
    return NextResponse.json({ sent: false, reason: 'send_failed' }, { status: 502 });
  }
  return NextResponse.json({ sent: true });
}
