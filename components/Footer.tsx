"use client";

import Link from 'next/link';
import Image from 'next/image';
import verixaLogo from '@/public/verixa-logo.jpg';

export function Footer() {
  return (
    <footer className="w-full bg-[#080D1A] border-t border-gray-800/80 text-gray-400 py-16 px-6 md:px-12 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Brand Column */}
        <div className="md:col-span-2 space-y-4">
          <Link href="/" className="inline-block">
            <Image
              src={verixaLogo}
              alt="Verixa Logo"
              className="h-10 w-auto object-contain rounded-md"
            />
          </Link>
          <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
            Professional BIM productivity ecosystem for Autodesk Revit. Streamline 3D family management, automated drafting, clash detection, and layout presentations.
          </p>
          <div className="pt-2 text-xs text-gray-500">
            Official Autodesk App Store Partner Solution
          </div>
        </div>

        {/* Product & Solutions */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Product</h3>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link href="/docs/getting-started" className="hover:text-white transition-colors">
                Documentation
              </Link>
            </li>
            <li>
              <Link href="/download" className="hover:text-white transition-colors">
                Downloads
              </Link>
            </li>
            <li>
              <Link href="/release-notes" className="hover:text-white transition-colors">
                Release Notes
              </Link>
            </li>
            <li>
              <Link href="/future-releases" className="hover:text-white transition-colors flex items-center gap-1.5">
                Future Releases
                <span className="bg-blue-500/20 text-blue-400 text-[10px] font-bold px-1.5 py-0.5 rounded">Roadmap</span>
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-white transition-colors">
                Pricing
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources & Support */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Resources</h3>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link href="/faq" className="hover:text-white transition-colors">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/support" className="hover:text-white transition-colors">
                Support Hub
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact & Sales
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal & Compliance */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Legal</h3>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-of-service" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/eula" className="hover:text-white transition-colors">
                EULA (License)
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-gray-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
        <p>© {new Date().getFullYear()} Verixa BIM Suite. All rights reserved. Autodesk and Revit are registered trademarks of Autodesk, Inc.</p>
        <p>Support Email: <a href="mailto:verixaidn@gmail.com" className="text-blue-400 hover:underline">verixaidn@gmail.com</a></p>
      </div>
    </footer>
  );
}
