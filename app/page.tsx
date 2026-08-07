"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Box, Zap, Settings, ShieldCheck, Download, ShoppingCart, Sparkles, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

import { FaqAccordion } from '@/components/FaqAccordion';
import { PricingMatrix } from '@/components/PricingMatrix';
import { HeroFloatingBadges } from '@/components/HeroFloatingBadges';
import { HeroProductTeaser } from '@/components/HeroProductTeaser';
import { HeroStatsBar } from '@/components/HeroStatsBar';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const INSTALLER_DOWNLOAD_URL = `${basePath}/downloads/VerixaBimSuite_Setup_v1.0.0.exe`;
const LEMON_SQUEEZY_CHECKOUT_URL = "https://verixa-tool.lemonsqueezy.com/checkout?utm_content=link_in_bio&utm_medium=social&utm_source=ig";

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <main className="flex-1 w-full flex flex-col bg-[#0B1120] text-white overflow-hidden">
      
      {/* Autodesk-Style Hero Section */}
      <section className="relative w-full min-h-[85vh] flex flex-col items-center justify-center text-center px-6 pt-16 pb-20 overflow-hidden border-b border-gray-800/60">
        
        {/* Subtle Ambient Mesh Halos */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] bg-gradient-to-r from-blue-600/15 via-cyan-500/15 to-purple-600/15 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        {/* Animated Compatibility Pill */}
        <div className="z-10 inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-8 shadow-sm">
          <Sparkles size={14} className="text-blue-400" />
          <span>Autodesk® Revit® 2021 – 2027 Native Plugin Ecosystem</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="z-10 max-w-4xl"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mb-6 leading-[1.1] text-white">
            Accelerate Your <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">Autodesk Revit</span> Productivity
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-normal leading-relaxed">
            Eliminate repetitive drafting tasks, organize 3D family libraries, automated tagging, and generate hundreds of sheets in seconds.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Primary Download CTA */}
            <a 
              href={INSTALLER_DOWNLOAD_URL}
              download="VerixaBimSuite_Setup_v1.0.0.exe"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base flex items-center justify-center gap-3 transition-all hover:scale-[1.02] shadow-lg shadow-blue-600/30"
            >
              <Download size={20} />
              <span>Download 7-Day Free Trial (.exe)</span>
            </a>

            {/* Buy Commercial License */}
            <a 
              href={LEMON_SQUEEZY_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gray-900 hover:bg-gray-800 text-white font-semibold text-base flex items-center justify-center gap-3 transition-all border border-gray-700/80 hover:border-gray-600"
            >
              <ShoppingCart size={20} className="text-emerald-400" />
              <span>Buy Commercial License ($79)</span>
            </a>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 mt-8 text-xs text-gray-400 font-medium">
            <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-emerald-400" /> No credit card required</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-emerald-400" /> Instant Setup (.exe)</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-emerald-400" /> Full feature access</span>
          </div>
        </motion.div>

        {/* Hero Interactive Teaser Window */}
        <HeroProductTeaser />
      </section>

      {/* Hero Performance Stats Bar */}
      <HeroStatsBar />

      {/* Feature Modules Grid Showcase */}
      <section className="w-full py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-800/80 border border-gray-700/60 text-gray-300 text-xs font-semibold uppercase tracking-wider">
              Core Capabilities
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Enterprise-Grade Revit Automation
            </h2>
            <p className="text-gray-400 text-base sm:text-lg">
              Engineered specifically for BIM Managers, Architects, and Structural Engineers to deliver projects up to 10x faster.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              href="/features/family-manager" 
              icon={<Box size={28} className="text-blue-400" />} 
              badge="Module 01"
              title="Family Manager" 
              description="Organize, search, and insert 2D/3D Revit families from local drives or cloud servers with real-time thumbnail previews." 
            />
            <FeatureCard 
              href="/features/smart-tag" 
              icon={<Zap size={28} className="text-emerald-400" />} 
              badge="Module 02"
              title="Smart Tag & Annotation" 
              description="Automatically place room tags, door/window marks, spot elevations, and dimensions without manual positioning." 
            />
            <FeatureCard 
              href="/features/batch-sheet-maker" 
              icon={<Settings size={28} className="text-purple-400" />} 
              badge="Module 03"
              title="Batch Sheet Maker" 
              description="Create hundreds of Revit drawing sheets from Excel matrix spreadsheets in seconds with automatic view placement." 
            />
            <FeatureCard 
              href="/features/layout-tools" 
              icon={<ShieldCheck size={28} className="text-amber-400" />} 
              badge="Module 04"
              title="Layout & Clash Tools" 
              description="Generate aligned 3D perspective views, section cuts, and quick clash detection previews for Revit elements." 
            />
          </div>
        </div>
      </section>

      {/* Pricing Feature Comparison Matrix */}
      <PricingMatrix />

      {/* Interactive FAQ Accordion */}
      <FaqAccordion />

      {/* Autodesk-Style Pre-Footer Call to Action Banner */}
      <section className="w-full py-20 px-6 bg-gradient-to-b from-[#0B1120] via-blue-950/30 to-[#080D1A] border-t border-gray-800">
        <div className="max-w-5xl mx-auto rounded-3xl bg-gray-900/90 border border-gray-800 p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
              Ready to Upgrade Your Revit Workflow?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Download the free 7-day trial installer or secure your lifetime perpetual license with priority email support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href={INSTALLER_DOWNLOAD_URL}
                download="VerixaBimSuite_Setup_v1.0.0.exe"
                className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base flex items-center justify-center gap-3 transition-all shadow-lg shadow-blue-600/25"
              >
                <Download size={20} />
                <span>Start Free Trial (.exe)</span>
              </a>
              <a
                href={LEMON_SQUEEZY_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl bg-gray-800 hover:bg-gray-700 text-white font-semibold text-base flex items-center justify-center gap-3 transition-all border border-gray-700"
              >
                <ShoppingCart size={20} className="text-emerald-400" />
                <span>Buy License ($79)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

function FeatureCard({ icon, title, description, badge, href }: { icon: React.ReactNode; title: string; description: string; badge: string; href?: string }) {
  return (
    <Link href={href || "#"} className="group block h-full">
      <motion.div
        whileHover={{ y: -6 }}
        className="p-8 rounded-2xl bg-gray-900/90 border border-gray-800 shadow-xl group-hover:border-blue-500/50 transition-all flex flex-col justify-between h-full relative"
      >
        <div>
          <div className="flex items-center justify-between mb-6">
            <div className="p-3 rounded-xl bg-gray-800 border border-gray-700/60 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-colors">
              {icon}
            </div>
            <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-gray-500 bg-gray-800/60 px-2.5 py-1 rounded-md">
              {badge}
            </span>
          </div>
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">{description}</p>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-bold text-blue-400 group-hover:translate-x-1 transition-transform">
          <span>Explore Details</span>
          <ArrowRight size={14} />
        </div>
      </motion.div>
    </Link>
  );
}
