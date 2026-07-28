import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://verixabimsuite-spec.github.io',
  base: '/verixa-docs',
  integrations: [
    starlight({
      title: 'Verixa Suite Documentation',
      customCss: [
        './src/styles/custom.css',
      ],
      social: [
        { label: 'GitHub', href: 'https://github.com/verixabimsuite-spec/verixa-docs' }
      ],
      sidebar: [
        {
          label: 'Halaman Umum',
          items: [
            { label: 'Home & Overview', link: '/' },
            { label: 'FAQ', link: '/general/faq/' },
            { label: 'Pricing Paket Perpetual', link: '/general/pricing/' },
            { label: 'Release Notes', link: '/general/release-notes/' },
            { label: 'Privacy Policy', link: '/general/privacy-policy/' },
          ],
        },
        {
          label: 'Verixa Productivity',
          items: [
            { label: 'Overview', link: '/productivity/overview/' },
            { label: 'Family Manager (Helix Toolkit)', link: '/productivity/family-manager/' },
            { label: 'Batch Sheet Maker', link: '/productivity/batch-sheet-maker/' },
            { label: 'Auto Tag', link: '/productivity/auto-tag/' },
          ],
        },
        {
          label: 'Verixa Clash',
          items: [
            { label: 'Overview', link: '/clash/overview/' },
            { label: 'In-App Clash Detection', link: '/clash/in-app-clash-detection/' },
            { label: 'Toleransi mm', link: '/clash/tolerance-mm/' },
            { label: 'Smart Grid Tagging', link: '/clash/smart-grid-tagging/' },
            { label: 'Worksharing Extensible Storage', link: '/clash/worksharing-extensible-storage/' },
          ],
        },
        {
          label: 'Verixa Layout',
          items: [
            { label: 'Overview', link: '/layout/overview/' },
            { label: 'Auto-CTB Simulator', link: '/layout/auto-ctb-simulator/' },
            { label: 'Elevation Depth-Styling', link: '/layout/elevation-depth-styling/' },
          ],
        },
      ],
    }),
  ],
});
