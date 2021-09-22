module.exports = {
    title: 'Bricks',
    description: 'A modular WordPress starter theme powered by Bootstrap 5 and Gulp',
    head: [
        ['link', { rel: 'icon', href: '/icon.png' }],
        ['meta', { name: 'theme-color', content: '#37c871' }],
        ['meta', { property: 'og:locale', content: 'en_US' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:url', content: 'https://bricks.stefanobartoletti.it/' }],
        ['meta', { property: 'og:title', content: 'Bricks Documentation' }],
        ['meta', { property: 'og:site_name', content: 'Bricks' }],
        ['meta', { property: 'og:description', content: "A modular WordPress starter theme powered by Bootstrap 5 and Gulp" }],
        ['meta', { property: 'og:image', content: 'https://bricks.stefanobartoletti.it/preview.png' }],
        ['meta', { property: 'og:image:type', content: 'image/png' }],
        ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
        ['meta', { name: 'twitter:site', content: '@ste_bartoletti' }],
        ['meta', { name: 'twitter:title', content: 'Bricks Documentation' }],
        ['meta', { name: 'twitter:description', content: "A modular WordPress starter theme powered by Bootstrap 5 and Gulp" }],
        ['meta', { name: 'twitter:image', content: 'https://bricks.stefanobartoletti.it/preview.png' }],
        ['meta', { name: 'google-site-verification', content: 'snVUv6mUDur4MkL3CDDFGFDv7TPFm4vAk5BAfK-cDsw' }]
    ],
    dest: 'dist',
    plugins: [
        [
            'vuepress-plugin-google-tag-manager', {
                gtm: 'GTM-NNXNK4M',
            }
        ],
        [
            'sitemap', {
                hostname: 'https://bricks.stefanobartoletti.it'
            },
        ],
        [
            'vuepress-plugin-canonical', {
              baseURL: 'https://bricks.stefanobartoletti.it',
            }
        ]
    ], 
    themeConfig: {
        logo: '/bricks-logo.svg',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Theme', link: '/theme/' },
            { text: 'Integrations', link: '/integrations/' },
            { text: 'About', link: '/about/' },
            { text: 'Changelog', link: 'https://github.com/stefanobartoletti/bricks/blob/master/CHANGELOG.md' },
        ],
        algolia: {
            apiKey: 'fdfc180ae834b22f0171e561027a3533',
            indexName: 'bricks-wp'
        },
        sidebar: {
            '/theme/': [
                {
                    title: 'Get started',
                    collapsable: false,
                    children: [
                        '/theme/',
                        '/theme/setup/',
                        '/theme/configuration/',
                        '/theme/scripts/',
                        '/theme/linting/',
                    ]
                },
                {
                    title: 'Theme',
                    collapsable: false,
                    children: [
                        '/theme/folders/',
                        '/theme/functions/',
                        '/theme/cleanup/',
                        '/theme/bootstrap/',
                    ]
                },
                {
                    title: 'Assets',
                    collapsable: false,
                    children: [
                        '/theme/css/',
                        '/theme/javascript/',
                        '/theme/images/',
                        '/theme/fonts/',
                        '/theme/icons/',
                        '/theme/localization/',
                    ]
                },
            ],
            '/integrations/': [
                {
                    collapsable: false,
                    children: [
                        '/integrations/',
                    ]
                },
                {
                    title: 'WordPress',
                    collapsable: false,
                    children: [
                        // '/integrations/woocommerce/',
                        '/integrations/acf/',
                        '/integrations/contact-form-7/',
                        '/integrations/yoast-rankmath/',
                    ]
                },
                {
                    title: 'JavaScript Libraries',
                    collapsable: false,
                    children: [
                        '/integrations/aos/',
                        '/integrations/swiper/',
                    ]
                },
            ],
            '/changelog/': [
                {
                    collapsable: false,
                    children: [
                        '/changelog/',
                    ]
                },
            ],
            '/about/': [
                {
                    collapsable: false,
                    children: [
                        '/about/',
                        '/about/author/',
                    ]
                },
            ]
        },
        repo: 'stefanobartoletti/bricks',
        docsRepo: 'stefanobartoletti/bricks-docs',
        docsDir: 'docs',
        editLinks: true,
        lastUpdated: true,
        smoothScroll: true,
    }
}