"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Download, ShoppingCart, Menu, X, Box, Zap, FileSpreadsheet, Layers } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageToggle } from '@/components/LanguageToggle';
import verixaLogo from '@/public/verixa-logo.jpg';

import { LEMON_SQUEEZY_CHECKOUT_URL, INSTALLER_DOWNLOAD_URL } from '@/lib/constants';

export function Navbar() {
  const { t } = useLanguage();
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Top Autodesk Announcement Bar */}
      <div className="w-full bg-[#0F172A] border-b border-gray-800 text-gray-300 text-xs py-2 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-[#006699] text-white px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">Official</span>
            <span className="font-medium text-gray-300">Autodesk® Revit® 2021 – 2027 Compatible Ecosystem</span>
          </div>
          <div className="flex items-center gap-4 text-gray-400 text-[11px]">
            <span>Latest Version: v1.0.0</span>
            <span className="hidden sm:inline">•</span>
            <Link href="/release-notes" className="hover:text-white transition-colors underline">View Release Notes</Link>
          </div>
        </div>
      </div>

      {/* Main Corporate Header */}
      <header className="w-full sticky top-0 z-50 bg-[#111827] border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* Logo & Brand Name */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={verixaLogo}
              alt="Verixa Logo"
              className="h-8 w-auto object-contain rounded"
              priority
            />
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-white">
                VERIXA <span className="font-light text-gray-400">BIM SUITE</span>
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-gray-300">
            
            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button 
                className="flex items-center gap-1 py-2 hover:text-white transition-colors"
                onClick={() => setIsProductsOpen(!isProductsOpen)}
              >
                <span>Products & Features</span>
                <ChevronDown size={14} className={`transition-transform ${isProductsOpen ? 'rotate-180 text-blue-400' : 'text-gray-400'}`} />
              </button>

              {isProductsOpen && (
                <div className="absolute top-full left-0 w-80 bg-[#1F2937] border border-gray-700 rounded-lg shadow-xl p-3 space-y-1 z-50">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 px-3 py-1.5 border-b border-gray-700/60 mb-1">
                    Revit Plugins
                  </div>
                  
                  <DropdownItem 
                    href="/features/family-manager"
                    icon={<Box size={16} className="text-blue-400" />}
                    title="Family Manager"
                    desc="3D family browser & cloud library"
                  />
                  
                  <DropdownItem 
                    href="/features/smart-tag"
                    icon={<Zap size={16} className="text-emerald-400" />}
                    title="Smart Tag & Annotation"
                    desc="Automated room & element tagging"
                  />
                  
                  <DropdownItem 
                    href="/features/batch-sheet-maker"
                    icon={<FileSpreadsheet size={16} className="text-purple-400" />}
                    title="Batch Sheet Maker"
                    desc="Excel-driven sheet generation"
                  />

                  <DropdownItem 
                    href="/features/layout-tools"
                    icon={<Layers size={16} className="text-amber-400" />}
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

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageToggle />

            {/* Trial Download Button */}
            <a
              href={INSTALLER_DOWNLOAD_URL}
              download="VerixaBimSuite_Setup_v1.0.0.exe"
              className="px-3.5 py-1.5 rounded bg-gray-800 hover:bg-gray-700 text-white font-medium text-xs border border-gray-700 flex items-center gap-1.5 transition-colors"
            >
              <Download size={13} className="text-blue-400" />
              <span>Free Trial</span>
            </a>

            {/* Buy License Button */}
            <a
              href={LEMON_SQUEEZY_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded bg-[#006699] hover:bg-[#005580] text-white font-semibold text-xs flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <ShoppingCart size={13} />
              <span>Buy License ($79)</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center gap-3">
            <LanguageToggle />
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded bg-gray-800 text-gray-300 hover:text-white border border-gray-700"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#1F2937] border-b border-gray-800 px-6 py-5 space-y-4">
            <div className="space-y-2 text-sm font-medium">
              <Link href="/docs/getting-started" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-300 hover:text-white py-1.5">
                {t('nav.docs')}
              </Link>
              <Link href="/features/family-manager" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-300 hover:text-white py-1.5">
                Family Manager
              </Link>
              <Link href="/features/smart-tag" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-300 hover:text-white py-1.5">
                Smart Tag & Annotation
              </Link>
              <Link href="/features/batch-sheet-maker" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-300 hover:text-white py-1.5">
                Batch Sheet Maker
              </Link>
              <Link href="/pricing" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-300 hover:text-white py-1.5">
                {t('nav.pricing')}
              </Link>
              <Link href="/download" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-300 hover:text-white py-1.5">
                {t('nav.download')}
              </Link>
              <Link href="/support" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-300 hover:text-white py-1.5">
                {t('nav.support')}
              </Link>
            </div>

            <div className="pt-3 border-t border-gray-700 space-y-2">
              <a
                href={INSTALLER_DOWNLOAD_URL}
                download="VerixaBimSuite_Setup_v1.0.0.exe"
                className="w-full py-2.5 rounded bg-gray-800 text-white font-medium text-xs flex items-center justify-center gap-2 border border-gray-700"
              >
                <Download size={14} className="text-blue-400" />
                <span>Download Free Trial (.exe)</span>
              </a>
              <a
                href={LEMON_SQUEEZY_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded bg-[#006699] text-white font-bold text-xs flex items-center justify-center gap-2"
              >
                <ShoppingCart size={14} />
                <span>Buy Commercial License ($79)</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

function DropdownItem({ href, icon, title, desc }: { href: string; icon: React.ReactNode; title: string; desc: string }) {
  return (
    <Link 
      href={href} 
      className="flex items-start gap-3 p-2 rounded hover:bg-gray-700/60 transition-colors group"
    >
      <div className="p-1.5 rounded bg-gray-800 border border-gray-700 mt-0.5">
        {icon}
      </div>
      <div>
        <div className="text-xs font-semibold text-gray-200 group-hover:text-white">{title}</div>
        <div className="text-[11px] text-gray-400">{desc}</div>
      </div>
    </Link>
  );
}
