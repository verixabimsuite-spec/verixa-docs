"use client";

import { motion } from 'framer-motion';
import { Check, X, Lock } from 'lucide-react';
import { BackButton } from '@/components/BackButton';
import { useLanguage } from '@/contexts/LanguageContext';

import { PricingMatrix } from '@/components/PricingMatrix';

export default function PricingPage() {
  const { t } = useLanguage();
  return (
    <main className="flex-1 w-full flex flex-col bg-background text-text py-20 px-6 relative">
      <div className="max-w-6xl mx-auto w-full">
        <BackButton label="Back to Home" />
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{t('pricing.title')}</h1>
          <p className="text-xl text-secondaryText">{t('pricing.subtitle')}</p>
        </div>

        {/* Pricing Content Container with Overlay Blur */}
        <div className="relative mb-20">
          {/* Blurred Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8 filter blur-md select-none pointer-events-none opacity-50">
            {/* Free Trial */}
            <PricingCard 
              title={t('pricing.free.title')} 
              price="$0" 
              duration={t('pricing.free.duration')}
              description={t('pricing.free.desc')}
              cta={t('pricing.cta')}
              features={[
                { name: t('pricing.f.1'), included: true },
                { name: t('pricing.f.2'), included: true },
                { name: t('pricing.f.3'), included: true },
                { name: t('pricing.f.4'), included: false },
              ]}
            />

            {/* Perpetual License */}
            <PricingCard 
              title={t('pricing.perpetual.title')} 
              price="$499" 
              duration={t('pricing.perpetual.duration')}
              isPopular={true}
              popularText={t('pricing.mostPopular')}
              description={t('pricing.perpetual.desc')}
              cta={t('pricing.cta')}
              features={[
                { name: t('pricing.p.1'), included: true },
                { name: t('pricing.p.2'), included: true },
                { name: t('pricing.p.3'), included: true },
                { name: t('pricing.p.4'), included: true },
              ]}
            />

          </div>

          {/* Coming Soon Glassmorphism Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/40 backdrop-blur-sm rounded-3xl p-6 text-center z-10 border border-blue-500/20 shadow-2xl">
            <div className="p-4 bg-blue-500/10 rounded-full border border-blue-500/30 mb-4 text-blue-400">
              <Lock size={36} />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">{t('pricing.overlay.title')}</h2>
            <p className="text-gray-300 max-w-md text-base md:text-lg">
              {t('pricing.overlay.desc')}
            </p>
          </div>
        </div>

        {/* Detailed Feature Matrix */}
        <PricingMatrix />
      </div>
    </main>
  );
}

function PricingCard({ title, price, duration, description, features, isPopular = false, cta, popularText }: any) {
  return (
    <div className={`relative p-8 rounded-2xl bg-card border ${isPopular ? 'border-primary' : 'border-gray-800'}`}>
      {isPopular && popularText && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
          {popularText}
        </span>
      )}
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-secondaryText text-sm mb-6 h-10">{description}</p>
      <div className="mb-8">
        <span className="text-5xl font-extrabold">{price}</span>
        <span className="text-secondaryText"> / {duration}</span>
      </div>
      <button className="w-full py-3 rounded-lg font-semibold mb-8 bg-gray-800 text-white hover:bg-gray-700 transition-colors">
        {cta || "Get Started"}
      </button>
      <ul className="space-y-4 text-sm">
        {features.map((f: any, i: number) => (
          <li key={i} className="flex items-center gap-3">
            {f.included ? (
              <Check size={18} className="text-primary" />
            ) : (
              <X size={18} className="text-gray-600" />
            )}
            <span className={f.included ? 'text-gray-300' : 'text-gray-600'}>{f.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
