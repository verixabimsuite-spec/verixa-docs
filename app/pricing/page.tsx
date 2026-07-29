"use client";

import { motion } from 'framer-motion';
import { Check, X, Lock } from 'lucide-react';
import { BackButton } from '@/components/BackButton';

export default function PricingPage() {
  return (
    <main className="flex-1 w-full flex flex-col bg-background text-text py-20 px-6 relative">
      <div className="max-w-6xl mx-auto w-full">
        <BackButton label="Back to Home" />
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-secondaryText">Choose the right plan for your BIM workflow.</p>
        </div>

        {/* Pricing Content Container with Overlay Blur */}
        <div className="relative">
          {/* Blurred Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 filter blur-md select-none pointer-events-none opacity-50">
            {/* Free Trial */}
            <PricingCard 
              title="Free Trial" 
              price="$0" 
              duration="14 Days"
              description="Perfect for testing Verixa Suite."
              features={[
                { name: "Full access to Family Manager", included: true },
                { name: "Batch Sheet Maker", included: true },
                { name: "Auto Annotation & Smart Tag", included: true },
                { name: "Email Support", included: false },
              ]}
            />

            {/* Perpetual License */}
            <PricingCard 
              title="Perpetual License" 
              price="$499" 
              duration="One-time"
              isPopular={true}
              description="Lifetime access to current version."
              features={[
                { name: "Full access to all features", included: true },
                { name: "No watermarks", included: true },
                { name: "1 Year of updates", included: true },
                { name: "Priority Email Support", included: true },
              ]}
            />

            {/* Subscription */}
            <PricingCard 
              title="Subscription" 
              price="TBA" 
              duration="Monthly"
              description="Flexible licensing for teams."
              features={[
                { name: "Everything in Perpetual", included: true },
                { name: "Continuous Updates", included: true },
                { name: "Cloud Asset Library", included: true },
                { name: "Team Management", included: true },
              ]}
            />
          </div>

          {/* Coming Soon Glassmorphism Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/40 backdrop-blur-sm rounded-3xl p-6 text-center z-10 border border-blue-500/20 shadow-2xl">
            <div className="p-4 bg-blue-500/10 rounded-full border border-blue-500/30 mb-4 text-blue-400">
              <Lock size={36} />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">Pricing Coming Soon</h2>
            <p className="text-gray-300 max-w-md text-base md:text-lg">
              Official commercial pricing & licensing plans have not been released yet. Stay tuned for updates!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

function PricingCard({ title, price, duration, description, features, isPopular = false }: any) {
  return (
    <div className={`relative p-8 rounded-2xl bg-card border ${isPopular ? 'border-primary' : 'border-gray-800'}`}>
      {isPopular && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
          Most Popular
        </span>
      )}
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-secondaryText text-sm mb-6 h-10">{description}</p>
      <div className="mb-8">
        <span className="text-5xl font-extrabold">{price}</span>
        <span className="text-secondaryText"> / {duration}</span>
      </div>
      <button className="w-full py-3 rounded-lg font-semibold mb-8 bg-gray-800 text-white">
        Get Started
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
