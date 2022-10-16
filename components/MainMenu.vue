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
  background-color: var(--bg-menu);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-grow: 1;
  font-size: clamp(1rem, 2vw, 1.5rem);
  position: absolute;
  top: var(--hauteur-menu);
  left: 0;
  width: 100%;
  height: 0;
  overflow: hidden;
  transition: height 0.3s ease-in-out;
  z-index: 50;
  box-shadow: var(--shadow);

  li {
    margin-left: 3%;

    a {
      color: var(--menu-font-color);
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
        background-color: var(--menu-font-color);
        transition: all 0.3s ease-in-out;
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
    box-shadow: initial;

    li:first-child {
      margin-left: 0;
    }
  }
}

#menu-btn {
  display: none;

  @media (max-width: 850px) {
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
  --clr-hamburger: var(--menu-font-color);
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
  z-index: 75;

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
