import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  mounted() {
    const route = this.$route.name

    if (route === 'prestations') {
      const contents = document.querySelectorAll('.nuxt-content')
      contents.forEach((content) => {
        content.querySelectorAll('*').forEach((item) => {
          item.setAttribute('data-aos', 'fade-up')
        })
      })
    }
    AOS.init({})
  },
}
