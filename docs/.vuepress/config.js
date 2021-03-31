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
        repo: 'stefanobartoletti/bricks',
        docsRepo: 'stefanobartoletti/bricks-docs',
        docsDir: 'docs',
        editLinks: true,
        smoothScroll: true,
    }
}