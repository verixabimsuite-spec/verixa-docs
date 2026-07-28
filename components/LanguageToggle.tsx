"use client";

import { useLanguage } from '@/contexts/LanguageContext';

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center bg-gray-800 rounded-full p-1 text-sm font-semibold">
      <button
        onClick={() => setLocale('en')}
        className={`px-3 py-1 rounded-full transition-all ${
          locale === 'en'
            ? 'bg-primary text-white shadow'
            : 'text-gray-400 hover:text-white'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLocale('id')}
        className={`px-3 py-1 rounded-full transition-all ${
          locale === 'id'
            ? 'bg-primary text-white shadow'
            : 'text-gray-400 hover:text-white'
        }`}
      >
        ID
      </button>
    </div>
  );
}
