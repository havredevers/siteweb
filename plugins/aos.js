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
        if (this.$route.name === 'prestations') {
          const divs = document.querySelectorAll('.nuxt-content > *')
          divs.forEach((div) => {
            div.setAttribute('data-aos', 'fade-up')
          })
        }
        console.log('init')
        setTimeout(() => {
          import('~/node_modules/aos').then((AOS) => AOS.init(this.config))
        }, 100)
      },
      updated() {
        this.$nextTick(function () {
          console.log('hard refresh')
          AOS.refreshHard()
        })
      },
    })
  }
}

Vue.use(new AosPlugin())
