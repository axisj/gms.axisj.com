import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  markdown: {
    mermaid: true
  },
  title: 'gms.axisj.com',
  tagline: 'GMS',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://gms.axisj.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'axisj', // Usually your GitHub org/user name.
  projectName: 'gms.axisj.com', // Usually your repo name.

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
            './src/css/custom.css', "./src/css/gms.css", "./src/css/swiper.css"],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/axboot-sns.jpg',
    navbar: {
      title: 'GMS',
      logo: {
        alt: 'GMS Logo',
        src: 'img/gms_logo.svg',
        srcDark: 'img/gms_logo_dark.svg',
        width: 90,
        height: 32,
      },
      items: [
        {to: '/introduction', label: 'GMS소개', position: 'left'},
        {to: '/solution', label: '솔루션', position: 'left'},
        {to: '/sports', label: '종목별 관리 시스템', position: 'left'},
        {to: '/casestudy', label: '고객후기', position: 'left'},
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
      ],
    },
    footer: {
      style: 'light',
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
      copyright: `Copyright © ${new Date().getFullYear()} AXISJ, Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
