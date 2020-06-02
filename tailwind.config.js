module.exports = {
    prefix: 'tw-',
    purge: [
        './version/**/*.tpl'
    ],
    theme: {
        extend: {
            boxShadow: {
                creativ: '0 30px 60px -12px rgba(50,50,93,0.25),0 18px 36px -18px rgba(0,0,0,0.3)',
            },
        },
    },
    variants: {
        backgroundOpacity: ['hover', 'group-hover']
    },
    plugins: [],
    corePlugins: {
        preflight: false,
    }
}
