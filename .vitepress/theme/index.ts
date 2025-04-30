// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import './style/index.css'
import MyLayout from './components/MyLayout.vue' // 视图动画

// 注册全局组件
/* .vitepress/theme/index.ts */
import Mycomponent from "./components/Mycomponent.vue"
import Linkcard from "./components/Linkcard.vue"
import HomeUnderline from "./components/HomeUnderline.vue"
import ArticleMetadata from "./components/ArticleMetadata.vue"

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(MyLayout) // 视图动画
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  
  enhanceApp({ app, router, siteData }) {
    // 注册全局组件
    app.component('Mycomponent', Mycomponent)
    app.component('Linkcard', Linkcard)
    app.component('HomeUnderline', HomeUnderline)
    app.component('ArticleMetadata', ArticleMetadata)
  },

} satisfies Theme
