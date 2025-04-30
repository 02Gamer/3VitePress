import { defineConfig } from 'vitepress';
import nav from './nav.mts'; // 导航栏
import sidebar from './sidebar.mts'; // 侧边栏

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "宝可梦历险记", // 站点名
  description: "Pokémon", // 站点描述
  base: '/VitePress/', // 部署路径
  head: [
    ['link',{ rel: 'icon', href: '/favicon.ico'}], //部署到根目录
    ['link',{ rel: 'icon', href: '/VitePress/favicon.ico' }], //部署到vitepress仓库
  ],
  srcDir: './docs', // 文档
  // outDir: './public', // 图片

  markdown: {
    image: {
      // 开启图片拖拽上传
      lazyLoading: true, // 懒加载
    },
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息', 
    },
    config: (md) => {
      md.renderer.rules.header_close = (tokens, idx, options, env, self) => {
        let htmlRenderer = self.renderToken(tokens, idx, options);
        if (tokens[idx].tag === 'h1') htmlRenderer += '<ArticleMetadata />';
        return htmlRenderer; 
      }
    },
  },
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav, // 导航栏
    sidebar: sidebar, // 侧边栏

    socialLinks: [ // Github
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'twitter', link: 'https://twitter.com/' }, 
      { icon: 'discord', link: 'https://chat.vitejs.dev/' }, 
      // {
      //   icon: {
      //     svg: '<svg t="1703483542872" class="icon" viewBox="0 0 1309 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6274" width="200" height="200"><path d="M1147.26896 912.681417l34.90165 111.318583-127.165111-66.823891a604.787313 604.787313 0 0 1-139.082747 22.263717c-220.607239 0-394.296969-144.615936-394.296969-322.758409s173.526026-322.889372 394.296969-322.889372C1124.219465 333.661082 1309.630388 478.669907 1309.630388 656.550454c0 100.284947-69.344929 189.143369-162.361428 256.130963zM788.070086 511.869037a49.11114 49.11114 0 0 0-46.360916 44.494692 48.783732 48.783732 0 0 0 46.360916 44.494693 52.090549 52.090549 0 0 0 57.983885-44.494693 52.385216 52.385216 0 0 0-57.983885-44.494692z m254.985036 0a48.881954 48.881954 0 0 0-46.09899 44.494692 48.620028 48.620028 0 0 0 46.09899 44.494693 52.385216 52.385216 0 0 0 57.983886-44.494693 52.58166 52.58166 0 0 0-57.951145-44.494692z m-550.568615 150.018161a318.567592 318.567592 0 0 0 14.307712 93.212943c-14.307712 1.080445-28.746387 1.768001-43.283284 1.768001a827.293516 827.293516 0 0 1-162.394168-22.296458l-162.001279 77.955749 46.328175-133.811485C69.410411 600.858422 0 500.507993 0 378.38496 0 166.683208 208.689602 0 463.510935 0c227.908428 0 427.594322 133.18941 467.701752 312.379588a427.463358 427.463358 0 0 0-44.625655-2.619261c-220.24709 0-394.100524 157.74498-394.100525 352.126871zM312.90344 189.143369a64.270111 64.270111 0 0 0-69.803299 55.659291 64.532037 64.532037 0 0 0 69.803299 55.659292 53.694846 53.694846 0 0 0 57.852923-55.659292 53.465661 53.465661 0 0 0-57.852923-55.659291z m324.428188 0a64.040926 64.040926 0 0 0-69.574114 55.659291 64.302852 64.302852 0 0 0 69.574114 55.659292 53.694846 53.694846 0 0 0 57.951145-55.659292 53.465661 53.465661 0 0 0-57.951145-55.659291z" p-id="6275"></path></svg>'
      //   },
      //   link: 'https://weixin.qq.com/',
      //   // You can include a custom label for accessibility too (optional but recommended):
      //   ariaLabel: 'wechat'
      // }
    ],

    // https://vitepress.dev/zh/reference/default-theme-config#outline
    outline: { // 文章目录
      label: '本文目录', // 目录标题 
      level: [2, 6], // 目录级别 // ‘deep’ 显示2-6级标题
      // outlineTitle: '文章目录', // 老方式设置标题
      // outlin:false, // 关闭标题显示
    },

    search: { // 中文版本地搜索
      provider: 'local',
      options: {
        // miniSearch: {
        //   options: {


        //   },
        //   searchOptions: {


        //   },
        // }, 
        translations: {
          button: {
            buttonText: "搜索文档", 
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
            }
          }
        }
      }
    },

    // editLink: { 
    //   pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path', // 改成自己的仓库
    //   text: '在GitHub编辑本页'
    // },

    logo: '/favicon.svg', // 站点左上角logo
    // siteTitle: false, // 标题隐藏

    sidebarMenuLabel: '菜单', // 侧边栏标题
    darkModeSwitchLabel: '深浅模式', // 夜间模式

    returnToTopLabel: '返回顶部', 

    lastUpdated: { // 最后更新时间
      text: '📝最后更新', 
      formatOptions: {
        dateStyle: 'short', // 可选值full、long、medium、short
        // timeStyle: 'medium', //可选值full、long、medium、short
      }
    },

    docFooter: { // 文档页脚
      prev: '上一篇', // 上一篇
      next: '下一篇', // 下一篇
    },

    footer:{ // 页脚 
      message: 'Released under the MIT License.',
      copyright: `Copyright © 2025-${new Date().getFullYear()} Gamers `,
    }
  }
})