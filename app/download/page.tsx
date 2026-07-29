"use client";

import { Download, FileText, FileCode } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BackButton } from '@/components/BackButton';

const previousVersions = [
  { version: '1.0.0', date: 'July 30, 2026', size: 'Installer (.exe)', notes: 'Initial Official Release v1.0.0' },
];

export default function DownloadPage() {
  return (
    <main className="flex-1 w-full flex flex-col bg-[#0B1120] text-white py-12 px-6">
      <div className="max-w-5xl mx-auto w-full space-y-12">
        <BackButton label="Back to Home" />

        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-4">
            <Download size={16} /> Downloads & Resources
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Download Verixa BIM Suite</h1>
          <p className="text-xl text-gray-400">Get the latest installer for Autodesk Revit 2021-2027.</p>
        </div>

        {/* Latest Release Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-900 rounded-2xl border border-gray-800 p-8 md:p-12 shadow-2xl relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <h2 className="text-3xl font-bold text-white">Version 1.0.0</h2>
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Latest Official</span>
              </div>
              <p className="text-gray-400 mb-2">Released on July 30, 2026 — Multi-Target Setup Installer</p>
            </div>
            
            <a 
              href="#"
              download
              className="w-full md:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold flex items-center justify-center gap-3 transition-colors shadow-lg shadow-blue-500/20"
            >
              <Download size={22} /> Download Installer (.exe)
            </a>
          </div>
        </motion.div>

        {/* Resource Downloads: PDF Manual & Sample Files Placeholders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="p-3 bg-blue-500/10 rounded-xl w-fit text-blue-400">
                <FileText size={28} />
              </div>
              <h3 className="text-xl font-bold">User Manual (PDF)</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Complete printable offline User Manual and Autodesk App Store documentation guide in PDF format.
              </p>
            </div>
            <button className="w-full py-3 rounded-xl bg-gray-800 hover:bg-gray-700 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors">
              <Download size={18} /> Download User Manual (PDF)
            </button>
          </div>

          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="p-3 bg-blue-500/10 rounded-xl w-fit text-blue-400">
                <FileCode size={28} />
              </div>
              <h3 className="text-xl font-bold">Sample Project Files (.RVT)</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Pre-configured sample Revit project containing test families, sheet sets, and clash test matrix presets.
              </p>
            </div>
            <button className="w-full py-3 rounded-xl bg-gray-800 hover:bg-gray-700 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors">
              <Download size={18} /> Download Sample Files (.RVT)
            </button>
          </div>
        </div>

        {/* Previous Versions & Changelog */}
        <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 space-y-6">
          <h3 className="text-2xl font-bold">Versions & Changelog</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-300">
              <thead className="text-xs uppercase bg-gray-800/60 text-gray-400 border-b border-gray-800">
                <tr>
                  <th className="p-4">Version</th>
                  <th className="p-4">Release Date</th>
                  <th className="p-4">Type</th>
                  <th className="p-4">Notes</th>
                  <th className="p-4">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800/60">
                {previousVersions.map((ver) => (
                  <tr key={ver.version} className="hover:bg-gray-800/40">
                    <td className="p-4 font-bold text-white">v{ver.version}</td>
                    <td className="p-4">{ver.date}</td>
                    <td className="p-4">{ver.size}</td>
                    <td className="p-4 text-gray-400">{ver.notes}</td>
                    <td className="p-4">
                      <Link href="/docs/getting-started" className="text-blue-400 hover:underline">View Notes</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
