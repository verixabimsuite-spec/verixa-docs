"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Download, ShoppingCart, Menu, X, Box, Zap, Settings, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageToggle } from '@/components/LanguageToggle';
import verixaLogo from '@/public/verixa-logo.jpg';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const INSTALLER_DOWNLOAD_URL = `${basePath}/downloads/VerixaBimSuite_Setup_v1.0.0.exe`;
const LEMON_SQUEEZY_CHECKOUT_URL = "https://verixa-tool.lemonsqueezy.com/checkout?utm_content=link_in_bio&utm_medium=social&utm_source=ig";

export function Navbar() {
  const { t } = useLanguage();
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-[#0B1120]/90 backdrop-blur-xl border-b border-gray-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="p-1 bg-gray-900 rounded-lg border border-gray-800 group-hover:border-blue-500/50 transition-colors">
            <Image
              src={verixaLogo}
              alt="Verixa Logo"
              className="h-9 w-auto object-contain rounded-md"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-black tracking-wider bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              VERIXA
            </span>
            <span className="text-[10px] tracking-widest uppercase text-blue-400 font-semibold -mt-1">
              BIM SUITE FOR REVIT
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Menu */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-300">
          
          {/* Products Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsProductsOpen(true)}
            onMouseLeave={() => setIsProductsOpen(false)}
          >
            <button 
              className="flex items-center gap-1.5 py-2 hover:text-white transition-colors"
              onClick={() => setIsProductsOpen(!isProductsOpen)}
            >
              <span>Products & Modules</span>
              <ChevronDown size={15} className={`transition-transform duration-200 ${isProductsOpen ? 'rotate-180 text-blue-400' : 'text-gray-500'}`} />
            </button>

            {/* Dropdown Menu Panel */}
            {isProductsOpen && (
              <div className="absolute top-full left-0 w-80 bg-gray-900/95 backdrop-blur-2xl border border-gray-800 rounded-2xl shadow-2xl p-4 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                <div className="text-[11px] font-bold uppercase tracking-wider text-gray-500 px-3 py-1">Core BIM Plugins</div>
                
                <DropdownItem 
                  href="/features/family-manager"
                  icon={<Box size={18} className="text-blue-400" />}
                  title="Family Manager"
                  desc="Instant 3D family search & cloud library"
                />
                
                <DropdownItem 
                  href="/features/smart-tag"
                  icon={<Zap size={18} className="text-emerald-400" />}
                  title="Smart Tag & Annotation"
                  desc="Automated room & element tagging"
                />
                
                <DropdownItem 
                  href="/features/batch-sheet-maker"
                  icon={<Settings size={18} className="text-purple-400" />}
                  title="Batch Sheet Maker"
                  desc="Excel-driven sheet generation in seconds"
                />

                <DropdownItem 
                  href="/features/layout-tools"
                  icon={<ShieldCheck size={18} className="text-amber-400" />}
                  title="Layout & Clash Tools"
                  desc="3D viewports & clash assistant"
                />
              </div>
            )}
          </div>

          <Link href="/docs/getting-started" className="hover:text-white transition-colors">
            {t('nav.docs')}
          </Link>
          <Link href="/pricing" className="hover:text-white transition-colors">
            {t('nav.pricing')}
          </Link>
          <Link href="/download" className="hover:text-white transition-colors">
            {t('nav.download')}
          </Link>
          <Link href="/support" className="hover:text-white transition-colors">
            {t('nav.support')}
          </Link>
        </nav>

        {/* Right CTA & Controls */}
        <div className="hidden lg:flex items-center gap-4">
          <LanguageToggle />

          {/* Trial Direct Download */}
          <a
            href={INSTALLER_DOWNLOAD_URL}
            download="VerixaBimSuite_Setup_v1.0.0.exe"
            className="px-4 py-2 rounded-xl bg-gray-800/90 hover:bg-gray-700 text-white font-medium text-xs flex items-center gap-2 border border-gray-700/60 transition-all hover:scale-[1.02]"
          >
            <Download size={14} className="text-blue-400" />
            <span>Free Trial</span>
          </a>

          {/* Buy License CTA */}
          <a
            href={LEMON_SQUEEZY_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-blue-600/25 transition-all hover:scale-[1.02]"
          >
            <ShoppingCart size={14} />
            <span>Buy License ($79)</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center gap-3">
          <LanguageToggle />
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2.5 rounded-xl bg-gray-800 text-gray-300 hover:text-white"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gray-900 border-b border-gray-800 px-6 py-6 space-y-6">
          <div className="space-y-3">
            <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Navigation</div>
            <Link href="/docs/getting-started" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-300 hover:text-white py-2 font-medium">
              {t('nav.docs')}
            </Link>
            <Link href="/features/family-manager" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-300 hover:text-white py-2 font-medium">
              Family Manager
            </Link>
            <Link href="/features/smart-tag" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-300 hover:text-white py-2 font-medium">
              Smart Tag
            </Link>
            <Link href="/features/batch-sheet-maker" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-300 hover:text-white py-2 font-medium">
              Batch Sheet Maker
            </Link>
            <Link href="/pricing" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-300 hover:text-white py-2 font-medium">
              {t('nav.pricing')}
            </Link>
            <Link href="/download" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-300 hover:text-white py-2 font-medium">
              {t('nav.download')}
            </Link>
            <Link href="/support" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-300 hover:text-white py-2 font-medium">
              {t('nav.support')}
            </Link>
          </div>

          <div className="pt-4 border-t border-gray-800 space-y-3">
            <a
              href={INSTALLER_DOWNLOAD_URL}
              download="VerixaBimSuite_Setup_v1.0.0.exe"
              className="w-full py-3 rounded-xl bg-gray-800 text-white font-semibold text-sm flex items-center justify-center gap-2"
            >
              <Download size={16} className="text-blue-400" />
              <span>Download Free Trial (.exe)</span>
            </a>
            <a
              href={LEMON_SQUEEZY_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-blue-600 text-white font-bold text-sm flex items-center justify-center gap-2"
            >
              <ShoppingCart size={16} />
              <span>Buy Commercial License ($79)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function DropdownItem({ href, icon, title, desc }: { href: string; icon: React.ReactNode; title: string; desc: string }) {
  return (
    <Link 
      href={href} 
      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-gray-800/80 transition-colors group"
    >
      <div className="p-2 rounded-lg bg-gray-800 border border-gray-700/50 group-hover:border-blue-500/30">
        {icon}
      </div>
      <div>
        <div className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors">{title}</div>
        <div className="text-[11px] text-gray-400 leading-tight">{desc}</div>
      </div>
    </Link>
  );
}
