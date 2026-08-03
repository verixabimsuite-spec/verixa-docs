"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export function FaqAccordion() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const FAQ_DATA: FaqItem[] = [
    {
      question: t('faq.q1.q'),
      answer: t('faq.q1.a'),
      category: t('faq.q1.c')
    },
    {
      question: t('faq.q2.q'),
      answer: t('faq.q2.a'),
      category: t('faq.q2.c')
    },
    {
      question: t('faq.q3.q'),
      answer: t('faq.q3.a'),
      category: t('faq.q3.c')
    },
    {
      question: t('faq.q4.q'),
      answer: t('faq.q4.a'),
      category: t('faq.q4.c')
    },
    {
      question: t('faq.q5.q'),
      answer: t('faq.q5.a'),
      category: t('faq.q5.c')
    },
    {
      question: t('faq.q6.q'),
      answer: t('faq.q6.a'),
      category: t('faq.q6.c')
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-4">
            <HelpCircle size={16} /> {t('support.faq.badge')}
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            {t('support.faq.title')}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t('support.faq.subtitle')}
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-gray-900/60 border border-gray-800 overflow-hidden transition-colors hover:border-gray-700"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full py-5 px-6 flex justify-between items-center text-left text-white font-bold text-lg md:text-xl gap-4 focus:outline-none"
                >
                  <span className="flex-1">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="p-2 rounded-lg bg-gray-800 text-primary shrink-0"
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 text-gray-300 leading-relaxed text-base border-t border-gray-800/40">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
