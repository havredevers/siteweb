import Vue from 'vue'

Vue.prototype.$formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(date).toLocaleDateString('fr', options)
}

Vue.prototype.$handleImagesLoad = (e) => {
  if (e) {
    e.target.setAttribute('loaded', true)
    console.log(e.target.src)
  }

  const images = document.querySelectorAll('img:not([loaded])')

  console.log(images.length + '/' + document.querySelectorAll('img').length)

  if (images.length < 1) {
    console.log('Toutes les images sont chargées')
    const loader = document.querySelector('.loader')
    loader.classList.remove('show')
    // loader.style.display = 'none'
  }
}

export default ({ app }, inject) => {
  inject('variables', Vue.observable({ blogPagination: 3 }))
}
