"use client";

import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

export default function PricingPage() {
  return (
    <main className="flex-1 w-full flex flex-col bg-background text-text py-20 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-secondaryText">Choose the right plan for your BIM workflow.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Free Trial */}
          <PricingCard 
            title="Free Trial" 
            price="$0" 
            duration="14 Days"
            description="Perfect for testing Verixa Suite."
            features={[
              { name: "Full access to Family Manager", included: true },
              { name: "Batch Sheet Maker (Watermarked)", included: true },
              { name: "Auto Annotation", included: true },
              { name: "Email Support", included: false },
            ]}
          />

          {/* Perpetual License */}
          <PricingCard 
            title="Perpetual License" 
            price="$499" 
            duration="One-time"
            isPopular={true}
            description="Lifetime access to the current version."
            features={[
              { name: "Full access to all features", included: true },
              { name: "No watermarks", included: true },
              { name: "1 Year of updates", included: true },
              { name: "Priority Email Support", included: true },
            ]}
          />

          {/* Subscription (Coming Soon) */}
          <PricingCard 
            title="Subscription" 
            price="TBA" 
            duration="Monthly"
            description="Coming Soon. Flexible licensing for teams."
            features={[
              { name: "Everything in Perpetual", included: true },
              { name: "Continuous Updates", included: true },
              { name: "Cloud Asset Library", included: true },
              { name: "Team Management", included: true },
            ]}
          />
        </div>
      </div>
    </main>
  );
}

function PricingCard({ title, price, duration, description, features, isPopular = false }: any) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className={`relative p-8 rounded-2xl bg-card border ${isPopular ? 'border-primary shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]' : 'border-gray-800'}`}
    >
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
      <button className={`w-full py-3 rounded-lg font-semibold mb-8 transition-colors ${isPopular ? 'bg-primary hover:bg-blue-600 text-white' : 'bg-gray-800 hover:bg-gray-700 text-white'}`}>
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
    </motion.div>
  );
}
