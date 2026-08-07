"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Box, Zap, Settings } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageToggle } from '@/components/LanguageToggle';

import Image from 'next/image';
import verixaLogo from '@/public/verixa-logo.jpg';

import { FaqAccordion } from '@/components/FaqAccordion';
import { PricingMatrix } from '@/components/PricingMatrix';
import { HeroFloatingBadges } from '@/components/HeroFloatingBadges';
import { HeroProductTeaser } from '@/components/HeroProductTeaser';
import { HeroStatsBar } from '@/components/HeroStatsBar';

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <main className="flex-1 w-full flex flex-col bg-background text-text">
      {/* Navbar */}
      <header className="w-full py-4 px-8 flex justify-between items-center border-b border-gray-800 z-50 sticky top-0 bg-background/80 backdrop-blur-md">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={verixaLogo}
            alt="Verixa Logo"
            className="h-10 w-auto object-contain rounded-md"
            priority
          />
        </Link>
        <nav className="hidden md:flex gap-6 font-medium text-gray-400 text-sm">
          <Link href="/docs/getting-started" className="hover:text-white transition-colors">{t('nav.docs')}</Link>
          <Link href="/features/family-manager" className="hover:text-white transition-colors">{t('nav.features')}</Link>
          <Link href="/pricing" className="hover:text-white transition-colors">{t('nav.pricing')}</Link>
          <Link href="/download" className="hover:text-white transition-colors">{t('nav.download')}</Link>
          <Link href="/support" className="hover:text-white transition-colors">{t('nav.support')}</Link>
        </nav>
        <div className="flex items-center gap-3">
          <LanguageToggle />
          <Link href="/pricing" className="px-5 py-2 rounded-full bg-primary hover:bg-blue-600 transition-colors font-medium text-sm text-white">
            {t('nav.getStarted')}
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-12 pb-16 overflow-hidden">
        {/* Glowing Neon Halos */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-500/20 rounded-full blur-[140px] pointer-events-none" />

        {/* Animated Floating Badges */}
        <HeroFloatingBadges />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10 max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-200 to-gray-400 whitespace-pre-line">
            {t('home.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto">
            {t('home.hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing" className="px-8 py-4 rounded-full bg-primary hover:bg-blue-600 text-white font-semibold text-lg flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)]">
              {t('home.hero.cta.download')} <ArrowRight size={20} />
            </Link>
            <Link href="/docs/getting-started" className="px-8 py-4 rounded-full bg-gray-800/80 hover:bg-gray-700/80 text-white font-semibold text-lg flex items-center justify-center transition-all backdrop-blur-md border border-gray-700/50">
              {t('home.hero.cta.docs')}
            </Link>
          </div>
        </motion.div>

        {/* Hero Glassmorphic Product Preview Teaser Window */}
        <HeroProductTeaser />
      </section>

      {/* Hero Performance Stats Bar */}
      <HeroStatsBar />

      {/* Features */}
      <section className="w-full py-24 px-6 border-t border-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('home.features.title')}</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t('home.features.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard href="/features/family-manager" icon={<Box size={32} className="text-primary" />} title={t('home.features.familyManager.title')} description={t('home.features.familyManager.desc')} />
            <FeatureCard href="/features/smart-tag" icon={<Zap size={32} className="text-primary" />} title={t('home.features.autoAnnotation.title')} description={t('home.features.autoAnnotation.desc')} />
            <FeatureCard href="/features/batch-sheet-maker" icon={<Settings size={32} className="text-primary" />} title={t('home.features.batchSheet.title')} description={t('home.features.batchSheet.desc')} />
          </div>
        </div>
      </section>

      {/* Pricing Feature Comparison Matrix */}
      <PricingMatrix />

      {/* Interactive FAQ Accordion */}
      <FaqAccordion />

    </main>
  );
}

function FeatureCard({ icon, title, description, href }: { icon: React.ReactNode; title: string; description: string; href?: string }) {
  const content = (
    <motion.div
      whileHover={{ y: -6 }}
      className="p-8 rounded-2xl bg-gray-900 border border-gray-800 shadow-xl hover:border-primary/50 transition-colors h-full"
    >
      <div className="w-14 h-14 rounded-xl bg-background flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </motion.div>
  );

  if (href) {
    return <Link href={href} className="block h-full">{content}</Link>;
  }
  return content;
}
