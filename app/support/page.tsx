"use client";

import { motion } from 'framer-motion';
import { Mail, MessageSquare, Bug, FileQuestion, Clock, ShieldCheck, Youtube, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { BackButton } from '@/components/BackButton';

export default function SupportPage() {
  return (
    <main className="flex-1 w-full flex flex-col bg-[#0B1120] text-white py-20 px-6">
      <div className="max-w-5xl mx-auto w-full space-y-16">
        <BackButton label="Back to Home" />

        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Support Hub</h1>
          <p className="text-xl text-gray-400">Get technical support, report issues, or request new features for Verixa BIM Suite.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SupportCard icon={<Mail className="text-blue-400" size={32} />} title="Direct Email Support" description="Reach out directly to our technical engineering support team for licensing or installation queries." action="verixaidn@gmail.com" href="mailto:verixaidn@gmail.com" />
          <SupportCard icon={<Youtube className="text-red-500" size={32} />} title="Video Tutorials (YouTube)" description="Watch step-by-step video guides, family manager walk-throughs, and feature demos on our YouTube channel." action="Visit YouTube Channel →" href="https://www.youtube.com/@Verixa-tools" isExternal={true} />
          <SupportCard icon={<FileQuestion className="text-blue-400" size={32} />} title="Documentation & Guides" description="Browse detailed guides, activation instructions, and troubleshooting steps in our docs portal." action="Explore Documentation →" href="/docs/getting-started" />
          <SupportCard icon={<Bug className="text-blue-400" size={32} />} title="Bug Reports" description="Found an issue in Revit? Submit a bug report with log details for fast resolution." action="Report an Issue →" href="/contact" />
        </div>

        {/* Support Hours & Response Time */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 bg-gray-900 p-8 rounded-2xl border border-gray-800">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-blue-500/10 rounded-xl text-blue-400">
              <Clock size={28} />
            </div>
            <div>
              <h3 className="font-bold text-lg">Support Hours</h3>
              <p className="text-gray-400 text-sm">Monday – Friday: 09:00 – 17:00 (UTC+7)</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-4 bg-blue-500/10 rounded-xl text-blue-400">
              <ShieldCheck size={28} />
            </div>
            <div>
              <h3 className="font-bold text-lg">Response Time</h3>
              <p className="text-gray-400 text-sm">Priority response within 24 – 48 Hours</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-900/50 rounded-2xl border border-gray-800 p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Frequently Asked Questions</h2>
          <p className="text-gray-400 text-sm mb-6">Quick answers to common questions regarding Revit compatibility and licensing.</p>
          <Link href="/faq" className="px-6 py-3 rounded-xl bg-gray-800 hover:bg-gray-700 text-white font-medium inline-block transition-colors">
            View All FAQ Answers →
          </Link>
        </div>
      </div>
    </main>
  );
}

function SupportCard({ icon, title, description, action, href, isExternal = false }: any) {
  return (
    <motion.div whileHover={{ y: -5 }} className="bg-gray-900 p-8 rounded-2xl border border-gray-800 flex flex-col justify-between">
      <div>
        <div className="p-3 bg-background rounded-xl w-fit mb-6">{icon}</div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">{description}</p>
      </div>
      {isExternal ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-400 font-semibold hover:underline text-sm flex items-center gap-2">
          {action}
        </a>
      ) : (
        <Link href={href} className="text-blue-400 font-semibold hover:underline text-sm flex items-center gap-2">
          {action}
        </Link>
      )}
    </motion.div>
  );
}
