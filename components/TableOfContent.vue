<template>
  <div v-if="!isLoading" id="toc">
    <div id="toc-title" class="toc-title">Table des matières</div>
    <nav class="js-toc" aria-labelledby="toc-title"></nav>
  </div>
</template>

<script>
import Tocbot from 'tocbot'

export default {
  props: {
    isLoading: {
      type: Boolean,
      default: true,
    },
  },
  watch: {
    isLoading(n, o) {
      this.$nextTick(() => {
        if (!n)
          Tocbot.init({
            hasInnerContainers: true,
          })
      })
    },
    $route(to, from) {
      setTimeout(() => {
        Tocbot.init({
          hasInnerContainers: true,
        })
      }, 550)
    },
  },
  mounted() {
    if (!this.isLoading)
      Tocbot.init({
        hasInnerContainers: true,
      })
  },
}
</script>

<style lang="scss">
.section-page .content {
  h2[id],
  h3[id] {
    --menu-height: 230px;
    padding-top: var(--menu-height);
    margin-top: calc(-1 * var(--menu-height));

    @media (min-width: 850px) {
      --menu-height: 110px;
    }
  }
}

.section-page .title.with-toc {
  position: sticky;
  top: 0;
}

#toc {
  position: sticky;
  top: 125px;
  padding: 2rem 1rem 1rem;
  font-size: 1.1rem;
  border: 1px solid var(--clr-font);
  border-radius: 10px;
  max-width: 300px;
  margin: auto;
}

.toc-title {
  font-size: clamp(1.1rem, 2vw, 1.6rem);
  font-weight: 700;
  margin-bottom: 1rem;
  position: absolute;
  transform: translate(0px, -50%);
  top: 0;
  padding: 0.5rem;
  background: var(--bg-color);
}

.js-toc > ol {
  li {
    margin-left: 1.5rem;

    a {
      text-decoration: none;
      font-weight: 400;
    }
  }

  .is-active-link {
    font-weight: 700;
  }

  & > li {
    list-style-type: decimal;

    & > ol > li {
      list-style-type: lower-latin;
    }
  }
}
</style>
