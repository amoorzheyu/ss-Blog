import { defineConfig } from 'vitepress'
import { getSiderBarConfig } from './siderbar'

const baseDir = './docs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SS-Blog",
  description: "A Blog Site",
  head: [
    // 添加图标
    ['link', { rel: 'icon', href: '/assets/logo/favicon.ico' }]
  ],
  base: '/',
  srcDir: "docs",   //相对目录，用于存放md文件
  themeConfig: {
    logo: '/assets/logo/logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '🏠主页', link: '/' },
      {
        text: '📖技术笔记',
        items: [
          { text: 'Linux', link: '/Linux/note-1' },
          { text: '嵌入式', link: '/嵌入式/note-1' },
          { text: "C/C++", link: "/" },
        ],
      }
    ],

    sidebar: getSiderBarConfig(),

    // [
    //   {
    //     text: 'Linux',
    //     collapsed:false,
    //     items: [walk(baseDir +'/Linux','')]
    //   }
    // ],

    lastUpdated: {
      text: '🔥上次更新时间',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },


    socialLinks: [
      {
        icon: {
          svg: '<svg t="1734082495843" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2576" width="256" height="256"><path d="M514.56 9.728c-277.504 0-503.808 226.304-503.808 503.808s226.304 502.272 503.808 502.272S1018.88 789.504 1018.88 512 792.064 9.728 514.56 9.728z m0 974.336c-259.072 0-469.504-211.968-469.504-471.04S257.024 40.96 516.096 40.96s469.504 211.968 469.504 471.04-211.456 472.064-471.04 472.064z" fill="#d81e06" p-id="2577"></path><path d="M771.584 812.544l13.824-135.168c-39.936 11.776-125.952 19.968-184.832 19.968-167.936 0-257.024-58.88-244.224-182.784 14.336-138.24 141.312-182.272 290.816-182.272 68.608 0 153.088 11.264 188.928 23.04l17.408-141.824c-54.272-13.312-112.128-20.992-210.432-20.992-253.952 0-485.888 118.784-507.904 329.216-18.432 176.64 138.24 310.784 428.032 310.784 101.376 0 173.568-8.192 208.384-19.968z m0 0" fill="#d81e06" p-id="2578"></path></svg>'
        },
        link: 'https://szcyyds.blog.csdn.net/'
      },
      {
        icon: {
          svg: '<svg t="1734082559760" class="icon" viewBox="0 0 1242 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5537" width="256" height="256"><path d="M531.252288 0C248.42147 0 19.252288 229.169181 19.252288 512S248.42147 1024 531.252288 1024s512-229.169181 512-512S814.083107 0 531.252288 0zM389.527887 678.340777h234.31905c40.786964 0 73.952122-33.062161 73.952123-73.952123v-12.256689c0-13.595655-11.02072-24.719372-24.719373-24.719372H500.45607c-13.698652 0-24.719372-11.02072-24.719372-24.719372v-61.592436c0-13.698652 11.02072-24.719372 24.719372-24.719373H784.007871c13.595655 0 24.719372 11.02072 24.719372 24.719373v141.724401c0 91.976665-74.570107 166.443774-166.443774 166.443774H278.496706c-13.595655 0-24.719372-11.02072-24.719372-24.719372v-345.04124c0-102.070408 82.809897-184.880306 184.880305-184.880305H784.007871c13.698652 0 24.719372 11.02072 24.719372 24.719372l-0.102997 61.592436c0 13.698652-11.02072 24.719372-24.719373 24.719372H438.760637c-40.786964 0-73.952122 33.062161-73.952123 73.952123v234.216053c0 13.492657 11.02072 24.513378 24.719373 24.513378z" fill="#C2191F" p-id="5538"></path></svg>'
        },
        link: 'https://gitee.com/fs13243'
      }
    ],
    //开启本地搜索
    search: {
      provider: "local"
    },
    //右侧内容导航栏
    outline: {
      level: [2, 6],
      label: "页面导航"
    },
    //翻页
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present amoorzheyu'
    },
    returnToTop: true,
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式"
  },
  locales: {
    root: {
      label: '国语',
      lang: 'zh'
    },
    en: {
      label: '洋文',
      lang: 'en'
    }
  }
})