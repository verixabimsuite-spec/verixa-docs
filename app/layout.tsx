import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import './globals.css';
import { LanguageProvider } from '@/contexts/LanguageContext';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata = {
  title: 'VERIXA BIM Suite - Productivity Tools for Autodesk Revit',
  description: 'Enterprise Revit BIM Productivity Ecosystem: Family Manager, Smart Tag, Batch Sheet Maker, Clash Assistant, and Layout Tools.',
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen" style={{ backgroundColor: '#0B1120', color: '#FFFFFF' }}>
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
