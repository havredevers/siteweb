<template>
  <div>
    <h1>HAVRE <img src="~/assets/img/logo.png" alt="" /> DE VERS</h1>
    <MainMenu />
    <Nuxt />
  </div>
</template>

<style lang="scss" scoped>
h1 {
  color: var(--clr-primary);
  font-family: 'FRUIT PUNCH';
  font-size: 4rem;
  margin: 2rem 0;
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
