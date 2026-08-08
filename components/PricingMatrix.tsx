"use client";

import { Check, X, Sparkles, ShoppingCart, Download, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

import { LEMON_SQUEEZY_CHECKOUT_URL, INSTALLER_DOWNLOAD_URL } from '@/lib/constants';

interface FeatureRow {
  name: string;
  category: string;
  freeTrial: boolean | string;
  perpetual: boolean | string;
}

export function PricingMatrix() {
  const { t } = useLanguage();

  const MATRIX_FEATURES: FeatureRow[] = [
    // Family Manager
    { name: t('matrix.f1'), category: t('matrix.cat.family'), freeTrial: true, perpetual: true },
    { name: t('matrix.f2'), category: t('matrix.cat.family'), freeTrial: true, perpetual: true },
    { name: t('matrix.f3'), category: t('matrix.cat.family'), freeTrial: true, perpetual: true },
    { name: t('matrix.f4'), category: t('matrix.cat.family'), freeTrial: t('matrix.f4.val1'), perpetual: t('matrix.f4.val2') },

    // Smart Tag & Annotation
    { name: t('matrix.s1'), category: t('matrix.cat.smart'), freeTrial: true, perpetual: true },
    { name: t('matrix.s2'), category: t('matrix.cat.smart'), freeTrial: true, perpetual: true },
    { name: t('matrix.s3'), category: t('matrix.cat.smart'), freeTrial: true, perpetual: true },

    // Batch Sheet Maker
    { name: t('matrix.b1'), category: t('matrix.cat.batch'), freeTrial: true, perpetual: true },
    { name: t('matrix.b2'), category: t('matrix.cat.batch'), freeTrial: false, perpetual: true },

    // License & Support
    { name: t('matrix.l1'), category: t('matrix.cat.license'), freeTrial: t('matrix.l1.val1'), perpetual: t('matrix.l1.val2') },
    { name: t('matrix.l2'), category: t('matrix.cat.license'), freeTrial: false, perpetual: t('matrix.l2.val2') },
    { name: t('matrix.l3'), category: t('matrix.cat.license'), freeTrial: false, perpetual: t('matrix.l3.val2') },
  ];

  return (
    <section className="w-full py-16 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-4">
            <Sparkles size={16} /> {t('matrix.badge')}
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            {t('matrix.title')}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t('matrix.subtitle')}
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-gray-800 bg-gray-900/40 shadow-2xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-800 bg-gray-900/80">
                <th className="p-5 text-gray-400 font-semibold text-sm">{t('matrix.col.feature')}</th>
                <th className="p-5 text-center text-white font-bold text-base w-1/3">{t('matrix.col.free')}</th>
                <th className="p-5 text-center text-primary font-extrabold text-base w-1/3 bg-primary/10 border-x border-primary/20">
                  {t('matrix.col.perpetual')}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/60 text-sm">
              {MATRIX_FEATURES.map((item, index) => (
                <tr key={index} className="hover:bg-gray-800/30 transition-colors">
                  <td className="p-5 text-gray-200 font-medium flex flex-col">
                    <span>{item.name}</span>
                    <span className="text-xs text-gray-500">{item.category}</span>
                  </td>
                  <td className="p-5 text-center">
                    {renderCell(item.freeTrial)}
                  </td>
                  <td className="p-5 text-center bg-primary/5 border-x border-primary/10">
                    {renderCell(item.perpetual)}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-gray-900/90 border-t border-gray-800">
                <td className="p-5 text-sm font-semibold text-gray-300">
                  Select Package
                </td>
                <td className="p-5 text-center">
                  <a
                    href={INSTALLER_DOWNLOAD_URL}
                    download="VerixaBimSuite_Setup_v1.0.0.exe"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-white font-medium text-xs md:text-sm transition-colors"
                  >
                    <Download size={15} />
                    <span>Free Trial</span>
                  </a>
                </td>
                <td className="p-5 text-center bg-primary/10 border-x border-primary/20">
                  <a
                    href={LEMON_SQUEEZY_CHECKOUT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary hover:bg-blue-600 text-white font-bold text-xs md:text-sm shadow-md shadow-blue-500/20 transition-all hover:scale-105"
                  >
                    <ShoppingCart size={15} />
                    <span>Buy License ($79)</span>
                    <ExternalLink size={12} className="opacity-70" />
                  </a>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  );
}

function renderCell(value: boolean | string) {
  if (typeof value === 'boolean') {
    return value ? (
      <Check size={20} className="text-emerald-400 mx-auto" />
    ) : (
      <X size={20} className="text-gray-600 mx-auto" />
    );
  }
  return <span className="font-semibold text-gray-300">{value}</span>;
}

