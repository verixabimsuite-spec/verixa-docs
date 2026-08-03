"use client";

import { Building2, Target, ShieldCheck, Cpu, Compass, Eye } from 'lucide-react';
import Link from 'next/link';
import { BackButton } from '@/components/BackButton';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();
  return (
    <main className="flex-1 w-full flex flex-col bg-[#0B1120] text-white py-12 px-6">
      <div className="max-w-5xl mx-auto w-full space-y-12">
        <BackButton label="Back to Home" />

        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">{t('about.title')}</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {t('about.subtitle')}
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 space-y-4">
            <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 w-fit">
              <Target size={28} />
            </div>
            <h2 className="text-2xl font-bold text-white">{t('about.mission.title')}</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('about.mission.desc')}
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 space-y-4">
            <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 w-fit">
              <Eye size={28} />
            </div>
            <h2 className="text-2xl font-bold text-white">{t('about.vision.title')}</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('about.vision.desc')}
            </p>
          </div>
        </section>

        {/* Product Overview */}
        <section className="bg-gray-900/60 p-8 md:p-12 rounded-2xl border border-gray-800 space-y-6">
          <div className="flex items-center gap-3">
            <Cpu className="text-blue-400" size={32} />
            <h2 className="text-3xl font-bold">Product Overview</h2>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            Verixa BIM Suite integrates multi-threaded high-speed 3D graphics (powered by Helix Toolkit Direct3D 11), spatial collision avoidance algorithms for tagging, automated Excel-driven sheet generation, and extensible storage clash tracking into a single unified Revit ribbon.
          </p>
        </section>

      </div>
    </main>
  );
}
