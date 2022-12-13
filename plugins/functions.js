import Vue from 'vue'

Vue.prototype.$formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(date).toLocaleDateString('fr', options)
}

Vue.prototype.$secureMail = () => {
  const oC = document.querySelectorAll('.protect')

  oC.forEach((link) => {
    let sC = link.getAttribute('data-protect')
    sC = sC.replace('point', '.')
    sC = sC.replace('arobas', '@')
    link.setAttribute('href', 'mailto:' + sC)
  })
}

Vue.prototype.$linkImages = () => {
  const imgs = document.querySelectorAll(
    '.section-page:not(.carte) img:not(.dot-img)'
  )

  imgs.forEach((img) =>
    img.addEventListener('click', (e) => {
      e.preventDefault()
      document.querySelector('#modal').style.display = 'flex'
      document.querySelector('#modal img').src = img.src
      document.querySelector('#modal .caption').innerHTML = img.alt
    })
  )
}
