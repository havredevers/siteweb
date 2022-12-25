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
    '.section-page:not(.carte) img:not(.dot-img):not(.youtube-img)'
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

Vue.prototype.$checkYoutube = () => {
  const videos = document.querySelectorAll('*[data-youtube]')
  if (videos) {
    videos.forEach((video) => {
      const videoId = video.dataset.youtube

      const newDiv = document.createElement('div')
      newDiv.classList.add('video-responsive')

      const iframe = document.createElement('iframe')
      iframe.src =
        'https://www.youtube-nocookie.com/embed/' +
        videoId +
        '?autoplay=1&mute=1'
      iframe.setAttribute('frameborder', 0)
      iframe.setAttribute('allowfullscreen', true)

      const img = document.createElement('img')
      img.classList.add('youtube-img')
      img.src = 'https://img.youtube.com/vi/' + videoId + '/sddefault.jpg'
      img.alt = 'Miniature de la vidéo'
      newDiv.appendChild(img)
      const playButton = document.createElement('button')
      playButton.addEventListener('click', (e) => {
        e.target.parentNode.classList.add('loaded')
        e.target.parentNode.replaceChild(iframe, img)
      })
      newDiv.appendChild(playButton)

      video.parentNode.replaceChild(newDiv, video)
    })
  }
}
