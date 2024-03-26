// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Apollo Documentation',
  tagline: 'Official documentation for the Apollo Discord bot',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.apollo.fyi',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  scripts: [
    {
      src: "https://cdn.usefathom.com/script.js",
      "data-site": "MNWOBYCD",
      defer: true
    }
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/apollo-fyi/apollo-docs/tree/master'
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo.png',
      navbar: {
        title: 'Apollo',
        logo: {
          alt: 'Apollo Discord Bot Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docSidebar',
            position: 'left',
            label: 'Guides',
          },
          {
            to: '/commands',
            position: 'left',
            label: 'Commands',
          },
          {
            type: 'docSidebar',
            sidebarId: 'premiumSidebar',
            position: 'left',
            label: 'Premium',
          },
          {
            href: 'https://github.com/apollo-fyi/apollo-docs',
            label: 'GitHub',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Guides',
                to: '/guides/guides',
              },
              {
                label: 'Commands',
                to: '/commands',
              },
              {
                label: 'Premium',
                to: '/premium',
              }
            ],
          },
          {
            title: 'Product',
            items: [
              {
                label: 'Roadmap',
                href: 'https://feedback.apollo.fyi',
              },
              {
                label: 'Support',
                href: 'https://discord.com/invite/dMnZt6P',
              },
              {
                label: 'Premium',
                href: 'https://apollo.fyi/premium',
              }
            ]
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/invite/dMnZt6P'
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/apollo_discord',
              },
              {
                label: 'Mastodon',
                href: 'https://mstdn.social/@apollo_discord',
              },
            ],
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
