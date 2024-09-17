import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  markdown: {
    mermaid: true
  },
  title: 'AXBoot.dev',
  tagline: 'APISync',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://apisync.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'axisj', // Usually your GitHub org/user name.
  projectName: 'apisync.dev', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ko',
    locales: ["ko", "en"],

  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/axisj/axboot.dev/tree/main',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: [
            "./src/css/fonts.css",
            './src/css/custom.css', "./src/css/axboot.css"],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/axboot-sns.jpg',
    navbar: {
      title: 'axboot.dev',
      logo: {
        alt: 'AXBoot.dev Logo',
        src: 'img/apisync_logo.svg',
        srcDark: 'img/apisync_logo_dark.svg',
        width: 164,
        height: 32,
      },
      items: [
        {to: '/product', label: 'Product', position: 'left'},
        {to: '/pricing', label: 'Pricing', position: 'left'},
        {to: '/enterprise', label: 'Enterprise', position: 'left'},
        {to: '/advanced', label: 'Advanced', position: 'left'},
        {to: '/get-in-touch', label: 'AXISJ', position: 'left'},
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'tutorialSidebar',
        //   position: 'left',
        //   label: 'Tutorial',
        // },
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'apiSidebar',
        //   position: 'left',
        //   label: 'API',
        // },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/axisj/axboot.dev',
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
            {
              label: 'API',
              to: '/docs/api/back-end/system-api',
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
              label: 'AXISJ',
              to: 'http://axisj.com',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/axisj/axboot.dev',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AXISJ, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
