import Vue from 'vue'
import 'aos/dist/aos.css'

class AosPlugin {
  config = {
    // Your AOS config here
  }

  install(Vue) {
    Vue.mixin({
      mounted() {
        if (!this.$vnode?.data.nuxtChild) return

        import('~/node_modules/aos').then((AOS) => AOS.init(this.config))
      },
    })
  }
}

Vue.use(new AosPlugin())
