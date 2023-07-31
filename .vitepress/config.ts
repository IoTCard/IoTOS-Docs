import fs from 'fs'
import path from 'path'
import { defineConfigWithTheme } from 'vitepress'
import type { Config as ThemeConfig } from '@vue/theme'
import baseConfig from '@vue/theme/config'
import { headerPlugin } from './headerMdPlugin'
// import { textAdPlugin } from './textAdMdPlugin'

const nav: ThemeConfig['nav'] = [

  {
    text: 'Deployment Guide',
    activeMatch: `^/guide/`,
    link: '/guide/introduction',
    items: [
      {
        text: 'Project Introduction',
        link: '/guide/introduction',
      },
      {
        text: 'project screenshot',
        link: '/guide/introduction',
      },
      {
        text: 'Deployment Service',
        link: '/guide/deploymentService',
      }
    ]
  },
  {
    text: 'source address',
    items: [
      {
        text: 'Source code-domestic address',
        items: [
          { text: 'Gitee IoTOS', link: 'https://gitee.com/chinaiot/iotos' },
          { text: 'Gitee IoTOS-App', link: 'https://gitee.com/chinaiot/iotos-app' },
          { text: 'Gitee IoTOS-IM', link: 'https://gitee.com/chinaiot/iotos-im' },
          { text: 'Gitee IoTOS-Docs', link: 'https://gitee.com/chinaiot/iotos-docs' }
        ]
      },
      {
        text: 'Source Code-International Address',
        items: [
          { text: 'GitHub IoTOS', link: 'https://github.com/IoTCard/IoTOS' },
          { text: 'GitHub IoTOS-App', link: 'https://github.com/IoTCard/iotos-app' },
          { text: 'GitHub IoTOS-IM', link: 'https://github.com/IoTCard/iotos-im' },
          { text: 'GitHub IoTOS-Docs', link: 'https://github.com/IoTCard/IoTOS-Docs' }
        ]
      },

    ]
  },
  {
    text: 'Information',
    activeMatch: `^/ecosystem/`,
    items: [
      {
        text: 'Payment information',
        items: [
          {
            text: 'Knowledge Planet',
            link: 'https://wx.zsxq.com/dweb2/index/group/88885884441552'
          },
          {
            text: 'Mirror Sharing-Alibaba Cloud',
            link: '/ecosystem/mirrorImageAliYun'
          }
        ]
      }
    ]
  },
  {
    text: 'Contact us',
    link: `/about/`
  },
  {
    text: 'Sponsorship',
    link: '/sponsor/'
  },
]

export const sidebar: ThemeConfig['sidebar'] = {
  '/guide/': [
    {
      text: 'Start',
      items: [
        { text: 'Project Introduction', link: '/guide/introduction' },
        { text: 'Project Screenshot', link: '/guide/projectDisplay'},
        { text: 'Deployment Service', link: '/guide/deploymentService'}

      ]
    }
  ],
  '/examples/': [
    {
      text: 'Basic',
      items: [
        {
          text: 'Hello World',
          link: '/examples/#hello-world'
        },
        {
          text: 'Handling User Input',
          link: '/examples/#handling-input'
        },
        {
          text: 'Attribute Bindings',
          link: '/examples/#attribute-bindings'
        },
        {
          text: 'Conditionals and Loops',
          link: '/examples/#conditionals-and-loops'
        },
        {
          text: 'Form Bindings',
          link: '/examples/#form-bindings'
        },
        {
          text: 'Simple Component',
          link: '/examples/#simple-component'
        }
      ]
    },
    {
      text: 'Practical',
      items: [
        {
          text: 'Markdown Editor',
          link: '/examples/#markdown'
        },
        {
          text: 'Fetching Data',
          link: '/examples/#fetching-data'
        },
        {
          text: 'Grid with Sort and Filter',
          link: '/examples/#grid'
        },
        {
          text: 'Tree View',
          link: '/examples/#tree'
        },
        {
          text: 'SVG Graph',
          link: '/examples/#svg'
        },
        {
          text: 'Modal with Transitions',
          link: '/examples/#modal'
        },
        {
          text: 'List with Transitions',
          link: '/examples/#list-transition'
        },
        {
          text: 'TodoMVC',
          link: '/examples/#todomvc'
        }
      ]
    },
    {
      // https://eugenkiss.github.io/7guis/
      text: '7 GUIs',
      items: [
        {
          text: 'Counter',
          link: '/examples/#counter'
        },
        {
          text: 'Temperature Converter',
          link: '/examples/#temperature-converter'
        },
        {
          text: 'Flight Booker',
          link: '/examples/#flight-booker'
        },
        {
          text: 'Timer',
          link: '/examples/#timer'
        },
        {
          text: 'CRUD',
          link: '/examples/#crud'
        },
        {
          text: 'Circle Drawer',
          link: '/examples/#circle-drawer'
        },
        {
          text: 'Cells',
          link: '/examples/#cells'
        }
      ]
    }
  ],
  '/style-guide/': [
    {
      text: 'Style Guide',
      items: [
        {
          text: 'Overview',
          link: '/style-guide/'
        },
        {
          text: 'A - Essential',
          link: '/style-guide/rules-essential'
        },
        {
          text: 'B - Strongly Recommended',
          link: '/style-guide/rules-strongly-recommended'
        },
        {
          text: 'C - Recommended',
          link: '/style-guide/rules-recommended'
        },
        {
          text: 'D - Use with Caution',
          link: '/style-guide/rules-use-with-caution'
        }
      ]
    }
  ]
}

