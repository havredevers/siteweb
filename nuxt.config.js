export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Havre De Vers',
    htmlAttrs: {
      lang: 'fr',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-TileColor', content: '#84aa4b' },
      { name: 'theme-color', content: '#ffffff' },
      { name: 'robots', content: 'noindex' },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '120x120',
        href: '/apple-touch-icon.png',
      },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#84aa4b' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main'],

  router: {
    linkActiveClass: 'active',
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/functions'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://www.npmjs.com/package/nuxt-animejs
    'nuxt-animejs',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-content-git',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'nuxt-webfontloader',
  ],

  webfontloader: {
    google: {
      families: ['Work Sans', 'Changa One', 'Vibur'],
      urls: [
        'https://fonts.googleapis.com/css2?family=Work+Sans:wght@400..700&display=swap',
        'https://fonts.googleapis.com/css2?family=Changa+One:wght@400..700&display=swap',
        'https://fonts.googleapis.com/css2?family=Vibur:wght@400..700&display=swap',
      ],
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
