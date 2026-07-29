import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import './globals.css';
import { LanguageProvider } from '@/contexts/LanguageContext';

import { Footer } from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata = {
  title: 'VERIXA Suite - Revit BIM Ecosystem',
  description: 'Professional Revit BIM Productivity Suite: Family Manager, Smart Tag, Batch Sheet Maker, Clash Assistant, and Layout Tools.',
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen" style={{ backgroundColor: '#0B1120', color: '#FFFFFF' }}>
        <LanguageProvider>
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
