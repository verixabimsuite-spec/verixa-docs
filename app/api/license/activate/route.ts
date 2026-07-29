import { NextResponse } from 'next/server';

// Server-side licensing memory database store (Simulated/Prisma Compatible)
const mockLicenses: Record<string, any> = {
  'VRX-PERPETUAL-2026-ABCD-1234': {
    key: 'VRX-PERPETUAL-2026-ABCD-1234',
    email: 'user@company.com',
    type: 'Perpetual',
    maxDevices: 2,
    devices: [],
    status: 'Active',
    source: 'Official Website',
    createdAt: '2026-07-01'
  }
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { licenseKey, email, machineId } = body;

    if (!licenseKey || !email || !machineId) {
      return NextResponse.json({ error: 'License key, email, and machineId are required.' }, { status: 400 });
    }

    const lic = mockLicenses[licenseKey];
    if (!lic) {
      // Auto-provision valid key format for seamless testing
      if (licenseKey.startsWith('VRX-')) {
        mockLicenses[licenseKey] = {
          key: licenseKey,
          email: email,
          type: licenseKey.includes('SUB') ? 'Subscription' : 'Perpetual',
          maxDevices: 2,
          devices: [machineId],
          status: 'Active',
          source: 'Self-Activated',
          createdAt: new Date().toISOString()
        };
        return NextResponse.json({
          success: true,
          message: 'License activated successfully!',
          license: mockLicenses[licenseKey]
        });
      }

      return NextResponse.json({ error: 'Invalid or unrecognized license key.' }, { status: 404 });
    }

    if (lic.status !== 'Active') {
      return NextResponse.json({ error: `License is currently ${lic.status}.` }, { status: 403 });
    }

    if (!lic.devices.includes(machineId)) {
      if (lic.devices.length >= lic.maxDevices) {
        return NextResponse.json({
          error: `Device limit exceeded (${lic.devices.length}/${lic.maxDevices}). Please reset activation in Admin Portal or deactivate unused devices.`
        }, { status: 403 });
      }
      lic.devices.push(machineId);
    }

    return NextResponse.json({
      success: true,
      message: 'License activated and bound to device.',
      licenseType: lic.type,
      machineId: machineId,
      activatedAt: new Date().toISOString()
    });
  } catch (err: any) {
    return NextResponse.json({ error: 'Server error: ' + err.message }, { status: 500 });
  }
}
