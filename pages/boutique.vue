<template>
  <div class="boutique">
    <div class="carousel">
      <div class="page-header">
        <div class="carousel-img">
          <nuxt-img
            format="png"
            src="/carousel/boutique.png"
            alt=""
            width="1200"
            height="815"
          />
        </div>
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
        <p>
          Nous ne disposons pas encore de boutique en ligne. Mais ça ne devrait
          pas tarder ! Les vers de terre n'ont pas encore fini les galeries pour
          y accéder...!
        </p>
        <nuxt-img
          src="/boutique/fruits_seches.jpg"
          style="
            max-width: 100%;
            width: 500px;
            display: block;
            margin: auto;
            border-radius: 40px;
          "
        />
        <div class="loader">
          <nuxt-img src="/loader/loader.gif" alt="chargement" />
        </div>
      </div>
      <HomeWave :colors="['#e3ad89', '#f4dbc9']" />
    </section>
  </div>
</template>

<script>
import meta from '~/plugins/meta'

export default {
  mixins: [meta],
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
  .loader {
    height: 150px;
    overflow: hidden;
    text-align: center;
  }

  p {
    margin-bottom: 2rem;
  }
}
</style>
