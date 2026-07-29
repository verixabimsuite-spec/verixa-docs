"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Target, Eye, Cpu, Compass } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="flex-1 w-full flex flex-col bg-[#0B1120] text-white py-20 px-6">
      <div className="max-w-4xl mx-auto w-full space-y-16">
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">About Verixa BIM Suite</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Professional productivity software solution engineered specifically for Autodesk Revit users, BIM Managers, and MEP engineers.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 space-y-4">
            <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 w-fit">
              <Target size={28} />
            </div>
            <h2 className="text-2xl font-bold text-white">Our Mission</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              To eliminate repetitive manual BIM tasks, accelerate sheet production, and deliver real-time coordination tools directly within the Autodesk Revit interface.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 space-y-4">
            <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 w-fit">
              <Eye size={28} />
            </div>
            <h2 className="text-2xl font-bold text-white">Our Vision</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              To become the leading productivity add-in ecosystem for AEC professionals worldwide, setting new benchmarks for 3D family inspection and zero-export clash detection.
            </p>
          </div>
        </section>

        {/* Product Overview */}
        <section className="bg-gray-900/60 p-8 md:p-12 rounded-2xl border border-gray-800 space-y-6">
          <div className="flex items-center gap-3">
            <Cpu className="text-blue-400" size={32} />
            <h2 className="text-3xl font-bold">Product Overview</h2>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            Verixa BIM Suite integrates multi-threaded high-speed 3D graphics (powered by Helix Toolkit Direct3D 11), spatial collision avoidance algorithms for tagging, automated Excel-driven sheet generation, and extensible storage clash tracking into a single unified Revit ribbon.
          </p>
        </section>

        {/* Development Roadmap */}
        <section className="bg-gray-900 p-8 rounded-2xl border border-gray-800 text-center space-y-4">
          <Compass className="text-blue-400 mx-auto" size={36} />
          <h2 className="text-2xl font-bold">Development Roadmap</h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            Explore planned features like AI Family Search, Parameter Manager, and Batch PDF Export.
          </p>
          <Link href="/future-releases" className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-colors inline-block mt-2">
            View Public Roadmap →
          </Link>
        </section>
      </div>
    </main>
  );
}
