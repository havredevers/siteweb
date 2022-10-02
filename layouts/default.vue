<template>
  <div>
    <header class="main-menu">
      <NuxtLink to="/" class="title">
        <img src="/ui/pomme-blanc.png" alt="" />
        <span>HAVRE DE VERS</span>
      </NuxtLink>
      <MainMenu />
    </header>
    <Nuxt class="page" />
    <MainFooter />
    <div class="scroll-to-top" @click="scrollToTop()">&#8593;</div>
    <TransitionShape />
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
      anim: {},
    }
  },
  watch: {
    $route(to, from) {
      document.getElementById('menu-btn').checked = false
      console.log(to)
      if (to.hash === '' && Object.keys(to.query).length === 0) {
        this.animShapeTransition()
      }
      setTimeout(() => {
        window.scrollTo(0, 0)
      }, 300)
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
      const menu = document.querySelector('.main-menu')
      const menuClassList = menu.classList

      // Menu smartphones
      if (this.oldOffset < this.newOffset) {
        if (this.newOffset > menu.clientHeight) menuClassList.add('reduced')
        menuClassList.remove('sticky')
      } else if (this.oldOffset > this.newOffset) {
        menuClassList.remove('reduced')
        this.newOffset === 0
          ? menuClassList.remove('sticky')
          : menuClassList.add('sticky')
      }
      this.oldOffset = this.newOffset
    })
  },
  mounted() {
    const wrap = document.querySelector('.shape-wrap')
    const path = wrap.querySelector('path')

    this.anim = this.$anime({
      targets: path,
      duration: 1500,
      easing: 'easeInOutSine',
      d: path.getAttribute('pathdata:id'),
      autoplay: false,
      complete: (anim) => {
        wrap.classList.remove('top')
      },
    })
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, left: 1, behavior: 'smooth' })
    },
    animShapeTransition() {
      const wrap = document.querySelector('.shape-wrap')

      wrap.classList.add('top')

      setTimeout(() => {
        this.anim.play()
      }, 300)
    },
  },
}
</script>

<style lang="scss">
.main-menu {
  --shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15),
    inset 0 -1px 0 rgba(0, 0, 0, 0.15);
  --hauteur-menu: 100px;
  display: flex;
  min-height: var(--hauteur-menu);
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all 0.3s ease-in;

  &.reduced,
  &.sticky {
    box-shadow: var(--shadow);
  }

  &.reduced {
    top: -400px;

    @media (min-width: 850px) {
      top: 0;
    }
  }

  &.sticky {
    top: 0;
  }

  .title {
    background-color: var(--clr-green2);
    color: white;
    font-family: 'FRUIT PUNCH';
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    flex: 0 1 100%;
    padding: 1.5rem;

    & > * + * {
      margin-left: 1rem;
    }

    img {
      width: 55px;
    }

    @media (min-width: 850px) {
      flex: 0 0 33%;
      font-size: 2rem;
      justify-content: center;
    }

    @media (min-width: 1250px) {
      font-size: 3rem;
    }
  }

  & > div {
    background-color: var(--clr-green1);
    display: flex;
    align-items: center;

    @media (min-width: 850px) {
      flex: 0 0 67%;
      padding: 0.5rem;
    }
  }
}

.scroll-to-top {
  position: fixed;
  bottom: -100px;
  right: 10px;
  z-index: 200;
  text-align: center;
  line-height: 50px;
  height: 50px;
  width: 50px;
  background-color: var(--clr-bg-dark);
  color: white;
  box-shadow: 0 5px 5px 0px rgba(50, 50, 50, 0.5);
  transition: all 0.3s ease-in-out;

  &.show {
    bottom: 20px;
  }

  &:hover {
    cursor: pointer;
    transform: translateY(-10px);
    color: white;
    box-shadow: 0 15px 15px 0px rgba(50, 50, 50, 0.5);
  }
}
</style>