// Placeholder of the i18n config for @vuejs-translations.
// const i18n: ThemeConfig['i18n'] = {
// }

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,

  lang: 'en-US',
  title: 'IoTOS',
  description: 'IoTOS is an efficient and practical IoTCard management & operation system. ',
  srcDir: 'src',
  srcExclude: ['tutorial/**/description.md'],

  head: [
    ['meta', { name: 'theme-color', content: '#3ba4ff' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    [
      'meta',
      {
        name: 'twitter:image',
        content: 'http://www.iotos.top/logo.png'
      }
    ],
    [
      'script',
      {},
      fs.readFileSync(
        path.resolve(__dirname, './inlined-scripts/restorePreference.js'),
        'utf-8'
      )
    ],
    /*[
      'script',
      {
        src: 'https://cdn.usefathom.com/script.js',
        'data-site': 'XNOLWPLB',
        'data-spa': 'auto',
        defer: ''
      }
    ],*/

  ],

  themeConfig: {
    nav,
    sidebar,
    // Placeholder of the i18n config for @vuejs-translations.
    // i18n,

    localeLinks: [
      {
        link: 'http://cndoc.iotos.top',
        text: '简体中文',
        repo: 'https://gitee.com/chinaiot/iotos-docs'
      },
      {
        link: 'http://endoc.iotos.top',
        text: 'English',
        repo: 'https://gitee.com/chinaiot/iotos-docs/en'
      }
   /*   ,
      {
        link: '/translations/',
        text: 'Help Us Translate!',
        isTranslationsDesc: true
      }*/
    ],

    algolia: {
      indexName: 'iotos',
      appId: 'YMA83EJP8U',
      apiKey: 'df3cd029eec544e53f53a0e53ec67ad3'
    },

    carbonAds: {
      code: '123123',
      placement: '123123'
    },

    socialLinks: [
      { icon: 'github', link: 'https://gitee.com/chinaiot/' }
    ],

    /*editLink: {
      repo: 'IoTCard/IoTOS-Docs',
      text: 'Edit this page on GitHub',
    },*/

    footer: {
      license: {
        text: 'Apache-2.0 鲁ICP备2023009550号',
        link: 'https://beian.miit.gov.cn'
      },
      copyright: `Copyright © 2023-${new Date().getFullYear()}  iotos.top`
    }
  },

  markdown: {
    config(md) {
      md.use(headerPlugin)
        // .use(textAdPlugin)
    }
  },

  vite: {
    define: {
      __VUE_OPTIONS_API__: false
    },
    optimizeDeps: {
      include: ['gsap', 'dynamics.js'],
      exclude: ['@vue/repl']
    },
    // @ts-ignore
    ssr: {
      external: ['@vue/repl']
    },
    server: {
      host: true,
      fs: {
        // for when developing with locally linked theme
        allow: ['../..']
      }
    },
    build: {
      minify: 'terser',
      chunkSizeWarningLimit: Infinity
    },
    json: {
      stringify: true
    }
  }
})
