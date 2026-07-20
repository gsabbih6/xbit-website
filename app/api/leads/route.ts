const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type LeadPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  company?: unknown;
  service?: unknown;
  budget?: unknown;
  message?: unknown;
  source?: unknown;
  pageUrl?: unknown;
  referrer?: unknown;
  utmSource?: unknown;
  utmMedium?: unknown;
  utmCampaign?: unknown;
  website?: unknown;
};

function clean(value: unknown, maxLength: number) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

export async function POST(request: Request) {
  let body: LeadPayload;

  try {
    body = (await request.json()) as LeadPayload;
  } catch {
    return Response.json({ error: 'Invalid request.' }, { status: 400 });
  }

  // Honeypot fields should remain empty for real visitors.
  if (clean(body.website, 200)) {
    return Response.json({ ok: true });
  }

  const lead = {
    name: clean(body.name, 120),
    email: clean(body.email, 200).toLowerCase(),
    phone: clean(body.phone, 50),
    company: clean(body.company, 160),
    service: clean(body.service, 160),
    budget: clean(body.budget, 80),
    message: clean(body.message, 4000),
    source: clean(body.source, 100) || 'website',
    pageUrl: clean(body.pageUrl, 500),
    referrer: clean(body.referrer, 500),
    utmSource: clean(body.utmSource, 160),
    utmMedium: clean(body.utmMedium, 160),
    utmCampaign: clean(body.utmCampaign, 160),
    createdAt: new Date().toISOString(),
  };

  if (!lead.name || !EMAIL_PATTERN.test(lead.email) || !lead.service) {
    return Response.json(
      { error: 'Name, a valid email, and project type are required.' },
      { status: 400 },
    );
  }

  const webhookUrl =
    process.env.GOOGLE_SHEET_URL ?? process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL;

  if (!webhookUrl) {
    console.error('Lead submission failed: GOOGLE_SHEET_URL is not configured.');
    return Response.json(
      { error: 'Lead delivery is not configured. Please email info@xbitinnovations.com.' },
      { status: 503 },
    );
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lead),
      cache: 'no-store',
    });

    if (!response.ok) {
      console.error(`Lead webhook returned ${response.status}.`);
      return Response.json(
        { error: 'We could not deliver your request. Please email info@xbitinnovations.com.' },
        { status: 502 },
      );
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error('Lead webhook request failed.', error);
    return Response.json(
      { error: 'We could not deliver your request. Please email info@xbitinnovations.com.' },
      { status: 502 },
    );
  }
}
