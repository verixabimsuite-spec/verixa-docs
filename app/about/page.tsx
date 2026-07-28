"use client";

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <main className="flex-1 w-full flex flex-col bg-background text-text py-20 px-6">
      <div className="max-w-4xl mx-auto w-full space-y-20">
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">{t('about.title')}</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">{t('about.subtitle')}</p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-primary">{t('about.mission.title')}</h2>
            <p className="text-gray-400 leading-relaxed">{t('about.mission.desc')}</p>
          </div>
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-primary">{t('about.vision.title')}</h2>
            <p className="text-gray-400 leading-relaxed">{t('about.vision.desc')}</p>
          </div>
        </section>

        <section className="bg-gray-900/50 p-8 md:p-12 rounded-2xl border border-gray-800">
          <h2 className="text-3xl font-bold mb-6">{t('about.story.title')}</h2>
          <div className="space-y-4 text-gray-400 leading-relaxed">
            <p>{t('about.story.p1')}</p>
            <p>{t('about.story.p2')}</p>
            <p>{t('about.story.p3')}</p>
          </div>
        </section>
      </div>
    </main>
  );
}
