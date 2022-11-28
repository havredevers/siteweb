<template>
  <div class="association">
    <div class="carousel">
      <div class="page-header">
        <div class="carousel-img">
          <nuxt-img
            format="png"
            src="/association/cuisine.png"
            alt=""
            width="1200"
            height="815"
          />
        </div>
        <div class="carousel-title">
          <h1>L'association</h1>
          <p>Ici on voit la vie en VERS</p>
          <NuxtLink to="/adherer" class="cta">Rejoignez-nous</NuxtLink>
        </div>
      </div>
    </div>
    <section class="section-page asso-1">
      <span id="qui-sommes-nous" class="ancre"></span>
      <div class="title">
        <h2>Qui sommes-nous&nbsp;?</h2>
      </div>
      <div class="content lead">
        <p data-aos="fade-up">
          HAVRE DE VERS est née, le 14 janvier 2016, d'une envie commune de
          trois amis, Marian, Flavien et Léo, afin d'apporter une solution face
          å la situation de crise importante dans les domaines de l'agriculture,
          de l'alimentation et de la santé.
        </p>
        <p data-aos="fade-up">
          Gaspillage et inégalité alimentaire, impératifs écologiques, hégémonie
          de l'exploitation animate industrielle et de la grande distribution,
          déperdition des agricultures paysannes, perte de biodiversité, manque
          de résilience écologique, tres faible support des initiatives å
          l'agriculture urbaine: autant d'enjeux qui nous ont mobilisé pour
          construire et expérimenter un nouveau modéle associatif de gestion
          locale des biodéchets, économique et alimentaire. Basée sur une
          conception permaculturelle, dans un environnement urbain, cette
          association vise å une transformation sociale et écologique de notre
          vision et de nos méthodes de gestion des matiéres organiques (ou la
          matiére fabriquée par les étres vivants) en générant de nouvelles
          solidarités. Nous revalorisons les biodéchets par lombricompostage en
          vue d'assurer :
        </p>
        <ul data-aos="fade-up">
          <li>
            Une collecte décentralisée locale des biodéchets en milieu urbain ;
          </li>
          <li>
            Une transformation des biodéchets en un amendement organique de
            haute valeur agronomique par lombricompostage;
          </li>
          <li>
            Une sensibilisation à l'impact écologique et économico-social de la
            gestion des biodéchets.
          </li>
        </ul>
      </div>
      <HomeWave :colors="['#e3ad89', '#f4dbc9']" />
    </section>
    <section class="section-page chiffres">
      <span id="chiffres" class="ancre"></span>
      <div class="title">
        <h2>L'association en quelques chiffres</h2>
      </div>
      <div class="content">
        <ul v-if="isLoaded">
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
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path
                  d="M400 256C400 317.9 349.9 368 288 368C226.1 368 176 317.9 176 256C176 194.1 226.1 144 288 144C349.9 144 400 194.1 400 256zM272 224V288H264C255.2 288 248 295.2 248 304C248 312.8 255.2 320 264 320H312C320.8 320 328 312.8 328 304C328 295.2 320.8 288 312 288H304V208C304 199.2 296.8 192 288 192H272C263.2 192 256 199.2 256 208C256 216.8 263.2 224 272 224zM0 128C0 92.65 28.65 64 64 64H512C547.3 64 576 92.65 576 128V384C576 419.3 547.3 448 512 448H64C28.65 448 0 419.3 0 384V128zM48 176V336C83.35 336 112 364.7 112 400H464C464 364.7 492.7 336 528 336V176C492.7 176 464 147.3 464 112H112C112 147.3 83.35 176 48 176z"
                />
              </svg>
            </div>
            <div class="value"><count-up :end="fonds" suffix="€" /></div>
            <div class="unit"><h3>Collectés</h3></div>
          </li>
          <li data-aos="zoom-in" data-aos-delay="400">
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path
                  d="M206.7 45.1C224.2 17 255 0 288 0s63.8 17 81.3 45.1l38.6 61.7 27-15.6c8.4-4.9 18.9-4.2 26.6 1.7s11.1 15.9 8.6 25.3l-23.4 87.4c-3.4 12.8-16.6 20.4-29.4 17l-87.4-23.4c-9.4-2.5-16.3-10.4-17.6-20s3.4-19.1 11.8-23.9l28.4-16.4L315 79c-5.8-9.3-16-15-27-15s-21.2 5.7-27 15l-17.5 28c-9.2 14.8-28.6 19.5-43.6 10.5c-15.3-9.2-20.2-29.2-10.7-44.4l17.5-28zM461.5 251.9c15-9 34.4-4.3 43.6 10.5l24.4 39.1c9.4 15.1 14.4 32.4 14.6 50.2c.3 53.1-42.7 96.4-95.8 96.4L352 448v32c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-64-64c-9.4-9.4-9.4-24.6 0-33.9l64-64c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2v32l96.2 0c17.6 0 31.9-14.4 31.8-32c0-5.9-1.7-11.7-4.8-16.7l-24.4-39.1c-9.5-15.2-4.7-35.2 10.7-44.4zm-364.6-31L68 204.2c-8.4-4.9-13.1-14.3-11.8-23.9s8.2-17.5 17.6-20l87.4-23.4c12.8-3.4 26 4.2 29.4 17L214 241.2c2.5 9.4-.9 19.3-8.6 25.3s-18.2 6.6-26.6 1.7l-26.5-15.3-51.5 82.4c-3.1 5-4.8 10.8-4.8 16.7c-.1 17.6 14.2 32 31.8 32l32.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32.2 0c-53.1 0-96.1-43.2-95.8-96.4c.1-17.8 5.1-35.1 14.6-50.2l50.3-80.5z"
                />
              </svg>
            </div>
            <div class="value">
              <count-up :end="nbEvents" />
            </div>
            <div class="unit"><h3>Ateliers</h3></div>
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

export default {
  mixins: [meta],
  data() {
    return {
      api_url: 'https://api.helloasso.com',
      token: '',
      nbAdhesions: 0,
      nbEvents: 0,
      fonds: 0,
      isLoaded: false,
    }
  },
  beforeMount() {
    this.titre = 'Présentation'
    this.desc =
      'Havre de vers est une association loi 1901 visant à promouvoir la valorisaion des biodéchets en milieu urbain grâce au reconditionnement et au lombricompostage'
    // this.image = ''
  },
  mounted() {
    const currentForms = []

    // https://api.helloasso.com/v5/swagger/ui/index#/
    this.$axios
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
          'organizations/havre-de-vers/forms?states=Public&formTypes=Membership&formTypes=Event&pageSize=100'
        )
      })
      .then((forms) => {
        const transactionsPromises = []
        const today = new Date()

        forms.forEach((form) => {
          const formDate = new Date(form.endDate)

          switch (form.formType) {
            case 'Event':
              this.nbEvents += 1
              break
            case 'Membership':
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
          }
        })

        return Promise.all(transactionsPromises)
      })
      .then((reponses) => {
        reponses.forEach((transactions) => {
          transactions.forEach((transaction) => {
            this.fonds += transaction.amount / 100
            this.nbAdhesions +=
              currentForms.includes(transaction.order.formSlug) &&
              'name' in transaction
                ? 1
                : 0
          })
        })
        this.isLoaded = true
      })
      .catch((error) => console.log(error.message))
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
.association h3 {
  font-family: var(--font-changa);
  margin: 0.5rem 0;
}

.asso-1 {
  li {
    list-style-type: initial;
  }

  .content {
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
