"use client";

import { motion } from 'framer-motion';

const STATS = [
  { value: "20,000+", label: "RFA Scanned / sec" },
  { value: "10x", label: "Faster Tag Placement" },
  { value: "85%", label: "BIM Time Reduction" },
  { value: "100%", label: "Offline & Cloud Ready" }
];

export function HeroStatsBar() {
  return (
    <section className="w-full py-12 px-6 border-y border-gray-800/60 bg-gray-950/40 backdrop-blur-md">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center"
          >
            <div className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-1">
              {stat.value}
            </div>
            <div className="text-xs md:text-sm text-gray-400 font-medium">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
