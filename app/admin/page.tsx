"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'licenses' | 'devices' | 'orders'>('overview');
  const [searchTerm, setSearchTerm] = useState('');

  const [licenses, setLicenses] = useState([
    { key: 'VRX-PERPETUAL-2026-ABCD-1234', customer: 'Studio Arch BIM Ltd', email: 'admin@studioarch.com', type: 'Perpetual', status: 'Active', devices: '2/2', source: 'Official Website', date: '2026-07-01' },
    { key: 'VRX-SUB-2026-YEAR-8899', customer: 'Global BIM Consultants', email: 'licensing@globalbim.com', type: 'Subscription (Yearly)', status: 'Active', devices: '4/5', source: 'Official Website', date: '2026-07-15' },
    { key: 'VRX-TRIAL-15D-9988-7766', customer: 'Freelance BIM Modeler', email: 'bim.mod@gmail.com', type: '15-Day Trial', status: 'Active Trial', devices: '1/1', source: 'In-Plugin Trial', date: '2026-07-28' },
    { key: 'VRX-GUMROAD-KEY-4433', customer: 'Structural Engineering Inc', email: 'tech@structeng.org', type: 'Perpetual', status: 'Revoked', devices: '0/2', source: 'Gumroad', date: '2026-06-12' },
  ]);

  const filteredLicenses = licenses.filter(lic =>
    lic.key.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lic.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lic.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleResetDevice = (key: string) => {
    setLicenses(licenses.map(lic => lic.key === key ? { ...lic, devices: '0/' + lic.devices.split('/')[1] } : lic));
    alert(`Device activation reset for license key: ${key}`);
  };

  const handleToggleRevoke = (key: string) => {
    setLicenses(licenses.map(lic => {
      if (lic.key === key) {
        const nextStatus = lic.status === 'Active' ? 'Revoked' : 'Active';
        return { ...lic, status: nextStatus };
      }
      return lic;
    }));
  };

  return (
    <div className="min-h-screen bg-[#080D1A] text-white flex flex-col">
      {/* Top Navbar */}
      <header className="border-b border-gray-800 bg-[#0B132B] px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 rounded-full bg-blue-500 animate-pulse" />
          <h1 className="text-xl font-bold tracking-wide">VERIXA BIM SUITE</h1>
          <span className="text-xs bg-blue-600/30 text-blue-400 font-mono px-2 py-0.5 rounded border border-blue-500/30">ADMIN PLATFORM v1.4</span>
        </div>
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <span>Logged in as <strong>admin@verixabim.com</strong></span>
          <Link href="/" className="px-3 py-1.5 rounded bg-gray-800 hover:bg-gray-700 text-white transition-colors">
            Exit Admin
          </Link>
        </div>
      </header>

      {/* Main Container */}
      <div className="flex-1 max-w-7xl w-full mx-auto p-8 flex flex-col gap-8">
        {/* Metric Cards Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-[#0F172A] border border-gray-800 rounded-xl p-6">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Active Commercial Licenses</p>
            <h3 className="text-3xl font-extrabold text-blue-400 mt-2">1,248</h3>
            <p className="text-xs text-emerald-400 mt-2">+12.4% from last month</p>
          </div>
          <div className="bg-[#0F172A] border border-gray-800 rounded-xl p-6">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Active 15-Day Trial Users</p>
            <h3 className="text-3xl font-extrabold text-cyan-400 mt-2">342</h3>
            <p className="text-xs text-cyan-300 mt-2">High conversion rate</p>
          </div>
          <div className="bg-[#0F172A] border border-gray-800 rounded-xl p-6">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Registered Devices</p>
            <h3 className="text-3xl font-extrabold text-purple-400 mt-2">2,105</h3>
            <p className="text-xs text-gray-400 mt-2">Bound to hardware ID</p>
          </div>
          <div className="bg-[#0F172A] border border-gray-800 rounded-xl p-6">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Total Sales Volume</p>
            <h3 className="text-3xl font-extrabold text-emerald-400 mt-2">$84,950</h3>
            <p className="text-xs text-gray-400 mt-2">Gumroad &amp; Lemon Squeezy</p>
          </div>
        </div>

        {/* Tab Selector & Controls */}
        <div className="bg-[#0F172A] border border-gray-800 rounded-xl p-6 flex flex-col gap-6">
          <div className="flex justify-between items-center border-b border-gray-800 pb-4">
            <div className="flex gap-4">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${activeTab === 'overview' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:bg-gray-800'}`}
              >
                Licenses &amp; Customers
              </button>
              <button
                onClick={() => setActiveTab('devices')}
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all ${activeTab === 'devices' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:bg-gray-800'}`}
              >
                Device Activations
              </button>
            </div>

            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Search key, customer, or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-[#080D1A] border border-gray-700 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500 w-64"
              />
              <button
                onClick={() => {
                  const newKey = `VRX-MANUAL-${Math.random().toString(36).substring(2, 9).toUpperCase()}`;
                  setLicenses([
                    { key: newKey, customer: 'New Enterprise Client', email: 'client@company.com', type: 'Perpetual', status: 'Active', devices: '0/5', source: 'Manual Admin Issue', date: new Date().toISOString().split('T')[0] },
                    ...licenses
                  ]);
                }}
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
              >
                + Issue New License
              </button>
            </div>
          </div>

          {/* Licenses Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-300">
              <thead className="bg-[#080D1A] text-xs font-bold uppercase tracking-wider text-gray-500 border-b border-gray-800">
                <tr>
                  <th className="py-3 px-4">License Key</th>
                  <th className="py-3 px-4">Customer &amp; Email</th>
                  <th className="py-3 px-4">Type</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Devices</th>
                  <th className="py-3 px-4">Source</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800/60">
                {filteredLicenses.map((lic) => (
                  <tr key={lic.key} className="hover:bg-gray-800/30 transition-colors">
                    <td className="py-3.5 px-4 font-mono text-xs text-blue-400 font-semibold">{lic.key}</td>
                    <td className="py-3.5 px-4">
                      <div className="font-semibold text-white">{lic.customer}</div>
                      <div className="text-xs text-gray-500">{lic.email}</div>
                    </td>
                    <td className="py-3.5 px-4">{lic.type}</td>
                    <td className="py-3.5 px-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                        lic.status === 'Active' || lic.status === 'Active Trial'
                          ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-800/80'
                          : 'bg-red-950/80 text-red-400 border border-red-800/80'
                      }`}>
                        {lic.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 font-mono text-xs">{lic.devices}</td>
                    <td className="py-3.5 px-4 text-xs text-gray-400">{lic.source}</td>
                    <td className="py-3.5 px-4 text-right flex justify-end gap-2">
                      <button
                        onClick={() => handleResetDevice(lic.key)}
                        className="px-2.5 py-1 rounded bg-gray-800 hover:bg-gray-700 text-xs font-medium text-amber-400 border border-amber-500/30 transition-colors"
                      >
                        Reset Device
                      </button>
                      <button
                        onClick={() => handleToggleRevoke(lic.key)}
                        className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                          lic.status === 'Active'
                            ? 'bg-red-900/40 hover:bg-red-900 text-red-300 border border-red-700/50'
                            : 'bg-emerald-900/40 hover:bg-emerald-900 text-emerald-300 border border-emerald-700/50'
                        }`}
                      >
                        {lic.status === 'Active' ? 'Revoke' : 'Reactivate'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
