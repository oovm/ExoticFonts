const locale_cn = {
    selectText: '选择语言',
    label: '简体中文',
    editLinkText: '在 GitHub 上编辑此页',
    serviceWorker: {
        updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
        }
    },
    sidebar: [
        {
            title: 'Cipher',
            collapsable: false,
            children: [
                ['/cn/PigpenCipher', 'Pigpen'],
            ]
        },
        {
            title: 'Conlang',
            collapsable: false,
            children: [
                ['/cn/Hymmnos', 'Hymmnos'],
            ],
        }
    ]
}

const locale_en = {
    selectText: 'Languages',
    label: 'English',
    ariaLabel: 'Languages',
    editLinkText: 'Edit this page on GitHub',
    serviceWorker: {
        updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
        }
    },
    sidebar: [
        {
            title: 'Cipher',
            collapsable: false,
            children: [
                ['/en/PigpenCipher', 'Pigpen'],
            ]
        },
        {
            title: 'Conlang',
            collapsable: false,
            children: [
                ['/en/Hymmnos', 'Hymmnos'],
            ],
        }
    ]
}

module.exports = {
    dest: 'docs/.build',
    locales: {
        '/cn/': {
            lang: 'zh-CN',
            title: 'ExoticFonts',
            lastUpdated: 'Last Updated',
        },
        '/en/': {
            lang: 'en-US',
            title: 'ExoticFonts',
            lastUpdated: 'Last Updated',
        }
    },
    head: [
        ['link', { rel: 'shortcut icon', type: "image/x-icon", href: './favicon.png' }]
    ],
    themeConfig: {
        repo: 'GalAster/ExoticFonts',
        editLinks: true,
        docsDir: 'docs',
        markdown: {
            lineNumbers: true
        },
        locales: {
            '/cn/': locale_cn,
            '/en/': locale_en,
        },
    },
    plugins: {
        '@vuepress/pwa': {
            serviceWorker: true,
            updatePopup: true,
            popupComponent: 'PWAUpdate',
        }
    }
};

