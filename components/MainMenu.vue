<template>
  <div>
    <input id="menu-btn" type="checkbox" />
    <label class="menu-icon" for="menu-btn">
      <span class="navicon" />
    </label>
    <ul class="menu">
      <li><NuxtLink to="/">Accueil</NuxtLink></li>
      <li><NuxtLink to="/association">L'association</NuxtLink></li>
      <li><NuxtLink to="/prestations">Prestations</NuxtLink></li>
      <li><NuxtLink to="/blog">Blog</NuxtLink></li>
      <li><NuxtLink to="/adherer">Adhérer</NuxtLink></li>
      <li><NuxtLink to="/boutique">Boutique</NuxtLink></li>
    </ul>
  </div>
</template>

<style lang="scss">
#menu-btn {
  display: none;

  &:checked {
    & ~ .menu {
      height: 300px;
    }

    & ~ .menu-icon .navicon {
      background: transparent;

      &::after,
      &::before {
        top: 0;
      }

      &::before {
        transform: rotate(-45deg);
      }

      &::after {
        transform: rotate(45deg);
      }
    }
  }
}

.menu-icon {
  --clr-hamburger: var(--clr-primary);
  cursor: pointer;
  user-select: none;
  display: flex;
  width: 45px;
  height: 45px;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--clr-hamburger);
  border-radius: 10%;
  right: 1rem;
  position: fixed;
  top: 2.5rem;

  @media (min-width: 850px) {
    display: none;
  }
}

.navicon {
  background: var(--clr-hamburger);
  display: block;
  height: 2px;
  width: 18px;
  position: relative;

  &:before,
  &:after {
    background: var(--clr-hamburger);
    display: block;
    width: 100%;
    height: 100%;
    content: '';
    position: absolute;
    transition: all 0.2s ease-out;
  }

  &::before {
    top: 5px;
  }

  &::after {
    top: -5px;
  }
}

.menu {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem 2rem;
  padding: 1rem 2rem 0;
  margin: 0 auto;
  font-size: 1.5rem;
  max-width: 850px;
  height: 0;
  overflow: hidden;
  transition: height 0.3s ease-in-out;

  @media (min-width: 850px) {
    height: initial;
    overflow: initial;
  }

  li {
    list-style-type: none;
    width: 100%;
    @media (min-width: 850px) {
      width: initial;
    }

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
