<template>
  <div class="carousel">
    <div
      class="carousel-inner"
      @mousedown="handleTouchStart($event)"
      @mousemove="handleTouchMove($event)"
      @mouseup="handleTouchEnd($event)"
      @touchstart="handleTouchStart($event)"
      @touchmove="handleTouchMove($event)"
      @touchend="handleTouchEnd($event)"
    >
      <img class="logo" src="/ui/logo-blanc.png" alt="Logo" />
      <ul>
        <li
          v-for="(carouselItem, i) in carouselItems"
          :key="carouselItem.img"
          class="slide"
          :class="{ active: i == slideIndex - 1 }"
        >
          <div class="carousel-img">
            <img :src="carouselItem.img" alt="" />
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
        @click="showSlides(n)"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slideIndex: 3,
      interval: null,
      isPlaying: true,
      delay: 4000,
      carouselItems: [
        {
          text: "L'association havraise qui accompagne la valorisation des bio-déchets",
          link: '/adherer',
          linkText: "Adhérer à l'association",
          img: '/carousel/test1.png',
        },
        {
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          link: '/prestations',
          linkText: 'Voir nos prestations',
          img: '/carousel/test2.png',
        },
        {
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          link: '/boutique',
          linkText: 'Visiter la boutique',
          img: '/carousel/test3.png',
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
      this.next()
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
    showSlides(n) {
      const slides = document.getElementsByClassName('slide')

      this.slideIndex = n

      if (n > slides.length) {
        this.slideIndex = 1
      }

      if (n < 1) {
        this.slideIndex = slides.length
      }
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

<style lang="scss">
.carousel {
  --dot-size: 0.6rem;
  position: relative;
  width: 100%;
  min-height: 420px;
  margin: 0 auto;
  background-color: var(--clr-bg-dark);

  &-inner {
    position: absolute;
    inset: 0;
  }

  &-img {
    overflow: hidden;

    img {
      width: 100%;
    }
  }

  &-title {
    padding: 1.5rem 1rem 1rem;
    color: white;
    font-size: clamp(1.25rem, 2.25vw, 2.25rem);
    font-weight: bold;

    p {
      margin-bottom: 1.5rem;
    }
  }

  .controls,
  .slide,
  .dots {
    position: absolute;
  }

  .logo {
    display: none;
  }

  .slide {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
    z-index: 1;
    height: 100%;
    width: 100%;

    &.active {
      opacity: 1;
      z-index: 2;
    }
  }

  .dots {
    bottom: 0;
    width: 150px;
    display: flex;
    justify-content: space-around;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px 0;
    z-index: 3;
  }

  .dot {
    display: inline-block;
    border-radius: 100%;
    background: white;
    width: var(--dot-size);
    height: var(--dot-size);
    box-shadow: 1px 1px 1px 1px #aaaaaa;
    position: relative;
    transition: all 0.1s ease-in-out;
    opacity: 0.5;

    &:hover,
    &.active {
      cursor: url('~assets/img/cursor-hover.png'), auto;
      opacity: 1;
    }
  }

  .controls {
    --control-size: 30px;
    z-index: 5;
    bottom: 2rem;
    right: 5%;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 100%;
    border: 1px solid black;
    width: var(--control-size);
    height: var(--control-size);

    a {
      display: flex;
      height: 100%;

      svg {
        margin: auto;
        width: 50%;
      }
    }
  }

  @media (min-width: 550px) {
    min-height: 500px;
  }

  @media (min-width: 850px) {
    min-height: initial;
    aspect-ratio: 16/6;
    max-height: 530px;

    &-inner {
      max-width: var(--container-width);
      margin: auto;
    }

    &-title {
      padding: 17% 5% 1rem 1.5rem;
      width: 38%;
    }

    &-img {
      width: 55%;
      height: 100%;
      position: absolute;
      right: 0;

      img {
        height: 100%;
        width: initial;
      }
    }

    .logo {
      display: block;
      position: absolute;
      width: 25%;
      top: 1.5rem;
      left: 1.5rem;
    }

    .slide {
      flex-direction: initial;
    }

    .cta {
      margin: initial;
    }
  }
}
</style>
