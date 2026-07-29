import { NextResponse } from 'next/server';

const activeTrials = new Set<string>();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, machineId } = body;

    if (!email || !machineId) {
      return NextResponse.json({ error: 'Email and Machine ID are required.' }, { status: 400 });
    }

    const trialKey = `${email.toLowerCase()}-${machineId}`;
    if (activeTrials.has(trialKey)) {
      return NextResponse.json({
        error: 'Trial already claimed for this device or email address.'
      }, { status: 422 });
    }

    activeTrials.add(trialKey);

    const startDate = new Date();
    const endDate = new Date(startDate.getTime() + 15 * 24 * 60 * 60 * 1000);

    return NextResponse.json({
      success: true,
      message: '15-Day Free Trial started successfully!',
      trial: {
        email,
        machineId,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        remainingDays: 15
      }
    });
  } catch (err: any) {
    return NextResponse.json({ error: 'Server error: ' + err.message }, { status: 500 });
  }
}
