import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { event_name, sale_id, email, product_name } = body;

    // Auto-provision key on purchase event
    const generatedKey = `VRX-GUMROAD-${Math.random().toString(36).substring(2, 9).toUpperCase()}`;

    return NextResponse.json({
      success: true,
      message: 'Webhook processed. License key issued.',
      licenseKey: generatedKey,
      customerEmail: email
    });
  } catch (err: any) {
    return NextResponse.json({ error: 'Webhook processing error' }, { status: 500 });
  }
}
