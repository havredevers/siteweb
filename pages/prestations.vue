<template>
  <div class="prestations">
    <div class="carousel">
      <div class="page-header">
        <div class="carousel-img">
          <nuxt-img format="webp" src="/carousel/prestations.png" alt="" />
        </div>
        <div class="carousel-title">
          <h1>Nos prestations</h1>
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
    <section
      v-for="(presta, index) in prestations"
      :key="presta.slug"
      class="section section-page"
    >
      <span :id="presta.slug" class="ancre"></span>
      <div class="title">
        <h2>
          {{ presta.title }}
        </h2>
        <p>{{ 'A partir de ' + presta.prix + '€' }}</p>
        <a class="protect cta" data-protect="havredeversarobasgmailpointcom">
          Demandez un devis
        </a>
      </div>
      <div class="content">
        <div class="desc">{{ presta.description }}</div>
        <nuxt-content :document="presta" />
      </div>
      <HomeWave :colors="waveColors(index)" />
    </section>
  </div>
</template>

<script>
import 'aos/dist/aos.css'

export default {
  async asyncData({ $content, $variables, route }) {
    const prestations = await $content('prestas')
      // .without(['body'])
      .sortBy('title')
      .fetch()

    return { prestations }
  },
  mounted() {
    const $this = this
    window.onload = function () {
      if ($this.$route.hash)
        window.scrollTo({
          top: document.querySelector('#' + this.$route.hash).offsetTop,
          left: 1,
          behavior: 'smooth',
        })
    }
  },
  methods: {
    waveColors(i) {
      return i % 2 !== 0 ? ['#ead0a3', '#f7e9d4'] : ['#e3ad89', '#f4dbc9']
    },
  },
}
</script>

<style lang="scss">
.prestations {
  h2 {
    font-family: var(--font-changa);
    font-size: clamp(1.5rem, 3.5vw, 4rem);
    hyphens: auto;
    margin-bottom: 3vw;
  }

  h3 {
    font-size: clamp(1.5rem, 2.5vw, 2.5rem);

    &:not(:first-child) {
      margin-top: 2rem;
    }
  }

  li {
    list-style: initial;
    margin-left: 1.5rem;
  }

  .title {
    p {
      font-weight: bold;
      font-size: clamp(1rem, 2vw, 2rem);
      margin-bottom: 0.5rem;
    }

    .cta {
      margin: 0 auto;

      @media (min-width: 850px) {
        margin: 0;
      }
    }
  }

  .content {
    font-size: clamp(1rem, 1.5vw, 1.4rem);

    img {
      display: block;
      width: 100%;
      border-radius: 15px;
      margin: 2rem auto;
    }
  }

  .nuxt-content > * {
    margin-bottom: 2rem;
  }
}
</style>
