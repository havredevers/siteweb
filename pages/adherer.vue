<template>
  <div class="adherer">
    <div class="carousel">
      <div class="page-header">
        <div class="carousel-img">
          <nuxt-img
            format="png"
            src="/carousel/adherer.png"
            alt=""
            width="1200"
            height="815"
          />
        </div>
        <div class="carousel-title">
          <h1>Adhérer à l'association</h1>
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
        <h2>Nous <br />rejoindre</h2>
      </div>
      <div class="content">
        <div class="intro lead">
          <p>
            Adhérez à l'association et profitez des avantages proposés par cette
            dernière :
          </p>
          <ul>
            <li>
              Récupérations d'invendus et de préparations culinaires à prix
              libre
            </li>
            <li>Ateliers de cuisine végétale</li>
            <li>Partages de savoir-faire</li>
            <li>
              Devenez incollable sur le compostage et la gestion des biodéchets
            </li>
          </ul>
          <p>
            Répondons ensemble à un premier objectif qui est de sensibiliser à
            la revalorisation des déchets organiques au niveau local,
            principalement par lombricompostage. Et plus globalement, appliquons
            nous à développer le concept de "permaculure urbaine".
          </p>
          <q>Du jardin à l’assiette, nous envisageons un modèle bio-inspiré.</q>
        </div>
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
      choix: '',
    }
  },
  watch: {
    $route(to, from) {
      this.choix = ['soutien', 'proximite'].includes(to.hash.slice(1))
        ? to.hash.slice(1)
        : ''
    },
  },
  beforeCreate() {
    this.titre = 'Adhésion'
    this.desc =
      "Rejoignez nos adhérents pour bénéficier des avantages de l'association grâce à notre partenaire HelloAsso"
    // this.image = ''
  },
  mounted() {
    this.setChoix(this.$route.hash.slice(1))
  },
  methods: {
    setChoix(val) {
      this.choix = ['soutien', 'proximite'].includes(val) ? val : ''
      this.$router.push('#' + this.choix)
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
  ul {
    margin: 1rem 0;
  }
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
