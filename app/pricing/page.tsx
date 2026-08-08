"use client";

import { motion } from 'framer-motion';
import { Check, X, ShoppingCart, ShieldCheck, Download, ExternalLink } from 'lucide-react';
import { BackButton } from '@/components/BackButton';
import { useLanguage } from '@/contexts/LanguageContext';
import { PricingMatrix } from '@/components/PricingMatrix';

import { LEMON_SQUEEZY_CHECKOUT_URL, GUMROAD_CHECKOUT_URL, INSTALLER_DOWNLOAD_URL } from '@/lib/constants';

export default function PricingPage() {
  const { t } = useLanguage();
  return (
    <main className="flex-1 w-full flex flex-col bg-background text-text py-20 px-6 relative">
      <div className="max-w-6xl mx-auto w-full">
        <BackButton label="Back to Home" />
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{t('pricing.title')}</h1>
          <p className="text-xl text-secondaryText mb-4">{t('pricing.subtitle')}</p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
            <ShieldCheck size={18} />
            <span>{t('pricing.guarantee')}</span>
          </div>
        </div>

        {/* Active Pricing Cards Container */}
        <div className="relative mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8">
            {/* Free Trial Card */}
            <PricingCard 
              title={t('pricing.free.title')} 
              price="$0" 
              duration={t('pricing.free.duration')}
              description={t('pricing.free.desc')}
              cta={t('pricing.cta.trial')}
              checkoutUrl={INSTALLER_DOWNLOAD_URL}
              isDownload={true}
              isExternal={false}
              icon={<Download size={18} />}
              features={[
                { name: t('pricing.f.1'), included: true },
                { name: t('pricing.f.2'), included: true },
                { name: t('pricing.f.3'), included: true },
                { name: t('pricing.f.4'), included: false },
              ]}
            />

            {/* Perpetual License Card (Lemon Squeezy Direct Checkout) */}
            <PricingCard 
              title={t('pricing.perpetual.title')} 
              price="$79" 
              duration={t('pricing.perpetual.duration')}
              isPopular={true}
              popularText={t('pricing.mostPopular')}
              description={t('pricing.perpetual.desc')}
              cta={t('pricing.cta.buy') + ' (Lemon Squeezy)'}
              checkoutUrl={LEMON_SQUEEZY_CHECKOUT_URL}
              secondaryCta={t('pricing.cta.buy') + ' (Gumroad)'}
              secondaryCheckoutUrl={GUMROAD_CHECKOUT_URL}
              secondaryIcon={<ShoppingCart size={18} />}
              isExternal={true}
              icon={<ShoppingCart size={18} />}
              features={[
                { name: t('pricing.p.1'), included: true },
                { name: t('pricing.p.2'), included: true },
                { name: t('pricing.p.3'), included: true },
                { name: t('pricing.p.4'), included: true },
              ]}
            />
          </div>
        </div>

        {/* Detailed Feature Matrix */}
        <PricingMatrix />
      </div>
    </main>
  );
}

function PricingCard({ 
  title, 
  price, 
  duration, 
  description, 
  features, 
  isPopular = false, 
  cta, 
  popularText, 
  checkoutUrl,
  secondaryCheckoutUrl,
  secondaryCta,
  secondaryIcon,
  isExternal = false,
  isDownload = false,
  icon
}: any) {
  return (
    <div className={`relative p-8 rounded-2xl bg-gray-900/90 border flex flex-col justify-between transition-all hover:border-primary/60 ${
      isPopular 
        ? 'border-primary shadow-[0_0_35px_-5px_rgba(59,130,246,0.3)] ring-1 ring-primary/40' 
        : 'border-gray-800'
    }`}>
      {isPopular && popularText && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-lg">
          {popularText}
        </span>
      )}
      <div>
        <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-400 text-sm mb-6 h-12">{description}</p>
        <div className="mb-8">
          <span className="text-5xl font-extrabold text-white">{price}</span>
          <span className="text-gray-400 font-medium"> / {duration}</span>
        </div>

        {checkoutUrl ? (
          <div className="flex flex-col gap-3 mb-8">
            <a
              href={checkoutUrl}
              download={isDownload ? "VerixaBimSuite_Setup_v1.0.0.exe" : undefined}
              target={isExternal ? "_blank" : "_self"}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className={`w-full py-4 px-6 rounded-xl font-bold text-center flex items-center justify-center gap-2 transition-all ${
                isPopular
                  ? 'bg-primary hover:bg-blue-600 text-white shadow-lg shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98]'
                  : 'bg-gray-800 hover:bg-gray-700 text-white hover:scale-[1.02] active:scale-[0.98]'
              }`}
            >
              {icon}
              <span>{cta || "Get Started"}</span>
              {isExternal && <ExternalLink size={14} className="opacity-70 ml-0.5" />}
            </a>
            {secondaryCheckoutUrl && (
              <a
                href={secondaryCheckoutUrl}
                target={isExternal ? "_blank" : "_self"}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className={`w-full py-4 px-6 rounded-xl font-bold text-center flex items-center justify-center gap-2 transition-all bg-pink-600 hover:bg-pink-500 text-white shadow-lg shadow-pink-500/30 hover:scale-[1.02] active:scale-[0.98]`}
              >
                {secondaryIcon}
                <span>{secondaryCta || "Get Started"}</span>
                {isExternal && <ExternalLink size={14} className="opacity-70 ml-0.5" />}
              </a>
            )}
          </div>
        ) : (
          <button className="w-full py-4 px-6 rounded-xl font-bold mb-8 bg-gray-800 text-white hover:bg-gray-700 transition-colors">
            {cta || "Get Started"}
          </button>
        )}

        <ul className="space-y-4 text-sm">
          {features.map((f: any, i: number) => (
            <li key={i} className="flex items-center gap-3">
              {f.included ? (
                <Check size={18} className="text-blue-400 flex-shrink-0" />
              ) : (
                <X size={18} className="text-gray-600 flex-shrink-0" />
              )}
              <span className={f.included ? 'text-gray-200' : 'text-gray-500'}>{f.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


