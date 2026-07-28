import { type BaseLayoutProps } from 'fumadocs-ui/layout';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <div className="font-bold text-xl tracking-tight text-white flex items-center gap-2">
        <span className="text-primary text-2xl">V</span>
        VERIXA
      </div>
    ),
  },
  links: [
    {
      text: 'Documentation',
      url: '/docs/getting-started',
      active: 'nested-url',
    },
    {
      text: 'Features',
      url: '/features',
    },
    {
      text: 'Pricing',
      url: '/pricing',
    },
    {
      text: 'Download',
      url: '/download',
    },
  ],
};
