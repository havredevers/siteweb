<template>
  <div class="adherer">
    <section class="section-page">
      <div class="title">
        <h1>Nous <br />rejoindre</h1>
      </div>
      <div class="content">
        <div class="intro">
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
          <button
            class="cta"
            :class="{ actif: choix == 'proximite' }"
            data-adhesion="proximite"
            @click="setChoix($event)"
          >
            Adhérent de proximité
          </button>
          <button
            class="cta"
            :class="{ actif: choix == 'soutien' }"
            data-adhesion="soutien"
            @click="setChoix($event)"
          >
            Adhérent de soutien
          </button>
        </div>
        <div class="result" :class="{ loading: loading }">
          <Transition>
            <div v-if="loading" class="loader">
              <img src="/loader/loader.gif" alt="chargement" />
            </div>
          </Transition>
          <div class="iframe-container">
            <Transition>
              <iframe
                v-if="choix == 'proximite'"
                id="haWidget"
                allowtransparency="true"
                scrolling="auto"
                src="https://www.helloasso.com/associations/havre-de-vers/adhesions/havre-de-vers-adherent-de-proximite-1/widget"
                @load="onLoad"
              ></iframe>
            </Transition>
            <Transition>
              <iframe
                v-if="choix == 'soutien'"
                id="haWidget"
                allowtransparency="true"
                scrolling="auto"
                src="https://www.helloasso.com/associations/havre-de-vers/adhesions/havre-de-vers-adherent-de-soutien-from-the-ends-of-the-earth/widget"
                @load="onLoad"
              ></iframe>
            </Transition>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      choix: '',
      loading: false,
    }
  },
  mounted() {
    const hash = this.$route.hash.slice(1)
    this.choix = hash
    this.loading = ['proximite', 'soutien'].includes(hash)
  },
  methods: {
    setChoix(e) {
      this.choix = e.target.dataset.adhesion
      this.$router.push('#' + this.choix)
      document.querySelector('.iframe-container').classList.remove('loaded')
      this.loading = true
      setTimeout(this.scroll, 100)
    },
    onLoad(e) {
      this.loading = false
      document.querySelector('.iframe-container').classList.add('loaded')
      this.scroll()
    },
    scroll() {
      window.scrollTo({
        top: document.querySelector('.choix').offsetTop + 100,
        behavior: 'smooth',
      })
    },
  },
}
</script>

<style lang="scss">
.loader {
  text-align: center;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

.result {
  position: relative;

  &.loading .iframe-container {
    min-height: 200px;
  }
}

.adherer {
  li {
    margin-left: 2rem;
    list-style-type: initial;
  }

  .choix {
    display: flex;
    justify-content: space-evenly;

    & > .cta + .cta {
      margin-left: 1rem;
    }
  }

  .cta {
    margin: 2rem 0;
  }

  .iframe-container {
    opacity: 0;
    transition: opacity 0.5s ease, max-height 0.5s ease;

    iframe {
      border: none;
      width: 100%;
      max-height: 0;
    }

    &.loaded {
      opacity: 1;
      max-height: 1500px;

      iframe {
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
}
</style>
