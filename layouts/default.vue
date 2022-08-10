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
  font-size: 4rem;
  margin: 0 0 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  column-gap: 2rem;

  img {
    max-width: 75px;
  }
}
</style>
