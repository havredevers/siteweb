<template>
  <div class="container">
    <header class="main-menu">
      <h1>HAVRE <img src="~/assets/img/logo-vert.png" alt="" /> DE VERS</h1>
      <MainMenu />
    </header>
    <Nuxt />
    <MainFooter />
  </div>
</template>

<script>
export default {
  watch: {
    $route(to, from) {
      document.getElementById('menu-btn').checked = false
    },
  },
}
</script>

<style lang="scss">
.container {
  max-width: 1920px;
}

.main-menu {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--clr-bg);
  padding: 2rem 0 1rem;
}

h1 {
  color: var(--clr-primary);
  font-family: 'FRUIT PUNCH';
  font-size: 2rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  column-gap: 0.5rem;
  padding-right: 75px;
  padding-left: 35px;

  @media (min-width: 550px) {
    font-size: 3rem;
  }

  @media (min-width: 850px) {
    justify-content: center;
    padding-right: 0;
    margin: 0 0 1rem;
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
</style>
