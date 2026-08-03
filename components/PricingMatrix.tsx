"use client";

import { useLanguage } from '@/contexts/LanguageContext';

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
