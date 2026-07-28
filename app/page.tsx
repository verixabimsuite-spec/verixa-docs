"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Box, Zap, Settings, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex-1 w-full flex flex-col bg-background text-text">
      {/* Navbar Placeholder */}
      <header className="w-full py-6 px-8 flex justify-between items-center border-b border-card z-50 sticky top-0 bg-background/80 backdrop-blur-md">
        <div className="font-bold text-2xl tracking-tight text-white flex items-center gap-2">
          <span className="text-primary text-3xl">V</span>
          VERIXA
        </div>
        <nav className="hidden md:flex gap-6 font-medium text-secondaryText">
          <Link href="/docs/getting-started" className="hover:text-white transition-colors">Documentation</Link>
          <Link href="/features" className="hover:text-white transition-colors">Features</Link>
          <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
          <Link href="/download" className="hover:text-white transition-colors">Download</Link>
        </nav>
        <div className="flex gap-4">
          <Link href="/docs/getting-started" className="px-5 py-2 rounded-full bg-card hover:bg-card/80 transition-colors font-medium text-sm">
            Docs
          </Link>
          <Link href="/download" className="px-5 py-2 rounded-full bg-primary hover:bg-blue-600 transition-colors font-medium text-sm text-white">
            Get Started
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full min-h-[85vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10 max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
            Next-Generation <br/> Revit BIM Ecosystem
          </h1>
          <p className="text-xl md:text-2xl text-secondaryText mb-10 max-w-2xl mx-auto">
            Verixa Suite is a professional productivity suite for Autodesk Revit. Manage families, automate repetitive tasks, and improve documentation workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/download" className="px-8 py-4 rounded-full bg-primary hover:bg-blue-600 text-white font-semibold text-lg flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-[0_0_40px_-10px_rgba(59,130,246,0.6)]">
              Download Now <ArrowRight size={20} />
            </Link>
            <Link href="/docs/getting-started" className="px-8 py-4 rounded-full bg-card hover:bg-card/80 text-white font-semibold text-lg flex items-center justify-center transition-all">
              Read Documentation
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Features Preview */}
      <section className="w-full py-24 px-6 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Enterprise Productivity</h2>
            <p className="text-secondaryText text-lg max-w-2xl mx-auto">Designed for Architects, BIM Engineers, and AEC Companies to dramatically increase Revit modeling speed.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Box size={32} className="text-primary" />}
              title="Family Manager"
              description="Organize, search, and load Revit families instantly. Cloud-synced and lightning fast."
            />
            <FeatureCard 
              icon={<Zap size={32} className="text-primary" />}
              title="Auto Annotation"
              description="Automatically generate tags and dimensions for complex views with a single click."
            />
            <FeatureCard 
              icon={<Settings size={32} className="text-primary" />}
              title="Batch Sheet Maker"
              description="Create hundreds of sheets from Excel schedules in seconds. No manual data entry."
            />
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="w-full border-t border-card py-12 px-8 text-center text-secondaryText">
        <p>© 2026 Verixa Suite. All rights reserved.</p>
      </footer>
    </main>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="p-8 rounded-2xl bg-card border border-gray-800 shadow-xl hover:border-primary/50 transition-colors"
    >
      <div className="w-14 h-14 rounded-xl bg-background flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-secondaryText leading-relaxed">{description}</p>
    </motion.div>
  );
}
