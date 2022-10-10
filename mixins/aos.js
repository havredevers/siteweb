import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  mounted() {
    const route = this.$route.name

    window.addEventListener('load', () => {
      if (route === 'prestations') {
        const divs = document.querySelectorAll('.nuxt-content > *')
        divs.forEach((div) => {
          div.setAttribute('data-aos', 'fade-up')
        })
      }
      AOS.init({})
    })
  },
}
