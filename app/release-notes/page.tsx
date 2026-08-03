"use client";

import { motion } from 'framer-motion';
import { Sparkles, Calendar, Tag, CheckCircle2, Clock } from 'lucide-react';
import Link from 'next/link';
import { BackButton } from '@/components/BackButton';

const releaseHistory = [
  {
    version: '1.4.0',
    date: 'July 25, 2026',
    status: 'Latest',
    highlights: [
      'Helix Toolkit 3D Direct3D 11 engine integration for zero-delay family previewing.',
      'In-App Real-Time Clash Detection matrix with customizable mm tolerance.',
      'Auto-CTB Pen Weight Simulator with 8 industrial plotting presets.',
      'Elevation Depth-Styling with 4-zone architectural contrast fading.',
    ],
  },
  {
    version: '1.0.0',
    date: 'July 29, 2026',
    status: 'Initial Official Release',
    highlights: [
      'Initial Release of Verixa BIM Suite for Autodesk Revit 2021-2027.',
      'Family Manager with 3D viewport navigation and metadata inspection.',
      'Smart Tag & Auto Annotation with spatial quadrant collision avoidance.',
      'Sheet Manager & Batch Sheet Maker with Excel XLSX import support.',
      'Family Health Scan and model performance optimizer.',
      'Multi-version single installer EXE distribution.',
    ],
  },
];

export default function ReleaseNotesPage() {
  return (
    <main className="flex-1 w-full flex flex-col bg-[#0B1120] text-white py-12 px-6">
      <div className="max-w-4xl mx-auto w-full">
        <BackButton label="Back to Home" />
        
        <div className="text-center mb-16 mt-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-4">
            <Sparkles size={16} /> Version History & Updates
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Release Notes</h1>
          <p className="text-lg text-gray-400">Track all updates, enhancements, and bug fixes for Verixa BIM Suite.</p>
        </div>

        <div className="space-y-12">
          {releaseHistory.map((release, idx) => (
            <motion.div
              key={release.version}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gray-900/90 rounded-2xl border border-gray-800 p-8 shadow-xl relative overflow-hidden"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-gray-800">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-extrabold text-white">v{release.version}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${release.status === 'Latest' ? 'bg-blue-500 text-white' : 'bg-gray-800 text-gray-400'}`}>
                    {release.status}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Calendar size={16} /> {release.date}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">What's New & Key Enhancements</h3>
                <ul className="space-y-2.5">
                  {release.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed">
                      <CheckCircle2 size={18} className="text-blue-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center bg-gray-900/50 rounded-2xl border border-gray-800 p-8">
          <h3 className="text-xl font-bold mb-2">Looking for the latest installer?</h3>
          <p className="text-gray-400 text-sm mb-6">Download the official setup package to update your Verixa BIM Suite installation.</p>
          <Link href="/download" className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-colors inline-block">
            Go to Downloads →
          </Link>
        </div>
      </div>
    </main>
  );
}
