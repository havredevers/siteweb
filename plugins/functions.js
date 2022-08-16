import Vue from 'vue'

Vue.prototype.$formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(date).toLocaleDateString('fr', options)
}

export default ({ app }, inject) => {
  inject('variables', Vue.observable({ blogPagination: 3 }))
}