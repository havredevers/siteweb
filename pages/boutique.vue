<template>
  <div class="boutique">
    <div class="carousel">
      <div class="page-header">
        <div class="carousel-img"></div>
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
        <div v-if="$apollo.queries.boutique.loading" class="loader">
          <img src="~/assets/img/ui/loader.gif" alt="chargement" />
        </div>
        <div v-else-if="error != ''">{{ error }}</div>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div v-else class="lead wp-api" v-html="boutique"></div>
      </div>
      <HomeWave :colors="['#e3ad89', '#f4dbc9']" />
    </section>
  </div>
</template>

<script>
import meta from '~/plugins/meta'
import { GET_PAGE } from '@/apollo/queries'

export default {
  mixins: [meta],
  data() {
    return {
      error: '',
      titre: 'La boutique',
      desc: "Notre boutique n'est pas encore prête. Les vers de terre n'ont pas encore fini les galeries pour y accéder...!",
      image: '',
    }
  },
  apollo: {
    boutique: {
      query: GET_PAGE,
      variables() {
        return { id: 'boutique' }
      },
      update(data) {
        return data.page.content
      },
      error(err) {
        this.error = err.message
      },
    },
  },
  watch: {
    boutique(n, o) {
      if (n !== o) {
        this.aosTrigger()
      }
    },
  },
}
</script>

<style lang="scss">
.boutique {
  .carousel-img {
    background-image: url('~/assets/img/pages/boutique/local.png');
  }

  p {
    margin-bottom: 2rem;
  }
}
</style>
