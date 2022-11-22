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

        if (['prestations', 'blog-slug'].includes(this.$route.name)) {
          const divs = document.querySelectorAll('.nuxt-content > *')
          divs.forEach((div) => {
            div.setAttribute('data-aos', 'fade-up')
            if (
              this.$route.name === 'blog-slug' &&
              ['h2', 'h3'].includes(div.localName)
            ) {
              div.setAttribute('data-aos-offset', '200')
            }
          })
        }

        document.querySelectorAll('img').forEach((img) => {
          img.addEventListener('load', () => {
            AOS.refreshHard()
          })
        })

        import('~/node_modules/aos').then((AOS) => AOS.init(this.config))
      },
    })
  }
}

Vue.use(new AosPlugin())
