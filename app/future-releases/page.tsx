"use client";

import { motion } from 'framer-motion';
import { Compass, Clock, Sparkles } from 'lucide-react';
import Link from 'next/link';

const roadmapItems = [
  {
    title: 'Parameter Manager',
    category: 'BIM Metadata',
    description: 'Bulk edit, transfer, and standardize shared parameters across hundreds of Revit families and active project models.',
    status: 'Planned',
  },
  {
    title: 'AI Family Search',
    category: 'Intelligence',
    description: 'Natural language search engine allowing BIM managers to find 3D families by descriptive query (e.g. "modern office leather chair").',
    status: 'Planned',
  },
  {
    title: 'Batch PDF Export',
    category: 'Documentation',
    description: 'Automated background PDF printer supporting custom naming rules, sheet set filtering, and auto-CTB pen mapping.',
    status: 'Planned',
  },
  {
    title: 'CAD Cleanup',
    category: 'Interoperability',
    description: 'One-click DWG import scrubber to remove line noise, unlinked layers, and orphan text blocks before importing into Revit.',
    status: 'Planned',
  },
  {
    title: 'Clash Assistant',
    category: 'Coordination',
    description: 'Automated resolution advisor suggesting optimal pipe and duct offsets around structural framing members.',
    status: 'Planned',
  },
  {
    title: 'Batch Rename',
    category: 'Productivity',
    description: 'Regex-powered batch renaming utility for views, sheets, levels, grids, and material assets.',
    status: 'Planned',
  },
  {
    title: 'Cloud Sync',
    category: 'Collaboration',
    description: 'Centralized cloud synchronization for custom company family libraries and standard sheet templates.',
    status: 'Planned',
  },
];

export default function FutureReleasesPage() {
  return (
    <main className="flex-1 w-full flex flex-col bg-[#0B1120] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-4">
            <Compass size={16} /> Development Roadmap
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Future Releases</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Explore planned features and upcoming enhancements in our active development pipeline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roadmapItems.map((item, idx) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -6 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="p-8 rounded-2xl bg-gray-900 border border-gray-800 flex flex-col justify-between shadow-xl relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">{item.category}</span>
                  <span className="inline-flex items-center gap-1 bg-blue-500/20 text-blue-300 text-xs font-bold px-2.5 py-1 rounded-full border border-blue-500/30">
                    <Clock size={12} /> {item.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{item.description}</p>
              </div>
              <div className="pt-4 border-t border-gray-800/80 text-xs text-gray-500 flex items-center gap-1.5">
                <Sparkles size={14} className="text-blue-400" /> Scheduled for upcoming sprint
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-gray-900/60 rounded-2xl border border-gray-800 p-8 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-3">Have a feature request?</h3>
          <p className="text-gray-400 text-sm mb-6 leading-relaxed">
            We build Verixa BIM Suite around real BIM workflows. Tell us what feature would save your team the most time!
          </p>
          <Link href="/contact" className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-colors inline-block">
            Submit Feature Request →
          </Link>
        </div>
      </div>
    </main>
  );
}
