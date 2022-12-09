<template>
  <div class="prestations">
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
          <h1>Nos prestations</h1>
          <p v-if="!$apollo.queries.page.loading">
            {{ page?.extrait }}
          </p>
          <a class="protect cta" data-protect="havredeversarobasgmailpointcom">
            Contactez-nous
          </a>
        </div>
      </div>
    </div>
    <div v-if="$apollo.queries.prestations.loading" class="loader">
      <img src="~/assets/img/loader.gif" alt="chargement" />
    </div>
    <div v-else-if="error != ''">{{ error }}</div>
    <div v-else>
      <div></div>
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
          <div class="lead" data-aos="fade-up">{{ presta.description }}</div>
          <div class="details">
            <img
              :src="presta.miniature.mediaItemUrl"
              :alt="presta.miniature.altText"
              data-aos="zoom-in"
            />
            <div v-if="presta.principe" data-aos="fade-up">
              <h3>Le principe</h3>
              <div v-sanitize-html="presta.principe" class="bloc" />
            </div>
            <div v-if="presta.lieux" data-aos="fade-up">
              <h3>Lieux de sortie</h3>
              <div v-sanitize-html="presta.lieux" class="bloc" />
            </div>
            <div class="infos">
              <div v-if="presta.programme" data-aos="fade-up">
                <h3>Le programme</h3>
                <div v-sanitize-html="presta.programme" class="bloc" />
              </div>
              <div v-if="presta.equipement" data-aos="fade-up">
                <h3>Équipement nécessaire</h3>
                <div v-sanitize-html="presta.equipement" class="bloc" />
              </div>
            </div>
          </div>
        </div>
        <HomeWave :colors="waveColors(index)" />
      </section>
    </div>
  </div>
</template>

<script>
import meta from '~/plugins/meta'
import mixinApollo from '~/plugins/mixinApollo'
import { PRESTAS } from '@/apollo/queries'

export default {
  mixins: [meta, mixinApollo],
  data() {
    return {
      titre: 'Nos prestations',
      desc: "Venez découvrir les ateliers proposés par l'association pour apprendre tout en s'amusant",
      image: '',
    }
  },
  apollo: {
    prestations: {
      query: PRESTAS,
      prefetch: false,
      update(data) {
        return data.prestations.nodes.sort((a, b) => {
          return a.title.toLowerCase() > b.title.toLowerCase()
        })
      },
      error(err) {
        this.error = err.message
      },
      watchLoading(isLoading, countModifier) {
        if (!isLoading && this.$route.hash)
          document.querySelector(this.$route.hash).scrollIntoView()
      },
    },
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
  }

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

  .lead {
    text-align: center;
    margin-bottom: 1.5rem;
  }

  .bloc > div {
    div + div {
      margin-top: 1rem;
    }
  }

  .content {
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
    flex: 1 0 50%;
  }

  @media (min-width: 1200px) {
    .content img {
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
