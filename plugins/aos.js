import Vue from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

class AosPlugin {
  config = {
    // Your AOS config here
  }

  install(Vue) {
    Vue.mixin({
      mounted() {
        if (!this.$vnode?.data.nuxtChild) return

        let divs

        switch (this.$route.name) {
          case 'blog-slug':
            divs = document.querySelectorAll('.nuxt-content > *')
            divs.forEach((div) => {
              if (['img', 'iframe'].includes(div.localName)) {
                div.setAttribute('data-aos', 'zoom-in')
              } else {
                div.setAttribute('data-aos', 'fade-up')
              }

              if (
                this.$route.name === 'blog-slug' &&
                ['h2', 'h3'].includes(div.localName)
              ) {
                div.setAttribute('data-aos-offset', '200')
              }
            })
            break
        }

        document.querySelectorAll('img').forEach((img) => {
          img.addEventListener('load', () => {
            AOS.refreshHard()
          })
        })

        import('~/node_modules/aos').then((AOS) => AOS.init(this.config))
      },
      methods: {
        aosTrigger(divs) {
          divs.forEach((div) => {
            if (['img', 'iframe', 'figure'].includes(div.localName)) {
              div.setAttribute('data-aos', 'zoom-in')
            } else {
              div.setAttribute('data-aos', 'fade-up')
            }
          })
        },
      },
    })
  }
}

Vue.use(new AosPlugin())
