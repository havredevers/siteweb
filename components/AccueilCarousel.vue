<template>
  <div class="carousel">
    <div class="carousel-inner">
      <CustomImage class="logo" src="/ui/logo-blanc.png" alt="Logo" />
      <ul>
        <li
          v-for="carouselItem in carouselItems"
          :key="carouselItem.img"
          class="mySlides"
        >
          <div class="carousel-title">
            {{ carouselItem.text }}
            <NuxtLink :to="carouselItem.link" class="cta">
              {{ carouselItem.linkText }}
            </NuxtLink>
          </div>
          <div class="carousel-img">
            <CustomImage :src="carouselItem.img" alt="" />
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
      <div class="prev">
        <a title="Précédent" href="#" @click="prev($event)">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path
              d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"
            />
          </svg>
        </a>
      </div>
      <div class="next">
        <a title="Suivant" href="#" @click="next($event)">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path
              d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"
            />
          </svg>
        </a>
      </div>
    </div>
    <div class="dots">
      <span
        v-for="(carouselItem, index) in carouselItems"
        :key="carouselItem.img"
        class="dot"
        @click="showSlides(index + 1)"
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
          img: 'https://picsum.photos/800/650',
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
      this.showSlides(this.slideIndex)
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
      const slides = document.getElementsByClassName('mySlides')
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
  --btn-nav-color: var(--clr-font);
  --btn-pagination-color: white;
  --btn-nav-size: 75px;
  --bg-carousel: #6b7a6e;

  background: var(--bg-carousel);
  aspect-ratio: 16/6;
  position: relative;
  margin: 0 auto;
  max-width: 1600px;
  display: none;

  @media (min-width: 850px) {
    display: block;
  }

  ul,
  li {
    inset: 0;
    overflow: hidden;
  }

  .mySlides {
    opacity: 0;
    height: 0;
    transition: all 0.5s ease-in-out;

    &.active {
      opacity: 1;
      height: 100%;
    }
  }

  .dots,
  .prev,
  .next,
  &-img,
  ul,
  li,
  .cta,
  .controls {
    position: absolute;
  }

  .logo,
  &-title {
    width: 30%;
    margin: 2.5%;
  }

  .logo {
    background: var(--bg-carousel);
    z-index: 5;
    position: relative;
  }

  &-inner {
    width: 80%;
    margin: auto;
    height: 100%;
    position: relative;
  }

  &-title {
    color: var(--btn-pagination-color);
    font-size: clamp(16px, 2.25vw, 40px);
    font-weight: bold;
    position: relative;
    top: 40%;
    height: 55%;
  }

  &-img {
    right: 0;
    top: 0;
    max-width: 65%;

    img {
      max-width: 100%;
    }
  }

  .controls {
    --control-size: 30px;
    z-index: 5;
    bottom: 2rem;
    right: 2rem;
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

  .cta {
    display: block;
    border-radius: 1rem;
    background-color: #d7e188;
    color: var(--clr-font);
    padding: 0.75rem 1.5rem;
    font-size: clamp(12px, 1vw, 16px);
    bottom: 10%;
  }

  .dots {
    bottom: 0;
    width: 150px;
    display: flex;
    justify-content: space-around;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px 0;
  }

  .dot {
    display: inline-block;
    border-radius: 100%;
    background: var(--btn-pagination-color);
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

  .prev,
  .next {
    top: 0;
    bottom: 0;
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--clr-bg);

    a {
      display: flex;
      border-radius: 100%;
      border: 3px solid var(--btn-nav-color);
      color: var(--btn-nav-color);
      width: var(--btn-nav-size);
      height: var(--btn-nav-size);
      line-height: var(--btn-nav-size);
      text-align: center;
      transition: all 0.1s ease-in-out;
      font-weight: bold;

      svg {
        height: 65%;
        margin: auto;
        transition: inherit;
      }

      &:hover {
        --btn-nav-color: var(--clr-secondary);

        svg {
          fill: var(--clr-secondary);
        }
      }
    }
  }

  .prev {
    left: 0;
  }

  .next {
    right: 0;
  }
}
</style>
