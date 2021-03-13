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
        ['meta', { name: 'twitter:image', content: 'https://bricks.stefanobartoletti.it/preview.png' }]
    ],
    dest: 'dist',
    themeConfig: {
        logo: '/bricks-logo.svg',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Theme', link: '/theme/' },
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
                        '/theme/fontawesome/',
                        '/theme/integrations/',
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
                        '/theme/libraries/',
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
        smoothScroll: true,
    }
}