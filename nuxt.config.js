import axios from 'axios'
require('dotenv').config()

const ENDPOINT = 'https://h2v.normandie-libre.fr/graphql'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Association Havre de vers',
    htmlAttrs: {
      lang: 'fr',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'keywords',
        content: 'association,le havre,valorisation,biodéchets,compost',
      },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-TileColor', content: '#84aa4b' },
      { name: 'theme-color', content: '#ffffff' },
      { name: 'robots', content: 'noindex' },
      // Facebook Meta Tags
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:site_name',
        content: 'Havre de Vers',
      },
      // Twitter Meta Tags
      {
        name: 'twitter-card',
        content: 'summary_large_image',
      },
      { property: 'twitter:domain', content: 'havredevers.fr' },
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
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/tarteaucitronjs/1.9.9/tarteaucitron.js',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main'],

  router: {
    linkActiveClass: 'active',
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/functions',
    {
      src: '~/plugins/aos.js',
      mode: 'client',
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://www.npmjs.com/package/nuxt-animejs
    'nuxt-animejs',
    // https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://github.com/schlunsen/nuxt-leaflet
    'nuxt-leaflet',
    // https://axios.nuxtjs.org
    '@nuxtjs/axios',
    // https://github.com/nuxt-modules/apollo/tree/v4
    '@nuxtjs/apollo',
    // https://sitemap.nuxtjs.org
    '@nuxtjs/sitemap',
  ],

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: ENDPOINT,
      },
    },
  },

  // https://nuxtjs.org/docs/configuration-glossary/configuration-env/
  env: {
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
  },

  sitemap: {
    hostname: 'https://havredevers.fr',
    gzip: true,
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {
      if (ctx && ctx.isClient) {
        config.optimization.splitChunks.maxSize = 243000
      }
    },
  },

  generate: {
    fallback: true,
    routes() {
      return axios({
        url: ENDPOINT,
        method: 'post',
        data: {
          query: `
            query GET_POSTS {
              posts {
                nodes {
                  slug
                }
              }
            }
          `,
        },
      }).then((result) => {
        return result.data.data.posts.nodes.map((post) => {
          return '/blog/' + post.slug
        })
      })
    },
  },
}
