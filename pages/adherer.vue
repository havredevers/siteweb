<template>
  <div class="adherer">
    <div class="carousel">
      <div class="page-header">
        <div class="carousel-img" :style="'background:' + imgHeader"></div>
        <div class="carousel-title">
          <h1>Adhérer à l'association</h1>
          <p v-if="!$apollo.queries.page.loading">
            {{ page?.extrait }}
          </p>
          <NuxtLink class="cta" to="/contact">Contactez-nous</NuxtLink>
        </div>
      </div>
    </div>
    <section class="section-page">
      <div class="title">
        <h2>Nous <br />rejoindre</h2>
      </div>
      <div class="content">
        <LoaderApple v-if="$apollo.queries.page.loading" />
        <div v-else-if="error != ''">{{ error }}</div>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div v-else class="lead wp-api" v-html="page?.content"></div>
        <div class="choix">
          <span id="proximite" class="ancre"></span>
          <span id="soutien" class="ancre"></span>
          <button
            class="cta"
            :class="{ actif: choix == 'proximite' }"
            data-adhesion="proximite"
            @click="setChoix($event.target.dataset.adhesion)"
          >
            Adhésion de proximité
          </button>
          <button
            class="cta"
            :class="{ actif: choix == 'soutien' }"
            data-adhesion="soutien"
            @click="setChoix($event.target.dataset.adhesion)"
          >
            Adhésion de soutien
          </button>
        </div>
        <div class="iframe-container">
          <div
            class="tac_helloasso"
            :class="{ visible: choix == 'proximite' }"
            data-url="https://www.helloasso.com/associations/havre-de-vers/adhesions/havre-de-vers-adherent-de-proximite-1/widget"
          ></div>
          <div
            class="tac_helloasso"
            :class="{ visible: choix == 'soutien' }"
            data-url="https://www.helloasso.com/associations/havre-de-vers/adhesions/havre-de-vers-adherent-de-soutien-from-the-ends-of-the-earth/widget"
          ></div>
        </div>
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
      choix: '',
      titre: 'Adhésion',
      desc: "Rejoignez nos adhérents pour bénéficier des avantages de l'association",
      image: '',
    }
  },
  computed: {
    imgHeader() {
      return this.page
        ? 'url(' + this.page.featuredImage.node.mediaItemUrl + ')'
        : '#403429'
    },
  },
  watch: {
    $route(to, from) {
      this.choix = ['soutien', 'proximite'].includes(to.hash.slice(1))
        ? to.hash.slice(1)
        : ''
    },
  },
  mounted() {
    this.choix = ['soutien', 'proximite'].includes(this.$route.hash.slice(1))
      ? this.$route.hash.slice(1)
      : ''
  },
  methods: {
    setChoix(val) {
      this.choix = val
      this.$router.push('#' + val)
    },
  },
}
</script>

<style lang="scss">
.tac_helloasso {
  display: none;

  &.visible {
    display: block;
  }
}

.result {
  position: relative;
}

.adherer {
  li {
    margin-left: 2rem;
    list-style-type: initial;
  }

  .choix {
    display: flex;
    justify-content: space-evenly;
    position: relative;

    & > .cta {
      margin: 2rem 0;

      & + .cta {
        margin-left: 1rem;
      }
    }
  }

  .iframe-container {
    min-height: 200px;
    max-height: 1500px;

    iframe {
      border: none;
      width: 100%;
      max-height: 0;

      min-height: 1500px;

      @media (min-width: 435px) {
        min-height: 1350px;
      }

      @media (min-width: 550px) {
        min-height: 1250px;
      }

      @media (min-width: 700px) {
        min-height: 1150px;
      }

      @media (min-width: 850px) {
        min-height: 1300px;
      }

      @media (min-width: 1200px) {
        min-height: 1200px;
      }
    }
  }
}
</style>
