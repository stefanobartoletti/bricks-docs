module.exports = {
    title: 'Bricks',
    description: 'A modular WordPress starter theme powered by Bootstrap and Gulp',
    head: [
        ['link', { rel: 'icon', href: '/icon.png' }],
        ['meta', { name: 'theme-color', content: '#37c871' }],
        ['meta', { name: 'og:locale', content: 'en_US' }],
        ['meta', { name: 'og:type', content: 'website' }],
        ['meta', { name: 'og:url', content: 'https://bricks.stefanobartoletti.it/' }],
        ['meta', { name: 'og:title', content: 'Bricks Documentation' }],
        ['meta', { name: 'og:site_name', content: 'Bricks' }],
        ['meta', { name: 'og:description', content: "A modular WordPress starter theme powered by Bootstrap and Gulp" }],
        ['meta', { name: 'og:image', content: 'https://bricks.stefanobartoletti.it/preview.png' }],
        ['meta', { name: 'og:image:type', content: 'image/png' }],
        ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
        ['meta', { name: 'twitter:site', content: '@ste_bartoletti' }],
        ['meta', { name: 'twitter:title', content: 'Bricks Documentation' }],
        ['meta', { name: 'twitter:description', content: "A modular WordPress starter theme powered by Bootstrap and Gulp" }],
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
        ]
    ], 
    themeConfig: {
        logo: '/bricks-logo.svg',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Theme', link: '/theme/' },
            { text: 'Integrations', link: '/integrations/' },
            { text: 'About', link: '/about/' },
        ],
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
                    ]
                },
                {
                    title: 'Theme',
                    collapsable: false,
                    children: [
                        '/theme/folders/',
                        '/theme/functions/',
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
                        '/integrations/wordpress/',
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
                {
                    title: 'Other',
                    collapsable: false,
                    children: [
                        '/integrations/tracking/',
                    ]
                },
            ],
            '/about/': [
                {
                    collapsable: false,
                    children: [
                        '/about/',
                    ]
                },
            ]
        },
        repo: 'stefanobartoletti/bricks',
        docsRepo: 'stefanobartoletti/bricks-docs',
        docsDir: 'docs',
        editLinks: true,
        smoothScroll: true,
    }
}