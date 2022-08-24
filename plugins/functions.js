import Vue from 'vue'

Vue.prototype.$formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(date).toLocaleDateString('fr', options)
}

Vue.prototype.$handleImagesLoad = (e) => {
  const images = document.querySelectorAll('img:not([loaded])')

  if (e) {
    e.target.setAttribute('loaded', true)
  }

  if (images.length <= 1) {
    const loader = document.querySelector('.loader')
    loader.classList.remove('show')
    window.scrollTo(0, 1)
  }
}

export default ({ app }, inject) => {
  inject('variables', Vue.observable({ blogPagination: 2 }))
}
