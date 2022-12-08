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
        <p>
          Nous ne disposons pas encore de boutique en ligne. Mais ça ne devrait
          pas tarder ! Les vers de terre n'ont pas encore fini les galeries pour
          y accéder...!
        </p>
        <img
          src="~/assets/img/pages/boutique/fruits_seches.jpg"
          alt=""
          class="vignette"
        />
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
  .carousel-img {
    background-image: url('~/assets/img/pages/boutique/local.png');
  }

  p {
    margin-bottom: 2rem;
  }
}
</style>
