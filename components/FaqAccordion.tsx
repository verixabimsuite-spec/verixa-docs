"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    question: "Versi Autodesk Revit berapa saja yang didukung oleh Verixa Suite?",
    answer: "Verixa Suite mendukung Autodesk Revit versi 2020, 2021, 2022, 2023, 2024, hingga 2025 (64-bit) secara penuh baik di Windows 10 maupun Windows 11.",
    category: "Kompatibilitas"
  },
  {
    question: "Apakah Family Manager bisa membaca RFA dari jaringan server lokal / Cloud?",
    answer: "Ya! Anda dapat menghubungkan folder family RFA di Local Network (NAS/Server kantor), Google Drive, OneDrive, atau Dropbox. Verixa akan secara otomatis memindai dan membuat preview thumbnail dengan sangat cepat.",
    category: "Family Manager"
  },
  {
    question: "Bagaimana cara kerja Smart Tag & Auto Annotation?",
    answer: "Smart Tag menganalisis geometri ruangan, dinding, pintu, dan jendela secara otomatis. Sistem lalu menempatkan Room Tag, Door/Window Tag, Spot Elevation, serta garis Dimensi secara presisi tanpa tumpang-tindih (clashing) dengan garis Crop Region.",
    category: "Smart Tag"
  },
  {
    question: "Apakah saya membutuhkan koneksi internet untuk menggunakan Verixa Suite?",
    answer: "Tidak selalu. Lisensi Verixa didesain untuk bekerja secara offline setelah aktivasi awal berhasil. Anda tetap bisa menggunakan semua fitur pemetaan family, auto tag, dan batch sheet tanpa koneksi internet.",
    category: "Lisensi"
  },
  {
    question: "Apakah tersedia uji coba gratis (Free Trial)?",
    answer: "Ya! Kami menyediakan uji coba gratis penuh selama 14 hari tanpa perlu kartu kredit sehingga Anda dapat menguji semua fitur di proyek nyata Anda.",
    category: "Lisensi"
  },
  {
    question: "Bagaimana jika saya memerlukan bantuan teknis atau menemukan kendala?",
    answer: "Tim dukungan kami siap membantu via Email & WhatsApp. Kami juga menyediakan dokumentasi panduan lengkap beserta video tutorial langkah demi langkah.",
    category: "Dukungan"
  }
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-4">
            <HelpCircle size={16} /> FAQ & Bantuan
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Pertanyaan Yang Sering Diajukan
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Temukan jawaban lengkap seputar kemampuan, kompatibilitas, dan penggunaan Verixa BIM Suite.
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
