export default [
    { text: '首页', link: '/' },
    { text: 'Pokemon', link: '/Pokemon/RNG/' },
    // { text: '宝可梦', 
    //   items: [ // 下拉式菜单导航
    //     { text: '朱紫', link: '/' },
    //     { text: '剑盾', link: '/' },
    //   ]
    // }, 
    { text: '关于', // 下拉式菜单导航
      items: [
        // { text: '王', link: 'www.baidu.com' },
        // { text: '八', link: 'www.baidu.com' },
        // { text: '蛋', link: 'www.baidu.com' }, 
        { text: 'VitePress', link: 'https://vitepress.dev/zh/' , noIcon: false}, // noIcon: true, // 是否显示图标}, 
      ]
    }, //
]