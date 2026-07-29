import type { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import verixaLogo from '@/public/verixa-logo.jpg';

const docsSidebar = [
  {
    section: 'Documentation & Setup',
    items: [
      { label: 'Getting Started', href: '/docs/getting-started' },
      { label: 'Installation Guide', href: '/docs/installation' },
      { label: 'System Requirements', href: '/docs/system-requirements' },
      { label: 'Activation Guide', href: '/docs/activation' },
      { label: 'License Management', href: '/docs/license-management' },
    ],
  },
  {
    section: 'User Manual & Features',
    items: [
      { label: 'Family Manager', href: '/docs/family-manager' },
      { label: 'Auto Annotation / Tag', href: '/docs/auto-annotation' },
      { label: 'Batch Sheet Maker', href: '/docs/batch-sheet-maker' },
    ],
  },
  {
    section: 'Support & Reference',
    items: [
      { label: 'Troubleshooting', href: '/docs/troubleshooting' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Release Notes', href: '/release-notes' },
    ],
  },
];

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-background text-white">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 flex-shrink-0 flex-col border-r border-gray-800 py-10 px-6 sticky top-0 h-screen overflow-y-auto">
        <Link href="/" className="flex items-center gap-2 mb-10">
          <Image
            src={verixaLogo}
            alt="Verixa Logo"
            className="h-10 w-auto object-contain rounded-md"
            priority
          />
        </Link>
        <nav className="flex flex-col gap-6">
          {docsSidebar.map((section) => (
            <div key={section.section}>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">{section.section}</p>
              <ul className="space-y-1">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="block px-3 py-1.5 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 max-w-3xl mx-auto px-6 py-16">
        {children}
      </main>
    </div>
  );
}
