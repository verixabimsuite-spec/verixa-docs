"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import Link from 'next/link';

const faqCategories = [
  {
    category: 'Compatibility & Installation',
    items: [
      {
        q: 'Which Autodesk Revit versions are supported?',
        a: 'Verixa BIM Suite supports Autodesk Revit 2021, 2022, 2023, 2024, 2025, and 2026 (64-bit Windows). A single multi-target setup installer automatically deploys the correct DLL assemblies for all installed Revit versions on your machine.',
      },
      {
        q: 'How do I install Verixa BIM Suite?',
        a: 'Ensure Autodesk Revit is closed. Download the official installer (.exe) from our Downloads page and run it. The installer will guide you through setup in seconds. Once complete, launch Revit and access Verixa tools from the dedicated ribbon tab.',
      },
      {
        q: 'How do I uninstall the software?',
        a: 'You can uninstall Verixa BIM Suite at any time via Windows Settings > Apps & Features (Add/Remove Programs), or by running the uninstaller in %PROGRAMFILES%/Verixa BIM Suite/Uninstall.exe.',
      },
    ],
  },
  {
    category: 'Licensing & Activation',
    items: [
      {
        q: 'How does software activation work?',
        a: 'Upon purchase or trial registration, you will receive a Product License Key via email. Enter your key in the Verixa Settings dialog within Revit to activate. An initial internet connection is required for online verification.',
      },
      {
        q: 'Can I transfer my license to another computer?',
        a: 'Yes! You can deactivate your license key on your current PC via the Verixa Settings dialog inside Revit and reactivate it on your new computer instantly without additional charges.',
      },
      {
        q: 'Can I use Verixa BIM Suite offline without internet access?',
        a: 'Yes. Once initial activation is complete, Verixa operates 100% offline. No continuous internet connection is required, making it fully compliant with air-gapped security requirements.',
      },
      {
        q: 'How do software updates work?',
        a: 'Updates are free for 1 year with any Perpetual License. You can check for updates directly from the Verixa ribbon or by visiting our Downloads page.',
      },
    ],
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>('0-0');

  const toggleAccordion = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <main className="flex-1 w-full flex flex-col bg-[#0B1120] text-white py-20 px-6">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-4">
            <HelpCircle size={16} /> Knowledge & Help
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-400">Everything you need to know about Revit compatibility, licensing, and installation.</p>
        </div>

        <div className="space-y-10">
          {faqCategories.map((cat, catIdx) => (
            <div key={cat.category} className="space-y-4">
              <h2 className="text-xl font-bold text-blue-400 border-b border-gray-800 pb-2">{cat.category}</h2>
              <div className="space-y-3">
                {cat.items.map((item, itemIdx) => {
                  const id = `${catIdx}-${itemIdx}`;
                  const isOpen = openIndex === id;
                  return (
                    <div
                      key={item.q}
                      className="rounded-xl bg-gray-900 border border-gray-800 overflow-hidden transition-colors"
                    >
                      <button
                        onClick={() => toggleAccordion(id)}
                        className="w-full p-6 text-left flex items-center justify-between gap-4 font-semibold text-lg text-white hover:text-blue-400 transition-colors"
                      >
                        <span>{item.q}</span>
                        <ChevronDown
                          size={20}
                          className={`text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-blue-400' : ''}`}
                        />
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="px-6 pb-6 text-gray-300 text-sm leading-relaxed border-t border-gray-800/60 pt-4"
                          >
                            {item.a}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-gray-900/40 rounded-2xl border border-gray-800 p-8">
          <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
          <p className="text-gray-400 text-sm mb-6">Our technical support team is ready to help you with any inquiries.</p>
          <Link href="/support" className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-colors inline-block">
            Contact Support Hub →
          </Link>
        </div>
      </div>
    </main>
  );
}
