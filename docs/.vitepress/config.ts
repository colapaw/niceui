import { DefaultTheme, defineConfig } from 'vitepress'
import { mdPlugin } from './plugins/demo'

export const nav: DefaultTheme.NavItem[] = [
    {
        text: '首页',
        link: '/'
    },
    {
        text: '指南',
        link: '/guide/introduce'
    },
    {
        text: '组件',
        link: '/components/fold'
    },
    {
        text: '更新日志',
        link: '/update/doc'
    },
]

export const sidebar = {
    '/guide/': [
        {
            text: '指南',
            items: [
                {
                    text: '介绍',
                    link: '/guide/introduce'
                },
                {
                    text: '安装',
                    link: '/guide/install'
                },
                {
                    text: '使用',
                    link: '/guide/usage'
                }
            ]
        },
    ],
    '/components/': [
        {
            text: '组件',
            items: [
                {
                    text: "Fold 折叠",
                    link: '/components/fold'
                },
                // {
                //     text: "Comment 评论",
                //     link: '/components/comment'
                // },
                // {
                //     text: 'Anchor 锚点',
                //     link: '/components/anchor'
                // },
                // {
                //     text: 'Search 搜索',
                //     link: '/components/search'
                // },
                // {
                //     text: 'Chat 聊天',
                //     link: '/components/chat'
                // },
                // {
                //     text: 'NoticeBar 通知栏',
                //     link: '/components/notice-bar'
                // },
                // {
                //     text: 'Tags 标签页',
                //     link: '/components/tags'
                // },
                // {
                //     text: "Divider 分割线",
                //     link: '/components/divider'
                // },
                // {
                //     text: "Icon 图标",
                //     link: '/components/icon'
                // },
                // {
                //     text: "Editor 编辑器",
                //     link: '/components/editor'
                // },
                // {
                //     text: "Dialog 对话框",
                //     link: '/components/dialog'
                // },
                // {
                //     text: "Toast 吐司",
                //     link: '/components/toast'
                // }
            ]
        }
    ],
}

const REPO_BASE_URL = '/'

export default defineConfig({
    srcDir: 'src',
    base: process.env.VERCEL_BUILD ? '/' : REPO_BASE_URL,
    head: [
        [
            'link',
            {
                rel: 'icon',
                type: 'image/png',
                href: REPO_BASE_URL + 'favicon.ico',
            },
        ],
    ],
    title: 'Havoc UI',
    description: '一个基于 Vue3.0 的 UI 组件库',
    themeConfig: {
        logo: '/logo.png',
        nav: nav,
        sidebar: sidebar,
        editLink: {
            pattern: 'https://github.com/erthinking/havoc-ui/edit/main/docs/:path',
            text: 'Edit this page on GitHub',
        },

        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/erthinking/havoc-ui',
            },
        ],

        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-present Erthinking',
        },
    },
    lastUpdated: true,
    appearance: true,
    markdown: {
        config: (md) => mdPlugin(md),
    },
})
