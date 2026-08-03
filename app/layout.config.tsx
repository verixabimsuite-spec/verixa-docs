import Image from 'next/image';
import verixaLogo from '@/public/verixa-logo.jpg';

export const baseOptions = {
  nav: {
    title: (
      <Image
        src={verixaLogo}
        alt="Verixa Logo"
        className="h-9 w-auto object-contain rounded-md"
      />
    ),
  },
  links: [
    { text: 'Documentation', url: '/docs/getting-started' },
    { text: 'Features', url: '/features/family-manager' },
    { text: 'Downloads', url: '/download' },
    { text: 'Pricing', url: '/pricing' },
    { text: 'FAQ', url: '/faq' },
    { text: 'Support', url: '/support' },
    { text: 'About', url: '/about' },
    { text: 'Contact', url: '/contact' },
  ],
};
