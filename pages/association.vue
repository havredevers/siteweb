<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="association">
    <div class="carousel">
      <div class="page-header">
        <div class="carousel-img"></div>
        <div class="carousel-title">
          <h1>L'association</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
            architecto laudantium
          </p>
          <NuxtLink to="/adherer" class="cta">Rejoignez-nous</NuxtLink>
        </div>
      </div>
    </div>
    <section class="section-page asso-1">
      <span id="qui-sommes-nous" class="ancre"></span>
      <div class="title">
        <h2>Qui sommes-nous&nbsp;?</h2>
      </div>
      <div class="content">
        <div v-if="$apollo.queries.asso.loading" class="loader">
          <img src="~/assets/img/ui/loader.gif" alt="chargement" />
        </div>
        <div v-else-if="error != ''">{{ error }}</div>
        <div v-else class="lead" v-html="asso"></div>
      </div>
      <HomeWave :colors="['#e3ad89', '#f4dbc9']" />
    </section>
    <section class="section-page chiffres">
      <span id="chiffres" class="ancre"></span>
      <div class="title">
        <h2>L'association en quelques chiffres</h2>
      </div>
      <div class="content">
        <div v-if="$fetchState.pending" class="loader">
          <img src="~/assets/img/ui/loader.gif" alt="chargement" />
        </div>
        <p v-else-if="$fetchState.error">
          Un problème est survenu en contactant l'API HelloAsso
        </p>
        <ul v-else>
          <li data-aos="zoom-in" data-aos-delay="100">
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path
                  d="M144 160c-44.2 0-80-35.8-80-80S99.8 0 144 0s80 35.8 80 80s-35.8 80-80 80zm368 0c-44.2 0-80-35.8-80-80s35.8-80 80-80s80 35.8 80 80s-35.8 80-80 80zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM416 224c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"
                />
              </svg>
            </div>
            <div class="value"><count-up :end="nbAdhesions" /></div>
            <div class="unit"><h3>Adhérent(e)s</h3></div>
          </li>
          <li data-aos="zoom-in" data-aos-delay="250">
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  d="M346.7 6C337.6 17 320 42.3 320 72c0 40 15.3 55.3 40 80s40 40 80 40c29.7 0 55-17.6 66-26.7c4-3.3 6-8.2 6-13.3s-2-10-6-13.2c-11.4-9.1-38.3-26.8-74-26.8c-32 0-40 8-40 8s8-8 8-40c0-35.7-17.7-62.6-26.8-74C370 2 365.1 0 360 0s-10 2-13.3 6zM244.6 136c-40 0-77.1 18.1-101.7 48.2l60.5 60.5c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-55.3-55.3 0 .1L2.2 477.9C-2 487-.1 497.8 7 505s17.9 9 27.1 4.8l134.7-62.4-52.1-52.1c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L199.7 433l100.2-46.4c46.4-21.5 76.2-68 76.2-119.2C376 194.8 317.2 136 244.6 136z"
                />
              </svg>
            </div>
            <div class="value"><count-up :end="50000" suffix="kg" /></div>
            <div class="unit"><h3>Collectés</h3></div>
          </li>
          <li data-aos="zoom-in" data-aos-delay="400">
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path
                  d="M400 96c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm27.2 64l-61.8-48.8c-17.3-13.6-41.7-13.8-59.1-.3l-83.1 64.2c-30.7 23.8-28.5 70.8 4.3 91.6L288 305.1V416c0 17.7 14.3 32 32 32s32-14.3 32-32V288c0-10.7-5.3-20.7-14.2-26.6L295 232.9l60.3-48.5L396 217c5.7 4.5 12.7 7 20 7h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H427.2zM200 384c0 39.8-32.2 72-72 72s-72-32.2-72-72s32.2-72 72-72s72 32.2 72 72zm56 0c0-70.7-57.3-128-128-128S0 313.3 0 384s57.3 128 128 128s128-57.3 128-128zm328 0c0 39.8-32.2 72-72 72s-72-32.2-72-72s32.2-72 72-72s72 32.2 72 72zm56 0c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128s128-57.3 128-128z"
                />
              </svg>
            </div>
            <div class="value">
              <count-up :end="4000" suffix="km" />
            </div>
            <div class="unit"><h3>Parcourus</h3></div>
          </li>
        </ul>
      </div>
      <HomeWave :colors="['#ead0a3', '#f7e9d4']" />
    </section>
    <AssoMap />
    <PresentationEquipe />
  </div>
