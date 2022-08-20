<template>
  <div class="container">
    <div class="loader show">
      <CustomImage src="/loader/loader.gif" alt="Chargement" />
      <div class="visually-hidden">Chargement...</div>
    </div>
    <header class="main-menu">
      <NuxtLink to="/">
        <h1>
          HAVRE
          <CustomImage src="/ui/logo-vert.png" alt="" />
          DE VERS
        </h1>
      </NuxtLink>
      <MainMenu />
    </header>
    <Nuxt />
    <MainFooter />
    <div class="scroll-to-top" @click="scrollToTop()">&#8593;</div>
  </div>
</template>

<script>
export default {
  watch: {
    $route() {
      document.getElementById('menu-btn').checked = false
      const loader = document.querySelector('.loader')
      loader.style.display = 'flex'
      loader.classList.add('show')
      this.$handleImagesLoad()
    },
  },
  beforeMount() {
    window.addEventListener('scroll', () => {
      const btnClassList = document.querySelector('.scroll-to-top').classList
      const isVisible = btnClassList.contains('show')
      !isVisible && window.scrollY > 250
        ? btnClassList.add('show')
        : isVisible && window.scrollY <= 250 && btnClassList.remove('show')
    })
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0)
    },
  },
}
</script>

<style lang="scss">
.loader {
  position: fixed;
  top: -100vh;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: var(--clr-bg);
  z-index: 200;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  opacity: 0;
  transition: all 0.3s ease-in-out;

  &.show {
    opacity: 1;
    top: 0;
  }
}

.container {
  max-width: 1920px;
  position: relative;
}

.main-menu {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--clr-bg);
  padding: 1rem 0 0.5rem;
}

h1 {
  color: var(--clr-primary);
  font-family: 'FRUIT PUNCH';
  font-size: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  column-gap: 0.5rem;
  padding-right: 75px;
  padding-left: 35px;

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
    column-gap: 1.5rem;
  }

  img {
    max-width: 45px;

    @media (min-width: 850px) {
      max-width: 75px;
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
  background-color: var(--clr-primary);
  color: white;
  box-shadow: 0 0 14px -5px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease-in-out;

  &.show {
    bottom: 20px;
  }

  &:hover {
    cursor: url('~assets/img/cursor-hover.png'), auto;
    transform: translateY(-10px);
  }
}
</style>
