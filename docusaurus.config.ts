import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Web3Book',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',


  // Set the production url of your site here
  url: 'https://web3book.jacklee.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'web3book', // Usually your GitHub org/user name.
  projectName: 'web3book', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Web3Book',
      // logo: {
      //   alt: 'My Site Logo',
      //   src: 'img/logo.svg',
      // },
      items: [
        { to: '/docs/layer1', label: 'Layer 1', position: 'left', sidebarId: 'layer1Sidebar' },
        { to: '/docs/layer2', label: 'Layer 2', position: 'left', sidebarId: 'layer2Sidebar' },
        { to: '/docs/defi', label: 'DeFi', position: 'left', sidebarId: ''},
        { to: '/docs/nft', label: 'NFT', position: 'left', },
        { to: '/docs/gamefi', label: 'GameFi', position: 'left', },
        { to: '/docs/dao', label: 'DAO', position: 'left', },
        { to: '/docs/creator-economy', label: 'Creator Economy', position: 'left', },
        // { to: '/blog', label: 'Creator Economy', position: 'left', },
        // { to: '/chains', label: 'Chains', position: 'left' },
        { to: '/docs/investment', label: 'Investment', position: 'left', sidebarId: 'securitySidebar' },
        { to: '/docs/development', label: 'Development', position: 'left', sidebarId: 'securitySidebar' },
        // {
        //   to: '/chains', label: 'Security', type: 'dropdown', items: [
        //     { to: '/chains', label: 'Chains', },
        //     { to: '/chains', label: 'Security', },
        //   ]
        // },
        {
          href: 'https://github.com/jackleeio/web3book',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Web3Book . Built by Jack Lee`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
