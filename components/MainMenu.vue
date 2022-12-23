<template>
  <div>
    <input id="menu-btn" type="checkbox" />
    <label class="menu-icon" for="menu-btn">
      <span class="navicon" />
    </label>
    <ul v-if="!$apollo.queries.menuItems.loading" class="menu">
      <li v-for="menuItem in menuItems" :key="menuItem.id">
        <span v-if="menuItem.path !== '/prestations/'">
          <NuxtLink :to="menuItem.path"> {{ menuItem.label }} </NuxtLink>
        </span>
        <div v-else>
          <a
            :class="$route.name == 'prestations' ? 'active' : ''"
            @click="ToggleDropdown($event)"
            >Prestations</a
          >
          <ul class="dropdown">
            <li v-for="prestation in prestations" :key="prestation.slug">
              <NuxtLink :to="'/prestations/#' + prestation.slug">
                {{ prestation.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { PRESTAS, GET_MENU } from '@/apollo/queries'

export default {
  apollo: {
    menuItems: {
      query: GET_MENU,
      update(data) {
        return data.menus.nodes[0].menuItems.edges.map((el) => el.node)
      },
    },
    prestations: {
      query: PRESTAS,
      update(data) {
        return data.prestations.nodes.sort((a, b) =>
          a.title.localeCompare(b.title)
        )
      },
    },
  },
  methods: {
    ToggleDropdown(e) {
      e.target.nextElementSibling.classList.toggle('open')
    },
  },
}
</script>

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
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  z-index: 50;
  box-shadow: var(--shadow);

  li {
    padding-bottom: 1.5rem;
    padding-right: 1.5rem;
  }

  & > li {
    margin-left: 3%;
    position: relative;

    a {
      text-decoration: none;
      color: var(--menu-font-color);
      text-transform: uppercase;
      font-weight: bold;
      position: relative;
      max-width: 100%;
      display: inline-block;

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

      &:hover {
        cursor: pointer;
      }
    }

    ul {
      top: 4rem;
      background: var(--clr-green3);
      width: 100%;
    }
  }

  .dropdown {
    --menu-font-color: white;
    max-height: 0;
    overflow: hidden;
    transition: all 0.3s ease-in-out;
    position: relative;
    top: 1rem;
    font-size: 0.8rem;

    &.open {
      max-height: 500px;
      padding-top: 1rem;
    }

    li {
      padding-left: 1rem;

      a {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }

    @media (min-width: 850px) {
      position: absolute;
      top: 4rem;
      width: 300px;
      font-size: 1rem;
    }
  }

  @media (min-width: 850px) {
    position: initial;
    max-height: initial;
    flex-direction: row;
    overflow: initial;
    box-shadow: initial;

    & > li {
      padding: 0;
      &:first-child {
        margin-left: 0;
      }
    }
  }
}

#menu-btn {
  display: none;

  @media (max-width: 849px) {
    &:checked {
      & ~ .menu {
        max-height: 500px;
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
