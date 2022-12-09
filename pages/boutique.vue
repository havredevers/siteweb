<template>
  <div class="boutique">
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
          <h1>La boutique</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
            architecto laudantium
          </p>
          <a class="protect cta" data-protect="havredeversarobasgmailpointcom">
            Contactez-nous
          </a>
        </div>
      </div>
    </div>
    <section class="section-page">
      <div class="title">
        <h2>La boutique</h2>
      </div>
      <div class="content">
        <div v-if="$apollo.queries.page.loading" class="loader">
          <img src="~/assets/img/ui/loader.gif" alt="chargement" />
        </div>
        <div v-else-if="error != ''">{{ error }}</div>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div v-else class="lead wp-api" v-html="page?.content"></div>
      </div>
      <HomeWave :colors="['#e3ad89', '#f4dbc9']" />
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
      titre: 'La boutique',
      desc: "Notre boutique n'est pas encore prête. Les vers de terre n'ont pas encore fini les galeries pour y accéder...!",
      image: '',
    }
  },
}
</script>

<style lang="scss">
.boutique {
  p {
    margin-bottom: 2rem;
  }
}
</style>
