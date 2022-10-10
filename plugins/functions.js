import Vue from 'vue'

Vue.prototype.$formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(date).toLocaleDateString('fr', options)
}

export default ({ app }, inject) => {
  inject('variables', Vue.observable({ blogPagination: 3 }))
}

Vue.mixin({
  mounted: () => {
    const oC = document.querySelectorAll('.protect')

    oC.forEach((link) => {
      let sC = link.getAttribute('data-protect')
      sC = sC.replace('point', '.')
      sC = sC.replace('arobas', '@')
      link.setAttribute('href', 'mailto:' + sC)
    })
  },
})
