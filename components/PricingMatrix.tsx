"use client";

import { Check, X, Sparkles } from 'lucide-react';

interface FeatureRow {
  name: string;
  category: string;
  freeTrial: boolean | string;
  perpetual: boolean | string;
  subscription: boolean | string;
}

const MATRIX_FEATURES: FeatureRow[] = [
  // Family Manager
  { name: "3D & 2D Real-time Family Preview", category: "Family Manager", freeTrial: true, perpetual: true, subscription: true },
  { name: "Instant Category & Parameter Filter", category: "Family Manager", freeTrial: true, perpetual: true, subscription: true },
  { name: "Drag and Drop into Revit View", category: "Family Manager", freeTrial: true, perpetual: true, subscription: true },
  { name: "Network & Cloud Drive Scanning", category: "Family Manager", freeTrial: "Terbatas", perpetual: true, subscription: true },

  // Smart Tag & Annotation
  { name: "Auto Room, Door & Window Tagging", category: "Smart Tag", freeTrial: true, perpetual: true, subscription: true },
  { name: "Auto Exterior Building Dimensions", category: "Smart Tag", freeTrial: true, perpetual: true, subscription: true },
  { name: "Auto Spot Elevation Alignment", category: "Smart Tag", freeTrial: true, perpetual: true, subscription: true },

  // Batch Sheet Maker
  { name: "Automated Sheet & View Generation", category: "Batch Sheet", freeTrial: true, perpetual: true, subscription: true },
  { name: "Excel Data Import / Ingestion", category: "Batch Sheet", freeTrial: false, perpetual: true, subscription: true },

  // License & Support
  { name: "Masa Berlaku Lisensi", category: "Lisensi & Support", freeTrial: "14 Hari", perpetual: "Selamanya", subscription: "Bulanan / Tahunan" },
  { name: "Dukungan Teknis Prioritas", category: "Lisensi & Support", freeTrial: false, perpetual: "Email 24/7", subscription: "VIP WhatsApp & Email" },
  { name: "Pembaruan Versi Revit Mendatang", category: "Lisensi & Support", freeTrial: false, perpetual: "1 Tahun Gratis", subscription: "Selalu Terupdate" },
];

export function PricingMatrix() {
  return (
    <section className="w-full py-16 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-4">
            <Sparkles size={16} /> Perbandingan Fitur
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Matriks Perbandingan Fitur Lisensi
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Bandingkan paket lisensi Verixa Suite sesuai dengan skala kebutuhan tim & proyek BIM Anda.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-gray-800 bg-gray-900/40 shadow-2xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-800 bg-gray-900/80">
                <th className="p-5 text-gray-400 font-semibold text-sm">FITUR / KAPABILITAS</th>
                <th className="p-5 text-center text-white font-bold text-base w-1/4">Free Trial (14 Hari)</th>
                <th className="p-5 text-center text-primary font-extrabold text-base w-1/4 bg-primary/10 border-x border-primary/20">
                  Perpetual (Sekali Bayar)
                </th>
                <th className="p-5 text-center text-white font-bold text-base w-1/4">Subscription</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/60 text-sm">
              {MATRIX_FEATURES.map((item, index) => (
                <tr key={index} className="hover:bg-gray-800/30 transition-colors">
                  <td className="p-5 text-gray-200 font-medium flex flex-col">
                    <span>{item.name}</span>
                    <span className="text-xs text-gray-500">{item.category}</span>
                  </td>
                  <td className="p-5 text-center">
                    {renderCell(item.freeTrial)}
                  </td>
                  <td className="p-5 text-center bg-primary/5 border-x border-primary/10">
                    {renderCell(item.perpetual)}
                  </td>
                  <td className="p-5 text-center">
                    {renderCell(item.subscription)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function renderCell(value: boolean | string) {
  if (typeof value === 'boolean') {
    return value ? (
      <Check size={20} className="text-emerald-400 mx-auto" />
    ) : (
      <X size={20} className="text-gray-600 mx-auto" />
    );
  }
  return <span className="font-semibold text-gray-300">{value}</span>;
}
