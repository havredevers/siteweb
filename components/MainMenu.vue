<template>
  <div>
    <input id="menu-btn" type="checkbox" />
    <label class="menu-icon" for="menu-btn">
      <span class="navicon" />
    </label>
    <ul class="menu">
      <li>
        <NuxtLink to="/">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path
              d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z"
            />
          </svg>
        </NuxtLink>
      </li>
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
  position: absolute;
  left: 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  font-size: 1.5rem;
  max-width: 850px;
  height: 0;
  overflow: hidden;
  transition: height 0.3s ease-in-out;
  background: var(--clr-bg1);
  box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.15),
    inset 0 -1px 0 rgba(0, 0, 0, 0.15);

  @media (min-width: 850px) {
    height: initial;
    position: initial;
    padding: 1rem 0;
    box-shadow: initial;
  }

  svg {
    display: none;

    @media (min-width: 850px) {
      display: inline-block;
      fill: var(--clr-primary);
      max-width: 30px;
    }
  }

  li:not(:first-child) {
    width: 100%;
    margin-left: 2.5rem;

    @media (min-width: 850px) {
      width: initial;
      margin-left: 0;
    }

    a {
      color: var(--clr-font);
      position: relative;

      &::after {
        display: block;
        content: '';
        position: absolute;
        left: 0;
        bottom: -10px;
        width: 0;
        background-color: var(--clr-primary);
        transition: all 0.3s ease-in-out;
      }

      &:hover::after,
      &.active::after {
        width: 100%;
        height: 5px;
      }
    }
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
  --clr-hamburger: var(--clr-primary);
  cursor: url('~assets/img/cursor-hover.png'), auto;
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
  top: 0.5rem;

  @media (min-width: 550px) {
    top: 1rem;
  }

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
