"use client";

import { motion } from 'framer-motion';
import { Mail, MessageSquare, Bug, FileQuestion } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SupportPage() {
  const { t } = useLanguage();

  return (
    <main className="flex-1 w-full flex flex-col bg-background text-text py-20 px-6">
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{t('support.title')}</h1>
          <p className="text-xl text-gray-400">{t('support.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <SupportCard icon={<Mail className="text-primary" size={32} />} title={t('support.email.title')} description={t('support.email.desc')} action={t('support.email.cta')} href="mailto:verixaidn@gmail.com" />
          <SupportCard icon={<FileQuestion className="text-primary" size={32} />} title={t('support.docs.title')} description={t('support.docs.desc')} action={t('support.docs.cta')} href="/docs/getting-started" />
          <SupportCard icon={<Bug className="text-primary" size={32} />} title={t('support.bug.title')} description={t('support.bug.desc')} action={t('support.bug.cta')} href="https://github.com/verixabimsuite-spec/verixa-docs/issues" />
          <SupportCard icon={<MessageSquare className="text-primary" size={32} />} title={t('support.feature.title')} description={t('support.feature.desc')} action={t('support.feature.cta')} href="mailto:verixaidn@gmail.com?subject=Feature Request" />
        </div>

        <div className="bg-gray-900 rounded-2xl border border-gray-800 p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">{t('support.faq.title')}</h2>
          <p className="text-gray-400 mb-6">{t('support.faq.desc')}</p>
          <Link href="/docs/faq" className="px-6 py-3 rounded-xl bg-gray-800 hover:bg-gray-700 text-white font-medium inline-block transition-colors">
            {t('support.faq.cta')}
          </Link>
        </div>
      </div>
    </main>
  );
}

function SupportCard({ icon, title, description, action, href }: any) {
  return (
    <motion.div whileHover={{ y: -5 }} className="bg-gray-900 p-8 rounded-xl border border-gray-800 flex flex-col items-start">
      <div className="p-3 bg-background rounded-lg mb-6">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-6 flex-1">{description}</p>
      <Link href={href} className="text-primary font-semibold hover:underline flex items-center gap-2">
        {action} →
      </Link>
    </motion.div>
  );
}
