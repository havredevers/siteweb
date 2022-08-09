<template>
  <ul class="menu">
    <li><NuxtLink to="/">Accueil</NuxtLink></li>
    <li><NuxtLink to="/association">L'association</NuxtLink></li>
    <li><NuxtLink to="/prestations">Prestations</NuxtLink></li>
    <li><NuxtLink to="/blog">Blog</NuxtLink></li>
    <li><NuxtLink to="/adherer">Adhérer</NuxtLink></li>
    <li><NuxtLink to="/boutique">Boutique</NuxtLink></li>
  </ul>
</template>

<style lang="scss">
.menu {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem 2rem;
  padding: 0;
  margin: 0 auto 2rem;
  font-size: 1.5rem;
  max-width: 850px;

  li {
    list-style-type: none;

    a {
      color: var(--clr-font);
      text-decoration: none;
      position: relative;

      &::after {
        display: block;
        content: '';
        position: absolute;
        left: 0;
        bottom: -3px;
        width: 0;
        background-color: var(--clr-primary);
        transition: all 0.3s ease-in-out;
      }

      &:hover::after,
      &.active::after {
        // border-bottom: 1px solid var(--clr-primary);
        width: 100%;
        height: 2px;
      }
    }
  }
}
</style>
