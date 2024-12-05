import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  markdown: {
    mermaid: true
  },
  title: 'GMS 경기운영관리 시스템',
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
    localeConfigs: {
      en: { label: 'English'},
      ko: { label: '한국어'},
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // editUrl:
          //   'https://github.com/axisj/axboot.dev/tree/main',
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
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
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
        { to: '/', label: 'GMS소개', position: 'left', exact: true },
        { to: '/standard', label: '제품규격', position: 'left' },
        { to: '/spec', label: '제품사양', position: 'left' },
        // { to: '/#features', label: '특징', position: 'left', activeBaseRegex: '^/\\#features$'},
        // { to: '/#casestudy', label: '도입사례', position: 'left', activeBaseRegex: '^/\\#casestudy$'},
        { to: '/docs', label: '도움말', position: 'left', exact: false },
        { to: 'https://axisj.com', label: '액시스제이', position: 'left' },
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
