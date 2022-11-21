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
