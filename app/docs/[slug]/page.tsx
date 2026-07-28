import GettingStartedPage from '../getting-started/page';

export function generateStaticParams() {
  return [
    { slug: 'installation' },
    { slug: 'system-requirements' },
    { slug: 'activation' },
    { slug: 'quick-start' },
    { slug: 'family-manager' },
    { slug: 'auto-annotation' },
    { slug: 'batch-sheet-maker' },
    { slug: 'keyboard-shortcuts' },
    { slug: 'settings' },
    { slug: 'troubleshooting' },
    { slug: 'faq' },
    { slug: 'release-notes' },
  ];
}

export default function DocsSlugPage() {
  return <GettingStartedPage />;
}
