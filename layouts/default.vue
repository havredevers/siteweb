<template>
  <div class="app">
    <header class="main-menu">
      <NuxtLink to="/" class="title">
        <img src="~/assets/img/pomme-marron.png" alt="" />
        <span>HAVRE DE VERS</span>
      </NuxtLink>
      <MainMenu />
    </header>
    <Nuxt class="page" keep-alive />
    <MainFooter />
    <ImageModal />
    <div class="scroll-to-top" @click="scrollToTop()">&#8593;</div>
    <TransitionShape />
  </div>
</template>

<script>
export default {
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
      document.querySelectorAll('.menu .dropdown').forEach((el) => {
        el.classList.remove('open')
      })

      if (to.name !== from.name) {
        this.animShapeTransition()
      }

      setTimeout(() => {
        this.resetPage()
      }, 800)
    },
  },
  beforeMount() {
    window.addEventListener('scroll', () => {
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
      duration: 1200,
      easing: 'easeInOutSine',
      d: path.getAttribute('pathdata:id'),
      autoplay: false,
      complete: (anim) => {
        wrap.classList.remove('top')
      },
    })

    this.resetPage()
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, left: 1, behavior: 'smooth' })
    },
    animShapeTransition() {
      const wrap = document.querySelector('.shape-wrap')

      wrap.classList.add('top')

      setTimeout(() => {
        document.querySelector('html').style.scrollBehavior = 'auto'
        window.scrollTo({ top: 0, left: 1 })
        document.querySelector('html').style.scrollBehavior = 'smooth'

        this.anim.play()
      }, 50)
    },
    launchTarteAuCitron() {
      /* eslint-disable no-undef */
      tarteaucitron.init({
        privacyUrl:
          '/mentions-legales/#politique-confidentialite' /* Privacy policy url */,
        bodyPosition:
          'top' /* or top to bring it as first element for accessibility */,

        hashtag: '#tarteaucitron' /* Open the panel with this hashtag */,
        cookieName: 'tarteaucitron' /* Cookie name */,

        orientation: 'bottom' /* Banner position (top - bottom) */,

        groupServices: false /* Group services by category */,
        serviceDefaultState: 'wait' /* Default state (true - wait - false) */,

        showAlertSmall: false /* Show the small banner on bottom right */,
        cookieslist: true /* Show the cookie list */,

        closePopup: false /* Show a close X on the banner */,

        showIcon: true /* Show cookie icon to manage cookies */,
        iconSrc: require('~/assets/img/cookie.png') /* Optionnal: URL or base64 encoded image */,
        iconPosition:
          'BottomLeft' /* BottomRight, BottomLeft, TopRight and TopLeft */,

        adblocker: false /* Show a Warning if an adblocker is detected */,

        DenyAllCta: true /* Show the deny all button */,
        AcceptAllCta: true /* Show the accept all button when highPrivacy on */,
        highPrivacy: true /* HIGHLY RECOMMANDED Disable auto consent */,

        handleBrowserDNTRequest: true /* If Do Not Track == 1, disallow all */,

        removeCredit: true /* Remove credit link */,
        moreInfoLink: true /* Show more info link */,

        useExternalCss: false /* If false, the tarteaucitron.css file will be loaded */,
        useExternalJs: false /* If false, the tarteaucitron.js file will be loaded */,

        // "cookieDomain": ".my-multisite-domaine.fr", /* Shared cookie for multisite */

        readmoreLink: '' /* Change the default readmore link */,

        mandatory: false /* Show a message about mandatory cookies */,
        mandatoryCta: false /* Show the disabled accept button when mandatory on */,
      })

      // Services utilisés
      ;(tarteaucitron.job = tarteaucitron.job || []).push('helloasso')
    },
    resetPage() {
      this.launchTarteAuCitron()
      this.$secureMail()
      this.$linkImages()
    },
  },
}
</script>

<style lang="scss">
.app {
  --bg-menu: var(--clr-primary);
  --shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15),
    inset 0 -1px 0 rgba(0, 0, 0, 0.15);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.page {
  display: flex;
  flex-direction: column;
  transition-duration: 0.5s;
  flex: 1 1 100%;

  &:not(.accueil) {
    h1 {
      font-size: clamp(1.7rem, 3.5vw, 2.5rem);
      margin-bottom: 1rem;
    }

    .carousel-title p {
      font-size: clamp(1rem, 1.5vw, 1.25rem);
      font-family: var(--font-sans-serif);
    }
  }

  &-header {
    display: flex;
    flex-direction: column;
    height: 100%;
    position: absolute;
    inset: 0;
  }

  @media (min-width: 850px) {
    &-header {
      flex-direction: row;
    }
  }
}

.main-menu {
  --menu-font-color: var(--clr-font);
  --hauteur-menu: 100px;
  display: flex;
  min-height: var(--hauteur-menu);
  position: sticky;
  top: 0;
  z-index: 1100;
  transition: top 0.3s ease-in;

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
    text-decoration: none;
    background-color: var(--bg-menu);
    color: var(--menu-font-color);
    font-family: 'FRUIT PUNCH';
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    flex: 0 1 100%;
    padding: 1.5rem;
    z-index: 60;

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
    background-color: var(--bg-menu);
    display: flex;
    align-items: center;

    @media (min-width: 850px) {
      flex: 0 0 67%;
      padding: 1rem;
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
