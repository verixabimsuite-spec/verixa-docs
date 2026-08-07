"use client";

import Link from 'next/link';
import { ArrowRight, CheckCircle2, Download, ShoppingCart, Box, Zap, FileSpreadsheet, Layers, ShieldCheck, Cpu, HardDrive } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { AppImage } from '@/components/AppImage';

import { FaqAccordion } from '@/components/FaqAccordion';
import { PricingMatrix } from '@/components/PricingMatrix';
import { HeroProductTeaser } from '@/components/HeroProductTeaser';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const INSTALLER_DOWNLOAD_URL = `${basePath}/downloads/VerixaBimSuite_Setup_v1.0.0.exe`;
const LEMON_SQUEEZY_CHECKOUT_URL = "https://verixa-tool.lemonsqueezy.com/checkout?utm_content=link_in_bio&utm_medium=social&utm_source=ig";

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <main className="flex-1 w-full flex flex-col bg-[#0B0F19] text-gray-100 font-sans">
      
      {/* Clean Autodesk Corporate Hero Section */}
      <section className="w-full py-16 md:py-24 px-6 border-b border-gray-800 bg-[#0F172A]">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-950/80 border border-blue-800/60 text-blue-300 text-xs font-semibold uppercase tracking-wider">
            <span>Autodesk® Revit® 2021 – 2027 Native Plugin Ecosystem</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
            Automate Repetitive Revit Drafting & Manage 3D BIM Families
          </h1>

          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Built specifically for BIM Managers, Architects, and Structural Drafters. Verixa BIM Suite integrates directly into your Autodesk Revit workspace to eliminate manual tagging, streamline sheet creation from Excel, and organize RFA family libraries.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a 
              href={INSTALLER_DOWNLOAD_URL}
              download="VerixaBimSuite_Setup_v1.0.0.exe"
              className="w-full sm:w-auto px-7 py-3.5 rounded bg-[#006699] hover:bg-[#005580] text-white font-bold text-sm flex items-center justify-center gap-2.5 transition-colors shadow-md"
            >
              <Download size={18} />
              <span>Download 7-Day Free Trial (.exe)</span>
            </a>

            <a 
              href={LEMON_SQUEEZY_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded bg-gray-800 hover:bg-gray-700 text-white font-semibold text-sm flex items-center justify-center gap-2.5 transition-colors border border-gray-700"
            >
              <ShoppingCart size={18} className="text-emerald-400" />
              <span>Buy Commercial License ($79)</span>
            </a>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 pt-3 text-xs text-gray-400 font-medium">
            <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-emerald-400" /> No credit card required</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-emerald-400" /> Standalone Setup Installer</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-emerald-400" /> 100% Offline Capable</span>
          </div>

          {/* Real Software UI Showcase Header Window */}
          <HeroProductTeaser />
        </div>
      </section>

      {/* System Metrics Bar */}
      <section className="w-full py-10 px-6 bg-[#0B1120] border-b border-gray-800">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">Revit 2021–2027</div>
            <div className="text-xs text-gray-400">Full Version Compatibility</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">Native C# API</div>
            <div className="text-xs text-gray-400">Lightning-Fast Execution</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">10x Speed</div>
            <div className="text-xs text-gray-400">Faster Tagging & Sheet Setup</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">Offline License</div>
            <div className="text-xs text-gray-400">No Constant Internet Needed</div>
          </div>
        </div>
      </section>

      {/* Product Feature Showcase (Alternating Left-Right Autodesk Layout) */}
      <section className="w-full py-20 px-6 space-y-24 max-w-7xl mx-auto">
        
        {/* Feature 1: Family Manager */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Screenshot */}
          <div className="rounded-xl bg-[#0F172A] border border-gray-800 p-2 shadow-xl overflow-hidden">
            <AppImage
              src="/images/family-manager-1.png"
              alt="Family Manager Interface in Revit"
              width={800}
              height={500}
              className="w-full h-auto rounded border border-gray-800"
            />
          </div>
          {/* Right Text Description */}
          <div className="space-y-5">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-400 flex items-center gap-2">
              <Box size={16} /> Module 01 — Family Management
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white leading-snug">
              Instant 3D Family Search & Organization
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Stop wasting time navigating slow Windows open dialogs. Family Manager automatically scans your local drives and network servers, generating visual 3D thumbnails for instant drag-and-drop placement directly into your active Revit views.
            </p>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>Search thousands of RFA files by category, keyword, or parameter instantly.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>Batch-load multiple family types into your active Revit project in one click.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>Connects to local server NAS, Google Drive, OneDrive, and office network drives.</span>
              </li>
            </ul>
            <div className="pt-2">
              <Link 
                href="/features/family-manager" 
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#006699] hover:text-blue-300 transition-colors"
              >
                <span>Explore Family Manager Workflow</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Feature 2: Smart Tag & Auto Annotation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Description */}
          <div className="space-y-5 order-2 lg:order-1">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
              <Zap size={16} /> Module 02 — Drafting Automation
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white leading-snug">
              Automated Room, Door, and Window Tagging
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Eliminate hundreds of hours spent manually placing tags and dimension lines. Smart Tag analyzes room geometry, wall boundaries, and view crop regions to position tags and spot elevations with zero element overlap.
            </p>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>One-click room, door, and window tag generation across entire floor plans.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>Automated exterior wall dimensioning and aligned spot elevation callouts.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>Smart collision detection avoids overlapping drawing text and crop boundaries.</span>
              </li>
            </ul>
            <div className="pt-2">
              <Link 
                href="/features/smart-tag" 
                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <span>Explore Smart Tag Workflow</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          {/* Right Screenshot */}
          <div className="rounded-xl bg-[#0F172A] border border-gray-800 p-2 shadow-xl overflow-hidden order-1 lg:order-2">
            <AppImage
              src="/images/smart-tag-1.png"
              alt="Smart Tag Interface in Revit"
              width={800}
              height={500}
              className="w-full h-auto rounded border border-gray-800"
            />
          </div>
        </div>

        {/* Feature 3: Batch Sheet Maker */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Screenshot */}
          <div className="rounded-xl bg-[#0F172A] border border-gray-800 p-2 shadow-xl overflow-hidden">
            <AppImage
              src="/images/batch-sheet-maker-1.png"
              alt="Batch Sheet Maker Interface in Revit"
              width={800}
              height={500}
              className="w-full h-auto rounded border border-gray-800"
            />
          </div>
          {/* Right Text Description */}
          <div className="space-y-5">
            <div className="text-xs font-bold uppercase tracking-wider text-purple-400 flex items-center gap-2">
              <FileSpreadsheet size={16} /> Module 03 — Documentation & Sheets
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white leading-snug">
              Generate Hundreds of Revit Sheets from Excel
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Transform your drawing package delivery. Import sheet list matrices directly from Excel schedules to generate complete drawing sheet sets, assign titleblocks, and align viewports automatically.
            </p>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>Direct Excel spreadsheet ingestion with custom parameter mapping.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>Automated viewport placement for floor plans, elevations, and 3D views.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={18} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>Ensures consistent titleblock numbering and drawing index organization.</span>
              </li>
            </ul>
            <div className="pt-2">
              <Link 
                href="/features/batch-sheet-maker" 
                className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors"
              >
                <span>Explore Batch Sheet Maker Workflow</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

      </section>

      {/* Technical Specifications Grid */}
      <section className="w-full py-16 px-6 bg-[#0F172A] border-y border-gray-800">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Technical Specifications & Requirements</h2>
            <p className="text-gray-400 text-sm">Verixa BIM Suite is engineered for enterprise stability and performance.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg bg-[#1E293B] border border-gray-700/80 space-y-3">
              <div className="p-2.5 w-fit rounded bg-blue-950 text-blue-400 border border-blue-800">
                <Cpu size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Revit Integration</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Written natively in C# utilizing official Autodesk Revit API endpoints. Dockable panel architecture ensures seamless integration with standard Revit ribbons.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-[#1E293B] border border-gray-700/80 space-y-3">
              <div className="p-2.5 w-fit rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                <HardDrive size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">OS & Hardware</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Compatible with Windows 10 & Windows 11 (64-bit). Works on standard workstation setups running Autodesk Revit 2021 through 2027.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-[#1E293B] border border-gray-700/80 space-y-3">
              <div className="p-2.5 w-fit rounded bg-purple-950 text-purple-400 border border-purple-800">
                <ShieldCheck size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Licensing & Activation</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Supports single-machine activation keys delivered instantly by Lemon Squeezy. Includes offline licensing mode for secure corporate networks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Feature Comparison Matrix */}
      <PricingMatrix />

      {/* Interactive FAQ Accordion */}
      <FaqAccordion />

      {/* Clean Autodesk Corporate Pre-Footer Call to Action */}
      <section className="w-full py-16 px-6 bg-[#0F172A] border-t border-gray-800 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Start Streamlining Your Revit Workflows Today
          </h2>
          <p className="text-gray-300 text-base max-w-2xl mx-auto">
            Test all features on your active projects with our full 7-day trial or purchase your lifetime perpetual license.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <a
              href={INSTALLER_DOWNLOAD_URL}
              download="VerixaBimSuite_Setup_v1.0.0.exe"
              className="px-7 py-3.5 rounded bg-[#006699] hover:bg-[#005580] text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors"
            >
              <Download size={18} />
              <span>Download Free Trial (.exe)</span>
            </a>
            <a
              href={LEMON_SQUEEZY_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded bg-gray-800 hover:bg-gray-700 text-white font-semibold text-sm flex items-center justify-center gap-2 border border-gray-700"
            >
              <ShoppingCart size={18} className="text-emerald-400" />
              <span>Buy Commercial License ($79)</span>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
