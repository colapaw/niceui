import { defineConfig } from 'vitepress'
import klawSync from 'klaw-sync'
import path from 'path'
import { mdPlugin } from './plugins/demo'

// const basePath = '/zh-CN/components'
// const componentDocs = klawSync(
//     path.resolve(__dirname, '..' + basePath),
//     {
//         nodir: true,
//     }
// )
//     .map((item) =>
//         path.basename(item.path).replace('.md', '')
//     )
//     .filter(
//         (path) =>
//             !path.includes('index') &&
//             !path.includes('quick-start')
//     )
//     .map((path) => ({
//         text: path.replace(/\w/, ($0) => $0.toUpperCase()),
//         link: path,
//     }))

// const zhComponentDocs = componentDocs.map((item) => ({
//     ...item,
//     link: '/zh-CN/components/' + item.link,
// }))

// const enComponentDocs = componentDocs.map((item) => ({
//     ...item,
//     link: '/en-US/components/' + item.link,
// }))

const REPO_BASE_URL = '/'

export default defineConfig({
    base: process.env.VERCEL_BUILD ? '/' : REPO_BASE_URL,
    title: 'Hecto UI',
    description: '一个基于 Vue3.0 的 UI 组件库',
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'Hecto UI',
            description: '中文 description',
        }
    },
    head: [
        [
            'link',
            {
                rel: 'icon',
                type: 'image/png',
                href: REPO_BASE_URL + 'favicon.ico',
            },
        ],
        [
            'link',
            {
                rel: 'dns-prefetch',
                href: 'https://fonts.gstatic.com',
            },
        ],
        [
            'link',
            {
                rel: 'preconnect',
                crossorigin: 'anonymous',
                href: 'https://fonts.gstatic.com',
            },
        ],
        [
            'link',
            {
                href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@200;400;500&family=Inter:wght@200;400;500;600',
                rel: 'stylesheet',
            },
        ],
    ],

    lang: 'zh-CN',

    themeConfig: {
        logo: '/logo.png',
        nav: [
            { text: '首页', link: '/' },
            { text: '文档', link: '/zh-CN/components/' },
            { text: '组件', link: '/zh-CN/components/' }
        ],

        sidebar: {
            // '/zh-CN/components/': [
            //     {
            //         text: '使用',
            //         collapsible: true,
            //         items: [
            //             {
            //                 text: '更新日志',
            //                 link: '/zh-CN/components/',
            //             },
            //             {
            //                 text: '快速开始',
            //                 link: '/zh-CN/components/quick-start',
            //             },
            //         ],
            //     },
            //     {
            //         text: '组件',
            //         items: zhComponentDocs,
            //     },
            // ],
        },

        editLink: {
            repo: 'colapaw/hecto-ui',
            branch: 'main',
            dir: 'docs',
            text: 'Edit this page on GitHub',
        },

        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/colapaw/hecto-ui',
            },
        ],

        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-present ColaPaw',
        },
    },
    markdown: {
        config: (md) => mdPlugin(md),
    },
})
