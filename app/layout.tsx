import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import './globals.css';
import { LanguageProvider } from '@/contexts/LanguageContext';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata = {
  title: 'VERIXA Suite',
  description: 'Next-Generation Revit BIM Ecosystem',
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen" style={{ backgroundColor: '#0B1120', color: '#FFFFFF' }}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
