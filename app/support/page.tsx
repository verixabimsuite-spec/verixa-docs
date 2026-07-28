"use client";

import { motion } from 'framer-motion';
import { Mail, MessageSquare, Bug, FileQuestion } from 'lucide-react';
import Link from 'next/link';

export default function SupportPage() {
  return (
    <main className="flex-1 w-full flex flex-col bg-background text-text py-20 px-6">
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">How can we help?</h1>
          <p className="text-xl text-secondaryText">Get support, report bugs, or request new features.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <SupportCard 
            icon={<Mail className="text-primary" size={32} />}
            title="Email Support"
            description="Contact our technical team directly at verixaidn@gmail.com"
            action="Send Email"
            href="mailto:verixaidn@gmail.com"
          />
          <SupportCard 
            icon={<FileQuestion className="text-primary" size={32} />}
            title="Documentation"
            description="Read our comprehensive guides and API references."
            action="Read Docs"
            href="/docs/getting-started"
          />
          <SupportCard 
            icon={<Bug className="text-primary" size={32} />}
            title="Report a Bug"
            description="Found an issue? Let us know so we can fix it."
            action="Report Issue"
            href="https://github.com/verixabimsuite-spec/verixa-docs/issues"
          />
          <SupportCard 
            icon={<MessageSquare className="text-primary" size={32} />}
            title="Request Feature"
            description="Have an idea to improve Verixa Suite?"
            action="Submit Request"
            href="mailto:verixaidn@gmail.com?subject=Feature Request"
          />
        </div>

        <div className="bg-card rounded-2xl border border-gray-800 p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-secondaryText mb-6">Find quick answers to common questions about licensing, installation, and usage.</p>
          <Link href="/docs/faq" className="px-6 py-3 rounded-xl bg-gray-800 hover:bg-gray-700 text-white font-medium inline-block transition-colors">
            View FAQ
          </Link>
        </div>
      </div>
    </main>
  );
}

function SupportCard({ icon, title, description, action, href }: any) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-card p-8 rounded-xl border border-gray-800 flex flex-col items-start"
    >
      <div className="p-3 bg-background rounded-lg mb-6">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-secondaryText text-sm mb-6 flex-1">{description}</p>
      <Link href={href} className="text-primary font-semibold hover:underline flex items-center gap-2">
        {action} &rarr;
      </Link>
    </motion.div>
  );
}
