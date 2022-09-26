<template>
  <div>
    <header class="main-menu">
      <NuxtLink to="/" class="title">
        <img src="/ui/pomme-blanc.png" alt="" />
        <span>HAVRE DE VERS</span>
      </NuxtLink>
      <MainMenu />
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
  --hauteur-menu: 100px;
  display: flex;
  min-height: var(--hauteur-menu);
  z-index: 100;

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

  &.reduced {
    position: relative;
    top: -100px;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15),
      inset 0 -1px 0 rgba(0, 0, 0, 0.15);

    @media (min-width: 850px) {
      position: sticky;
      top: 0;
    }

    &.sticky {
      transition: all 0.3s ease-in-out;
      top: 0;
    }
  }

  &.sticky {
    position: sticky;
    top: 0;
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
