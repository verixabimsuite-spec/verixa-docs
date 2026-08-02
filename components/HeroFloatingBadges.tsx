"use client";

import { motion } from 'framer-motion';

export function HeroFloatingBadges() {
  return (
    <>
      {/* Top Left Badge */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="hidden lg:flex absolute top-28 left-8 z-20 items-center gap-2.5 px-4 py-2 rounded-full bg-gray-900/80 border border-blue-500/30 backdrop-blur-md shadow-[0_0_25px_rgba(59,130,246,0.2)] text-white text-xs font-semibold select-none pointer-events-none"
      >
        <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-ping" />
        <span>⚡ 10x Faster Tagging</span>
      </motion.div>

      {/* Top Right Badge */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="hidden lg:flex absolute top-36 right-10 z-20 items-center gap-2.5 px-4 py-2 rounded-full bg-gray-900/80 border border-purple-500/30 backdrop-blur-md shadow-[0_0_25px_rgba(168,85,247,0.2)] text-white text-xs font-semibold select-none pointer-events-none"
      >
        <span className="text-purple-400">📦</span>
        <span>20,000+ Families Scanned</span>
      </motion.div>

      {/* Bottom Left Badge */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="hidden lg:flex absolute bottom-24 left-12 z-20 items-center gap-2.5 px-4 py-2 rounded-full bg-gray-900/80 border border-emerald-500/30 backdrop-blur-md shadow-[0_0_25px_rgba(16,185,129,0.2)] text-white text-xs font-semibold select-none pointer-events-none"
      >
        <span className="text-emerald-400">⏱️</span>
        <span>85% Time Saved</span>
      </motion.div>

      {/* Bottom Right Badge */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="hidden lg:flex absolute bottom-32 right-12 z-20 items-center gap-2.5 px-4 py-2 rounded-full bg-gray-900/80 border border-cyan-500/30 backdrop-blur-md shadow-[0_0_25px_rgba(6,182,212,0.2)] text-white text-xs font-semibold select-none pointer-events-none"
      >
        <span className="text-cyan-400">✅</span>
        <span>Revit 2020 - 2025 Ready</span>
      </motion.div>
    </>
  );
}
