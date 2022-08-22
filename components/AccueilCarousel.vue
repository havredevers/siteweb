<template>
  <div class="carousel">
    <div class="carousel-inner">
      <CustomImage class="logo" src="/ui/logo-blanc.png" alt="Logo" />
      <ul>
        <li
          v-for="carouselItem in carouselItems"
          :key="carouselItem.img"
          class="slide"
        >
          <div class="carousel-img">
            <CustomImage :src="carouselItem.img" alt="" />
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
    <div class="pagination">
      <a title="Précédent" href="#" class="prev" @click="prev($event)">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path
            d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"
          />
        </svg>
      </a>
      <a title="Suivant" href="#" class="next" @click="next($event)">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path
            d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"
          />
        </svg>
      </a>
    </div>
    <div class="dots">
      <span
        v-for="n in carouselItems.length"
        :key="n"
        class="dot"
        @click="showSlides(n)"
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
      isPlaying: false,
      delay: 4000,
      carouselItems: [
        {
          text: "L'association havraise qui accompagne la valorisation des bio-déchets",
          link: '/adherer',
          linkText: "Adhérer à l'association",
          img: '/blog/test.jpg',
        },
        {
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          link: '/',
          linkText: 'Un lien',
          img: '/blog/test2.jpg',
        },
        {
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          link: '/',
          linkText: 'Un autre lien',
          img: '/blog/test.jpg',
        },
      ],
    }
  },
  watch: {
    $route() {
      clearInterval(this.interval)
    },
  },
  mounted() {
    this.showSlides(this.slideIndex)
  },
  destroyed() {
    clearInterval(this.interval)
  },
  methods: {
    launch(e) {
      if (e) e.preventDefault()
      this.isPlaying = true
      this.showSlides(this.slideIndex + 1)
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
    prev(e) {
      e.preventDefault()
      this.showSlides(this.slideIndex - 1)
    },
    next(e) {
      if (e) e.preventDefault()
      this.showSlides(this.slideIndex + 1)
    },
    showSlides(n) {
      const slides = document.getElementsByClassName('slide')
      const dots = document.getElementsByClassName('dot')

      this.slideIndex = n

      if (n > slides.length) {
        this.slideIndex = 1
      }

      if (n < 1) {
        this.slideIndex = slides.length
      }

      for (const slide of slides) {
        slide.classList.remove('active')
      }

      for (const dot of dots) {
        dot.classList.remove('active')
      }

      slides[this.slideIndex - 1].classList.add('active')
      dots[this.slideIndex - 1].classList.add('active')
    },
  },
}
</script>

<style lang="scss">
.carousel {
  --dot-size: 1rem;
  position: relative;
  width: 100%;
  min-height: 420px;
  margin: 0 auto;
  max-width: 1600px;

  &-inner {
    position: absolute;
    inset: 0;
    background: #6b7a6e;
  }

  &-img {
    overflow: hidden;

    img {
      width: 100%;
    }
  }

  &-title {
    padding: 1.5rem 1rem 2.5rem;
    color: white;
    font-size: clamp(20px, 2.25vw, 40px);
    font-weight: bold;

    p {
      margin-bottom: 1.5rem;
    }
  }

  .controls,
  .prev,
  .next,
  .slide,
  .dots {
    position: absolute;
  }

  .prev,
  .next {
    display: block;
    height: 100%;
    z-index: 3;
    top: 0;

    svg {
      position: relative;
      top: 15%;
      width: 50px;
      fill: white;
    }
  }

  .next {
    right: 0;
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

  .cta {
    display: block;
    margin: auto;
    width: fit-content;
    border-radius: 1rem;
    background-color: #d7e188;
    color: var(--clr-font);
    padding: 0.75rem 1.5rem;
    font-size: clamp(12px, 1vw, 16px);
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
    box-shadow: 1px 2px 2px 2px #aaaaaa;
    position: relative;
    transition: all 0.1s ease-in-out;

    &:hover,
    &.active {
      cursor: url('~assets/img/cursor-hover.png'), auto;
      top: -0.1rem;
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

    &-inner {
      width: 80%;
      margin: auto;
    }

    &-title {
      padding: 18% 3% 1rem;
      width: 35%;
    }

    &-img {
      width: 65%;
      position: absolute;
      right: 0;
    }

    .logo {
      display: block;
      position: absolute;
      width: 25%;
      top: 5%;
      left: 5%;
    }

    .slide {
      flex-direction: initial;
    }

    .cta {
      margin: initial;
    }

    .prev,
    .next {
      width: 10%;
      display: flex;
      justify-content: center;

      svg {
        position: initial;
        fill: var(--clr-font);
      }
    }
  }
}
</style>
