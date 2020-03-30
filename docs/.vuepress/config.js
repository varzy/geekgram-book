const path = require('path');

module.exports = {
  base: '/geekgram-book/',
  title: 'Geekgram Book',
  description: 'Everything about Geekgram.',
  port: 3020,
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, '../assets')
      }
    }
  },
  themeConfig: {
    nav: [
      { text: '基础', link: '/basis/' },
      { text: '进阶', link: '/advanced/' },
      {
        text: 'Github',
        items: [
          { text: 'geekgram', link: 'https://github.com/varzy/geekgram', target: '_blank' },
          { text: 'geekgram-admin', link: 'https://github.com/varzy/geekgram-admin', target: '_blank' },
        ]
      },
      { text: '我', link: 'https://varzy.me', target: '_blank' },
    ],
    sidebar: {
      '/basis/': [
        {
          title: '序曲',
          collapsable: false,
          children: [
            '',
          ]
        },
        {
          title: '起步',
          collapsable: false,
          children: [
            'started/env',
            'started/init',
          ]
        },
        {
          title: '从数据表到首页',
          collapsable: false,
          children: [
            'tables-and-index/tables',
            'tables-and-index/seeders',
            'tables-and-index/page-index',
          ]
        },
        {
          title: '前端工作流',
          collapsable: false,
          children: [
            'laravel-fe/views-and-styles',
            'laravel-fe/logic',
            'laravel-fe/reforge'
          ]
        },
        {
          title: 'Web 端开发',
          collapsable: false,
          children: [
            'web/debugbar',
            'web/locale',
            'web/turning-index',
            'web/posts'
          ]
        },
        {
          title: 'Api 开发',
          collapsable: false,
          children: [
            'api/posts'
          ]
        },
        {
          title: '管理后台',
          collapsable: false,
          children: [
            'admin/init',
            'admin/standard',
            'admin/before-develop',
            'admin/install-element-ui'
          ]
        }
      ],
      '/advanced/': [
        {
          title: '关于',
          collapsable: false,
          children: ['']
        }
      ],
    }
  }
}
