<template>
  <div>
    <input id="menu-btn" type="checkbox" />
    <label class="menu-icon" for="menu-btn">
      <span class="navicon" />
    </label>
    <ul class="menu">
      <li><NuxtLink to="/association">L'association</NuxtLink></li>
      <li><NuxtLink to="/prestations">Prestations</NuxtLink></li>
      <li><NuxtLink to="/blog">Blog</NuxtLink></li>
      <li><NuxtLink to="/adherer">Adhérer</NuxtLink></li>
      <li><NuxtLink to="/boutique">Boutique</NuxtLink></li>
    </ul>
  </div>
</template>

<style lang="scss">
.menu {
  background-color: var(--clr-green1);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-grow: 1;
  font-size: 1rem;
  position: absolute;
  top: var(--hauteur-menu);
  left: 0;
  width: 100%;
  height: 0;
  overflow: hidden;
  transition: height 0.3s ease-in-out;
  z-index: 50;

  li {
    margin-left: 3%;

    a {
      color: var(--clr-font);
      text-transform: uppercase;
      font-weight: bold;
      position: relative;

      &::after {
        display: block;
        content: '';
        position: absolute;
        left: 0;
        bottom: -10px;
        width: 0;
        background-color: var(--clr-green3);
        transition: all 0.3s ease-in-out;
      }

      &.active {
        color: var(--clr-green3);
      }

      &:hover::after,
      &.active::after {
        width: 100%;
        height: 5px;
      }
    }
  }

  @media (min-width: 850px) {
    position: initial;
    height: initial;
    flex-direction: row;
    overflow: initial;
  }

  @media (min-width: 1200px) {
    font-size: 1.5rem;
  }
}

#menu-btn {
  display: none;

  @media (max-width: 849px) {
    &:checked {
      & ~ .menu {
        height: 300px;
        width: 100%;
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
}

.menu-icon {
  --clr-hamburger: white;
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
  position: absolute;
  top: 1.5rem;

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
</style>
