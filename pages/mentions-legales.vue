<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="mentions">
    <div class="carousel">
      <div class="page-header">
        <div class="carousel-img" :style="imgHeader"></div>
        <div class="carousel-title">
          <h1>Mentions légales</h1>
          <p v-if="!$apollo.queries.page.loading">
            {{ page?.extrait }}
          </p>
        </div>
      </div>
    </div>
    <section class="section-page">
      <span id="association" class="ancre"></span>
      <div class="title with-toc">
        <TableOfContent :is-loading="$apollo.queries.page.loading" />
      </div>
      <div class="content lead">
        <LoaderApple v-if="$apollo.queries.page.loading" />
        <div v-else-if="error != ''">{{ error }}</div>
        <div
          v-else
          class="js-toc-content lead wp-api"
          v-html="page?.content"
        ></div>
      </div>
      <HomeWave :colors="['var(--clr-content2)', 'var(--clr-content1)']" />
    </section>
  </div>
</template>

<script>
import meta from '~/plugins/meta'
import mixinApollo from '~/plugins/mixinApollo'

export default {
  mixins: [meta, mixinApollo],
  data() {
    return {
      titre: 'Mentions légales',
      desc: 'Havre de Vers respecte votre privée et vos données personnelles',
      image: '',
    }
  },
}
</script>

<style lang="scss">
body {
  counter-reset: h2counter;
}

.liberapay-btn {
  background-color: #f6c915;
  border-radius: 4px;
  color: #1a171b;
  display: inline-block;
  font-family: Helvetica Neue, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  padding: 5px 7px 3px;
  position: relative;
  text-decoration: none;

  &:hover {
    background-color: #fbce1a;
  }

  & > svg {
    position: absolute;
    left: 7px;
    top: 7px;
  }

  & > span {
    margin-left: 19px;
  }
}

.mentions {
  & .wp-api > div + div {
    padding-top: 2rem;
    border-top: 1px solid #c5af9f;
    margin-top: 2rem;
  }

  h1 {
    counter-reset: h2counter;
  }

  h2 {
    counter-reset: h3counter;

    &::before {
      content: counter(h2counter) '.\0000a0\0000a0';
      counter-increment: h2counter;
    }
  }

  h3:before {
    content: counter(h2counter) '.' counter(h3counter) '.\0000a0\0000a0';
    counter-increment: h3counter;
  }

  h2,
  h3 {
    font-family: var(--font-changa);
    margin-bottom: 1rem;
  }

  h4 {
    font-style: italic;

    &::before {
      content: '- ';
    }
  }

  p,
  h4 {
    margin-bottom: 1rem;
  }

  .content li {
    list-style: disc;
    margin: 0 0 1rem 1rem;
  }
}
</style>
