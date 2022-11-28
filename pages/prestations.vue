<template>
  <div class="prestations">
    <div class="carousel">
      <div class="page-header">
        <div class="carousel-img">
          <nuxt-img
            format="png"
            src="/carousel/prestations.png"
            alt=""
            width="1200"
            height="815"
          />
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
      class="section-page"
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
import meta from '~/plugins/meta'
import 'aos/dist/aos.css'

export default {
  mixins: [meta],

  async asyncData({ $content, $variables, route }) {
    const prestations = await $content('prestas').sortBy('title').fetch()

    return { prestations }
  },
  data() {
    return {
      titre: 'Nos prestations',
      desc: "Venez découvrir les ateliers proposés par l'association pour apprendre tout en s'amusant",
      image: '',
    }
  },
  mounted() {
    const $this = this

    Promise.all(
      Array.from(document.images)
        .filter((img) => !img.complete)
        .map(
          (img) =>
            new Promise((resolve) => {
              img.onload = img.onerror = resolve
            })
        )
    ).then(() => {
      if ($this.$route.hash)
        document.querySelector(this.$route.hash).scrollIntoView()
    })
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
  h3 {
    font-size: clamp(1.5rem, 2.5vw, 2.5rem);
    margin: 1rem 0;
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

  .nuxt-content {
    p,
    ul {
      margin-bottom: 1.5rem;
    }

    img {
      border-radius: 15px;
      width: 100%;
      margin-bottom: 1rem;
    }
  }

  .infos > * {
    margin-bottom: 2rem;
    flex: 0 0 50%;
  }

  @media (min-width: 1200px) {
    .nuxt-content img {
      float: right;
      width: 45%;
      margin: 0 0 1rem 1rem;
    }

    .infos {
      display: flex;

      & > * {
        margin: 0 1rem 0 0;
      }
    }
  }
}
</style>
