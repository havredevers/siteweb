<template>
  <div class="carousel">
    <div
      class="carousel-inner"
      @touchstart="handleTouchStart($event)"
      @touchmove="handleTouchMove($event)"
      @touchend="handleTouchEnd($event)"
    >
      <ul>
        <li
          v-for="(carouselItem, i) in carouselItems"
          :key="carouselItem.img"
          class="slide"
          :class="{ active: i == slideIndex - 1 }"
        >
          <div class="carousel-img">
            <nuxt-img format="webp" :src="carouselItem.img" alt="" />
          </div>
          <div class="carousel-title">
            <p>{{ carouselItem.text }}</p>
            <NuxtLink :to="carouselItem.link" class="cta">
              {{ carouselItem.linkText }}
            </NuxtLink>
          </div>
        </li>
      </ul>
      <div class="controls">
        <a v-if="!isPlaying" href="#" @click="launch($event)">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <title>Lecture</title>
            <path
              d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z"
            />
          </svg>
        </a>
        <a v-else href="#" @click="pause($event)">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <title>Pause</title>
            <path
              d="M272 63.1l-32 0c-26.51 0-48 21.49-48 47.1v288c0 26.51 21.49 48 48 48L272 448c26.51 0 48-21.49 48-48v-288C320 85.49 298.5 63.1 272 63.1zM80 63.1l-32 0c-26.51 0-48 21.49-48 48v288C0 426.5 21.49 448 48 448l32 0c26.51 0 48-21.49 48-48v-288C128 85.49 106.5 63.1 80 63.1z"
            />
          </svg>
        </a>
      </div>
    </div>
    <div class="dots">
      <span
        v-for="n in carouselItems.length"
        :key="n"
        class="dot"
        :class="{ active: n == slideIndex }"
        @click="showSlides(n, $event)"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slideIndex: 1,
      interval: null,
      isPlaying: true,
      delay: 4000,
      carouselItems: [
        {
          text: "L'association havraise qui accompagne la valorisation des biodéchets",
          link: '/adherer',
          linkText: "Adhérer à l'association",
          img: '/carousel/adherer.png',
        },
        {
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          link: '/prestations',
          linkText: 'Voir nos prestations',
          img: '/carousel/prestations.png',
        },
        {
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          link: '/boutique',
          linkText: 'Visiter la boutique',
          img: '/carousel/boutique.png',
        },
      ],
      pointerPositionDown: {
        x: null,
        y: null,
      },
    }
  },
  watch: {
    $route() {
      clearInterval(this.interval)
    },
  },
  mounted() {
    this.launch()
  },
  destroyed() {
    clearInterval(this.interval)
  },
  methods: {
    launch(e) {
      if (e) e.preventDefault()
      this.isPlaying = true
      this.interval = setInterval(
        function () {
          this.next()
        }.bind(this),
        this.delay
      )
    },
    pause(e) {
      e.preventDefault()
      clearInterval(this.interval)
      this.isPlaying = false
    },
    next(e) {
      if (e) e.preventDefault()
      this.showSlides(this.slideIndex + 1)
    },
    prev() {
      this.showSlides(this.slideIndex - 1)
    },
    showSlides(n, e) {
      if (e && e.target.classList.contains('active')) {
        return
      }

      const slides = document.getElementsByClassName('slide')

      this.slideIndex = n

      if (n > slides.length) {
        this.slideIndex = 1
      }

      if (n < 1) {
        this.slideIndex = slides.length
      }
      clearInterval(this.interval)
      this.launch()
    },
    handleTouchStart(e) {
      this.getPointerPosition(e, this.pointerPositionDown)
    },
    handleTouchMove(e) {
      if (!this.pointerPositionDown.x || !this.pointerPositionDown.y) {
        return
      }

      const pointerPositionUp = {
        x: null,
        y: null,
      }

      this.getPointerPosition(e, pointerPositionUp)

      const xDiff = this.pointerPositionDown.x - pointerPositionUp.x

      if (xDiff > 0) {
        /* left swipe */
        this.next()
      } else {
        /* right swipe */
        this.prev()
      }

      this.handleTouchEnd()
    },
    handleTouchEnd(e) {
      this.pointerPositionDown.x = null
      this.pointerPositionDown.y = null
    },
    getPointerPosition(e, objCoord) {
      if (e.touches) {
        objCoord.x = e.touches[0].clientX
        objCoord.y = e.touches[0].clientY
      } else {
        objCoord.x = e.clientX
        objCoord.y = e.clientY
      }
    },
  },
}
</script>
