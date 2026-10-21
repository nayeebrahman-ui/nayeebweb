import { z } from 'zod';

export const INTENTS = {
  hire: 'Full-time role',
  consulting: 'Consulting',
  partner: 'Project partnership',
  other: 'General',
} as const;

// Field keys the contact form can send, with their labels for the email.
export const FIELD_LABELS: Record<string, string> = {
  name: 'Name',
  email: 'Email',
  company: 'Company',
  role: 'Role',
  budget: 'Budget range',
  start: 'Start date',
  msg: 'Message',
};

const text = (max: number) => z.string().trim().max(max).optional().default('');

export const ContactSchema = z.object({
  intent: z.enum(Object.keys(INTENTS) as [keyof typeof INTENTS, ...(keyof typeof INTENTS)[]]),
  fields: z.object({
    name: z.string().trim().min(1, 'Name is required').max(120),
    email: z.string().trim().email('Email looks incomplete').max(200),
    msg: z.string().trim().min(1, 'Message is required').max(5000),
    company: text(160),
    role: text(160),
    budget: text(120),
    start: text(120),
  }),
  // Honeypot: real visitors never see or fill this.
  company_site: z.string().max(500).optional().default(''),
});

export type ContactInput = z.infer<typeof ContactSchema>;

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

export function buildEmail(input: ContactInput) {
  const label = INTENTS[input.intent];
  const rows = Object.entries(input.fields).filter(([, v]) => v);
  const subject = `${label} enquiry from ${input.fields.name}`;
  const textBody = rows.map(([k, v]) => `${FIELD_LABELS[k] ?? k}: ${v}`).join('\n');
  const html = `<div style="font-family:system-ui,sans-serif;font-size:15px;line-height:1.5;color:#17110D">
<h2 style="margin:0 0 12px">${esc(subject)}</h2>
<table cellpadding="6" style="border-collapse:collapse">${rows
    .map(
      ([k, v]) =>
        `<tr><td style="vertical-align:top;color:#6b625b;white-space:nowrap">${esc(FIELD_LABELS[k] ?? k)}</td><td style="white-space:pre-wrap">${esc(v)}</td></tr>`,
    )
    .join('')}</table>
<p style="color:#6b625b;font-size:13px;margin-top:16px">Sent from the contact form on your portfolio. Reply to this email to answer ${esc(input.fields.name)} directly.</p></div>`;
  return { subject, text: textBody, html };
}

// Best-effort per-instance rate limit (serverless instances don't share memory).
const hits = new Map<string, number[]>();
export function rateLimited(key: string, limit = 5, windowMs = 10 * 60 * 1000) {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > limit;
}
