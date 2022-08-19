<template>
  <div class="carousel">
    <div class="carousel-inner">
      <img class="logo" src="@/assets/img/logo-rose.png" alt="Logo" />
      <ul>
        <li class="mySlides">
          <div class="carousel-title">
            L'association havraise qui accompagne la valorisation des
            bio-déchets
            <NuxtLink to="/adherer" class="cta">
              Adhérer à l'association
            </NuxtLink>
          </div>
          <div class="carousel-img">
            <img src="/blog/test.jpg" alt="" />
          </div>
        </li>
        <li class="mySlides">
          <div class="carousel-title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <a href="#" class="cta">Un lien</a>
          </div>
          <div class="carousel-img">
            <img src="/blog/test2.jpg" alt="" />
          </div>
        </li>
        <li class="mySlides">
          <div class="carousel-title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <a href="#" class="cta">Un autre lien</a>
          </div>
          <div class="carousel-img">
            <img src="https://picsum.photos/800/650" alt="" />
          </div>
        </li>
      </ul>
    </div>
    <div class="pagination">
      <div class="prev">
        <a title="Précédent" href="#" @click="plusSlides(-1)">&#10094;</a>
      </div>
      <div class="next">
        <a title="Suivant" href="#" @click="plusSlides(1)">&#10095;</a>
      </div>
    </div>
    <div class="dots">
      <span class="dot" @click="currentSlide(1)"></span>
      <span class="dot" @click="currentSlide(2)"></span>
      <span class="dot" @click="currentSlide(3)"></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slideIndex: 1,
    }
  },
  mounted() {
    this.showSlides(this.slideIndex)
  },
  methods: {
    plusSlides(n) {
      this.showSlides((this.slideIndex += n))
    },
    currentSlide(n) {
      this.showSlides((this.slideIndex = n))
    },
    showSlides(n) {
      let i
      const slides = document.getElementsByClassName('mySlides')
      const dots = document.getElementsByClassName('dot')
      if (n > slides.length) {
        this.slideIndex = 1
      }
      if (n < 1) {
        this.slideIndex = slides.length
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '')
      }
      slides[this.slideIndex - 1].style.display = 'block'
      dots[this.slideIndex - 1].className += ' active'
    },
  },
}
</script>

<style lang="scss">
.carousel {
  --dot-size: 1rem;
  --btn-nav-color: var(--clr-font);
  --btn-pagination-color: white;
  --btn-nav-size: 50px;

  background: #6b7a6e;
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

  .dots,
  .prev,
  .next,
  &-img,
  ul,
  .mySlides,
  .cta {
    position: absolute;
  }

  .logo,
  &-title {
    width: 30%;
    margin: 2.5%;
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
    top: 35%;
    height: 60%;
  }

  &-img {
    right: 0;
    top: 0;
    max-width: 65%;

    img {
      max-width: 100%;
    }
  }

  .cta {
    display: block;
    border-radius: 1rem;
    background-color: #d7e188;
    color: var(--clr-font);
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-size: clamp(12px, 1vw, 16px);
    position: absolute;
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
      display: block;
      border-radius: 100%;
      border: 1px solid var(--btn-nav-color);
      color: var(--btn-nav-color);
      width: var(--btn-nav-size);
      height: var(--btn-nav-size);
      line-height: var(--btn-nav-size);
      text-align: center;
      transition: all 0.1s ease-in-out;

      &:hover {
        --btn-nav-color: var(--clr-secondary);
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
