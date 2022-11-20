<template>
  <nav v-if="nbPages > 1" class="pagination" aria-label="Pagination">
    <ul>
      <li v-if="currentPage > 2 && nbPages > 3">
        <a href="/blog/?page=1" aria-label="Retour au début">&lt;&lt;</a>
      </li>
      <li v-if="currentPage > 3 && nbPages > 4">
        <span aria-hidden="true">...</span>
      </li>
      <li v-for="i in pagesDisplayed" :key="i">
        <NuxtLink v-if="i != currentPage" :to="'/blog/?page=' + i">
          {{ i }}
        </NuxtLink>
        <span v-else class="actif">{{ i }}</span>
      </li>
      <li v-if="currentPage < nbPages - 2 && nbPages > 4">
        <span aria-hidden="true">...</span>
      </li>
      <li v-if="currentPage < nbPages - 1 && nbPages > 3">
        <a :href="'/blog/?page=' + nbPages" aria-label="Aller à la fin">
          &gt;&gt;
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      default: 1,
    },
    nbPages: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    pagesDisplayed() {
      if (this.nbPages < 3) {
        return [1, 2]
      }

      if (this.currentPage === 1) {
        return [1, 2, 3]
      }

      if (this.currentPage === this.nbPages) {
        return [this.nbPages - 2, this.nbPages - 1, this.nbPages]
      }

      return [this.currentPage - 1, this.currentPage, this.currentPage + 1]
    },
  },
}
</script>

<style lang="scss">
.pagination {
  --radius: 10px;
  user-select: none;
  font-weight: bold;

  ul {
    display: flex;
    justify-content: center;

    li {
      & > * {
        border: 1px solid var(--clr-font);
        display: block;
        padding: 1rem;
        background-color: var(--clr-green1);
        transition: all 0.3s ease-in-out;

        &:not(.actif):hover {
          transform: scale(1.1);
          box-shadow: var(--shadow);
          background-color: var(--clr-green3);
          color: white;
        }
      }

      &:first-child > * {
        border-top-left-radius: var(--radius);
        border-bottom-left-radius: var(--radius);
      }

      &:last-child > * {
        border-top-right-radius: var(--radius);
        border-bottom-right-radius: var(--radius);
      }

      &:not(:first-child) > * {
        margin-left: -1px;
      }

      a {
        color: var(--clr-font);
        text-decoration: none;
      }

      span {
        cursor: not-allowed;

        &.actif {
          color: white;
          background: var(--clr-green2);
        }
      }
    }
  }
}
</style>
