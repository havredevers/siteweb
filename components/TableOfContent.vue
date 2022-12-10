<template>
  <div id="toc">
    <div class="toc-title">Table des matières</div>
    <div class="js-toc"></div>
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
  mounted() {
    Tocbot.init()
  },
}
</script>

<style lang="scss">
#toc {
  position: sticky;
  top: 115px;
  padding-top: 2rem;
  font-size: 1.1rem;
}

.toc-title {
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.js-toc > ol {
  li {
    margin-left: 1rem;

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
