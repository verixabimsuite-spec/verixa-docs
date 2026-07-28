"use client";

import { Download, FileText, Shield } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function DownloadPage() {
  return (
    <main className="flex-1 w-full flex flex-col bg-background text-text py-20 px-6">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Download Verixa Suite</h1>
          <p className="text-xl text-secondaryText">Get the latest version for Autodesk Revit 2021-2024.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card rounded-2xl border border-gray-800 p-8 md:p-12 shadow-2xl mb-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-3xl font-bold">Version 2.4.1</h2>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase">Latest</span>
              </div>
              <p className="text-secondaryText mb-6">Released on November 15, 2025</p>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-1"><Shield size={16} /> Verified Safe</span>
                <span className="flex items-center gap-1"><FileText size={16} /> 45 MB</span>
              </div>
            </div>
            
            <button className="w-full md:w-auto px-8 py-4 rounded-xl bg-primary hover:bg-blue-600 text-white font-semibold flex items-center justify-center gap-3 transition-colors shadow-lg shadow-primary/25">
              <Download size={24} /> Download for Windows
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card/50 p-8 rounded-xl border border-gray-800">
            <h3 className="text-xl font-bold mb-4">Installation Guide</h3>
            <p className="text-secondaryText mb-6 text-sm leading-relaxed">
              1. Ensure Autodesk Revit is closed.<br/>
              2. Run the downloaded installer (.exe).<br/>
              3. Follow the on-screen instructions.<br/>
              4. Open Revit and navigate to the Verixa Suite tab.
            </p>
            <Link href="/docs/installation" className="text-primary hover:underline text-sm font-medium">Read full installation guide &rarr;</Link>
          </div>

          <div className="bg-card/50 p-8 rounded-xl border border-gray-800">
            <h3 className="text-xl font-bold mb-4">Previous Versions</h3>
            <ul className="space-y-3">
              <li className="flex justify-between items-center text-sm">
                <span className="text-gray-300">Version 2.3.5</span>
                <button className="text-primary hover:underline">Download</button>
              </li>
              <li className="flex justify-between items-center text-sm">
                <span className="text-gray-300">Version 2.3.0</span>
                <button className="text-primary hover:underline">Download</button>
              </li>
              <li className="flex justify-between items-center text-sm">
                <span className="text-gray-300">Version 2.0.0</span>
                <button className="text-primary hover:underline">Download</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
