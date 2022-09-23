<template>
  <div>
    <header class="main-menu">
      <div class="container">
        <NuxtLink to="/" class="title">
          HAVRE
          <img src="/ui/logo-vert.png" alt="" />
          DE VERS
        </NuxtLink>
        <MainMenu />
      </div>
    </header>
    <Nuxt />
    <MainFooter />
    <div class="scroll-to-top" @click="scrollToTop()">&#8593;</div>
  </div>
</template>

<script>
import aosMixin from '~/mixins/aos'

export default {
  mixins: [aosMixin],
  data() {
    return {
      newOffset: 0,
      oldOffset: 0,
    }
  },
  watch: {
    $route() {
      document.getElementById('menu-btn').checked = false
      window.scrollTo(0, 0)
    },
  },
  beforeMount() {
    window.addEventListener('scroll', function () {
      this.newOffset = window.pageYOffset

      // Scroll To Top
      const btnClassList = document.querySelector('.scroll-to-top').classList
      const isVisible = btnClassList.contains('show')
      !isVisible && this.newOffset > 250
        ? btnClassList.add('show')
        : isVisible && this.newOffset <= 250 && btnClassList.remove('show')

      // Menu
      const menuClassList = document.querySelector('.main-menu').classList

      this.newOffset > 0
        ? menuClassList.add('reduced')
        : menuClassList.remove('reduced')

      // Menu smartphones
      if (this.oldOffset < this.newOffset) {
        menuClassList.remove('sticky')
      } else if (this.oldOffset > this.newOffset) {
        menuClassList.add('sticky')
      }
      this.oldOffset = this.newOffset
    })
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    },
  },
}
</script>

<style lang="scss">
.main-menu {
  position: relative;
  top: 0;
  z-index: 100;
  background: var(--clr-bg1);
  padding: 1rem 0;

  @media (min-width: 1200px) {
    position: sticky;
    top: 0;
  }

  .title {
    color: var(--clr-primary);
    font-family: 'FRUIT PUNCH';
    font-size: 1.5rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    max-height: 67px;
    overflow: hidden;
    transition: all 0.1s ease-out;

    & > * + * {
      margin-left: 0.5rem;
    }

    @media (min-width: 370px) {
      font-size: 2rem;
    }

    @media (min-width: 550px) {
      font-size: 3rem;
    }

    @media (min-width: 850px) {
      justify-content: center;
      padding-right: 0;
      font-size: 4rem;

      & > * + * {
        margin-left: 1.5rem;
      }
    }

    img {
      max-width: 45px;
      transition: all 0.1s ease-out;

      @media (min-width: 850px) {
        max-width: 75px;
      }
    }
  }

  &.sticky {
    position: sticky;
    top: 0;
  }

  &.reduced {
    position: sticky;
    top: -100px;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15),
      inset 0 -1px 0 rgba(0, 0, 0, 0.15);

    @media (min-width: 850px) {
      top: 0;
    }

    &.sticky {
      transition: all 0.3s ease-in-out;
      top: 0;
    }

    .menu {
      padding-top: 0;
      padding-bottom: 0;

      @media (min-width: 850px) {
        overflow: initial;
      }
    }

    @media (min-width: 850px) {
      .title {
        max-height: 0;
      }
    }

    @media (min-width: 1050px) {
      .container {
        display: flex;
        justify-content: space-between;
      }

      & > a {
        display: flex;
        align-items: center;
      }

      .title {
        font-size: 1.5rem;
        max-height: initial;

        & > * + * {
          margin-left: 0.5rem;
        }

        img {
          max-width: 40px;
        }
      }

      .menu > * + * {
        margin-left: 2rem;
      }
    }
  }
}

.scroll-to-top {
  position: fixed;
  bottom: -100px;
  right: 20px;
  text-align: center;
  line-height: 50px;
  height: 50px;
  width: 50px;
  background-color: var(--clr-green1);
  color: var(--clr-font);
  box-shadow: 0 5px 5px 0px rgba(50, 50, 50, 0.5);
  transition: all 0.3s ease-in-out;

  &.show {
    bottom: 20px;

    @media (min-width: 700px) {
      bottom: 110px;
    }

    @media (min-width: 1200px) {
      bottom: 20px;
    }
  }

  &:hover {
    cursor: url('~assets/img/cursor-hover.png'), auto;
    transform: translateY(-10px);
    background-color: var(--clr-green3);
    color: white;
    box-shadow: 0 15px 15px 0px rgba(50, 50, 50, 0.5);
  }
}
</style>
