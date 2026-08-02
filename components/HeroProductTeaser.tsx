"use client";

import { motion } from 'framer-motion';
import { AppImage } from '@/components/AppImage';

export function HeroProductTeaser() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
      className="w-full max-w-5xl mx-auto mt-14 px-4 z-20 relative"
    >
      {/* Outer Glow halo */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 opacity-30 blur-2xl group-hover:opacity-100 transition duration-1000 animate-pulse pointer-events-none" />

      {/* Glassmorphic Window Mockup */}
      <div className="relative rounded-2xl bg-gray-950/90 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden backdrop-blur-xl">
        {/* Window Top Bar */}
        <div className="px-4 py-3 bg-gray-900/90 border-b border-gray-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
          </div>
          <span className="text-xs text-gray-400 font-mono font-medium tracking-wide">
            Verixa BIM Suite v1.4 — Autodesk Revit Dockable Panel
          </span>
          <div className="w-12" />
        </div>

        {/* Product Screenshot */}
        <div className="relative group overflow-hidden">
          <AppImage
            src="/images/family-manager-1.png"
            alt="Verixa BIM Suite Interface Preview"
            width={1280}
            height={720}
            className="w-full h-auto object-cover transform group-hover:scale-[1.01] transition-transform duration-700 ease-out"
            priority
          />

          {/* Bottom Gradient Fade */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent pointer-events-none" />
        </div>
      </div>
    </motion.div>
  );
}