</template>
<script>
import qs from 'qs'
import meta from '~/plugins/meta'
import { GET_PAGE } from '@/apollo/queries'

export default {
  name: 'PageAssociation',
  mixins: [meta],
  data() {
    return {
      error: '',
      api_url: 'https://api.helloasso.com',
      token: '',
      nbAdhesions: 0,
      titre: 'Présentation',
      desc: 'En savoir plus sur notre association',
      image: '',
    }
  },
  apollo: {
    asso: {
      query: GET_PAGE,
      variables() {
        return { id: 'association' }
      },
      update(data) {
        return data.page.content
      },
      error(err) {
        this.error = err.message
      },
    },
  },
  fetchOnServer: false,
  async fetch() {
    const currentForms = []

    // https://api.helloasso.com/v5/swagger/ui/index#/
    await this.$axios
      .post(
        this.api_url + '/oauth2/token',
        qs.stringify({
          client_id: process.env.CLIENT_ID,
          client_secret: process.env.CLIENT_SECRET,
          grant_type: 'client_credentials',
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      )
      .then((response) => {
        this.token = response.data.access_token
        return this.fetchAll(
          'organizations/havre-de-vers/forms?states=Public&formTypes=Membership&pageSize=100'
        )
      })
      .then((forms) => {
        const transactionsPromises = []
        const today = new Date()

        forms.forEach((form) => {
          const formDate = new Date(form.endDate)

          transactionsPromises.push(
            this.fetchAll(
              'organizations/havre-de-vers/forms/Membership/' +
                form.formSlug +
                '/items?pageSize=100'
            )
          )
          if (formDate.getTime() > today.getTime()) {
            currentForms.push(form.formSlug)
          }
        })

        return Promise.all(transactionsPromises)
      })
      .then((reponses) => {
        reponses.forEach((transactions) => {
          transactions.forEach((transaction) => {
            this.nbAdhesions +=
              currentForms.includes(transaction.order.formSlug) &&
              'name' in transaction
                ? 1
                : 0
          })
        })
      })
      .catch((error) => console.log(error.message))
  },
  watch: {
    asso(n, o) {
      if (n !== o) {
        this.aosTrigger(document.querySelectorAll('.asso-1 .content .lead > *'))
      }
    },
  },
  methods: {
    async fetchSomething(query) {
      return await this.$axios.$get(this.api_url + '/v5/' + query, {
        headers: { Authorization: `Bearer ${this.token}` },
      })
    },
    async fetchAll(query) {
      let data = []

      await this.fetchSomething(query)
        .then((response) => {
          data = response.data
          let pageIndex = response.pagination.pageIndex
          const nbPages = response.pagination.totalPages
          const promises = []

          if (nbPages > 1) {
            while (pageIndex < nbPages) {
              pageIndex += 1
              promises.push(
                this.fetchSomething(query + '&pageIndex=' + pageIndex)
              )
            }

            return Promise.all(promises)
          }
        })
        .then((responses) => {
          if (responses) {
            responses.forEach((response) => {
              data = data.concat(response.data)
            })
          }
        })

      return new Promise((resolve, reject) => {
        resolve(data)
      })
    },
  },
}
</script>

<style lang="scss">
.association {
  h3 {
    font-family: var(--font-changa);
    margin: 0.5rem 0;
  }

  .carousel-img {
    background-image: url('~/assets/img/pages/association/cuisine.png');
  }
}

.asso-1 {
  li {
    list-style-type: initial;
  }

  .lead {
    text-align: center;

    & > * + * {
      margin-top: 2rem;
    }
  }
}

.chiffres {
  ul {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  li {
    text-align: center;
    padding: 1rem;
    margin-bottom: 2rem;
    flex: 0 0 33%;
  }

  .icon svg {
    height: 50px;
    margin-bottom: 1rem;
  }

  .value {
    font-size: 50px;
  }

  h3 {
    font-size: clamp(1.5rem, 2vw, 2rem);
  }

  @media (min-width: 1200px) {
    ul {
      flex-direction: row;
    }
  }
}
</style>
