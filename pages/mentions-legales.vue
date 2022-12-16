<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="mentions">
    <div class="carousel">
      <div class="page-header">
        <div
          class="carousel-img"
          :style="
            'background-image: url(' +
            page?.featuredImage.node.mediaItemUrl +
            ')'
          "
        ></div>
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
.mentions {
  .wp-block-group + .wp-block-group {
    padding-top: 2rem;
    border-top: 1px solid #c5af9f;
    margin-top: 2rem;
  }

  h2 {
    font-family: var(--font-changa);
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
  }

  .contact {
    li {
      list-style: disc;
      margin-left: 1rem;
    }
  }
}
</style>
