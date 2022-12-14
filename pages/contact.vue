<template>
  <div class="contact">
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
          <h1>Contact</h1>
          <p v-if="!$apollo.queries.page.loading">
            {{ page?.extrait }}
          </p>
        </div>
      </div>
    </div>
    <section class="section-page">
      <div class="title">
        <h2>Formulaire de contact</h2>
      </div>
      <div class="content"><ContactForm /></div>
      <HomeWave :colors="['#e3ad89', '#f4dbc9']" />
    </section>
    <section class="section-page">
      <div class="title">
        <h2>Nos coordonnées</h2>
      </div>
      <div class="content">
        <LoaderApple v-if="$apollo.queries.page.loading" />
        <div v-else-if="error != ''">{{ error }}</div>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div v-else class="wp-api" v-html="page?.content"></div>
      </div>
      <HomeWave :colors="['#ead0a3', '#f7e9d4']" />
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
      titre: 'Contactez-nous',
      desc: "N'hésitez pas à nous contacter",
      image: '',
    }
  },
}
</script>
