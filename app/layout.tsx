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
  title: 'VERIXA BIM Suite - Productivity Tools for Autodesk Revit 2021-2027',
  description: 'Enterprise Autodesk Revit BIM productivity plugin: Family Manager 3D RFA browser, Smart Auto Tagging, Excel Batch Sheet Maker, and Layout Clash tools.',
  keywords: [
    'Verixa BIM Suite',
    'Autodesk Revit Plugin',
    'Revit Family Manager',
    'Revit Auto Tagging',
    'Revit Batch Sheet Maker',
    'Revit Productivity Tools',
    'Revit 2021 2022 2023 2024 2025 2026 2027',
    'BIM Automation Software',
    'Plugin Revit Indonesia',
  ],
  authors: [{ name: 'Verixa BIM Team' }],
  openGraph: {
    title: 'VERIXA BIM Suite - Productivity Tools for Autodesk Revit',
    description: 'Automate repetitive drafting, organize 3D family libraries, and create sheets from Excel in Autodesk Revit.',
    url: 'https://verixabimsuite-spec.github.io/verixa-docs',
    siteName: 'VERIXA BIM Suite',
    images: [
      {
        url: '/verixa-logo.jpg',
        width: 800,
        height: 600,
        alt: 'VERIXA BIM Suite Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VERIXA BIM Suite - Productivity Tools for Autodesk Revit',
    description: 'Enterprise Revit BIM Productivity Plugin: Family Manager, Smart Tag, Batch Sheet Maker.',
    images: ['/verixa-logo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'google75430e8fabc31da1',
  },
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
