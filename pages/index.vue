<template>
  <div class="accueil">
    <AccueilCarousel />
    <section class="section-page">
      <div class="title">
        <h1>Ici,<br />on voit la vie en "VERS"</h1>
      </div>
      <div class="content">
        <VideoYoutube vid="IlotXfNo17k" />
      </div>
      <HomeWave :colors="['#e3ad89', '#f4dbc9']" />
    </section>
    <section class="section-page">
      <span id="valeurs" class="ancre"></span>
      <div class="title">
        <h1>Nos <br />valeurs</h1>
      </div>
      <div class="content">
        <ul class="valeurs">
          <li data-aos="fade-up">
            <div class="logo ver"></div>
            <div class="text">
              <h2>Prendre soin des êtres vivants</h2>
              <p>
                La permaculture est un mouvement humaniste qui vise à améliorer
                la qualité de vie des hommes et des femmes. Pour prendre soin
                des autres, il est nécessaire de prendre soin de soi… Vaste
                programme dans lequel nous nous engageons car gaspillage et
                inégalité alimentaire, impératifs écologiques, déperdition des
                agricultures paysannes, perte de biodiversité sont autant
                d'enjeux qui nous ont mobilisé pour construire et expérimenter
                un nouveau modèle associatif de gestion locale des biodéchets,
                économique et alimentaire.
              </p>
            </div>
          </li>
          <li data-aos="fade-up">
            <div class="logo plante"></div>
            <div class="text">
              <h2>Prendre soin de notre environnement</h2>
              <p>
                La planète abrite des ressources énergétiques et minérales en
                quantité grande, mais pas infinie. Notre niveau de consommation
                et sa croissance exponentielle (appelée par les vœux de tous les
                politiques et économistes) nous mettront en situation de
                “rupture de stock” dans les prochaines générations.
              </p>
            </div>
          </li>
          <li data-aos="fade-up">
            <div class="logo solidarite"></div>
            <div class="text">
              <h2>Partager son temps et ses ressources</h2>
              <p>
                Le bon sens et l’auto-protection nous invitent à prendre grand
                soin de notre environnement naturel et de sa biodiversité et
                effectuer un aller retour entre les deux. De plus la
                permaculture reconnaît à tout être vivant une valeur
                inestimable, simplement en tant qu’expression de la diversité du
                vivant. Nous allons de l'assiette au jardin et revenons du
                jardin à l'assiette en distribuant le surplus à l'un comme à
                l'autre.
              </p>
            </div>
          </li>
        </ul>
        <div data-aos="fade-up">
          <NuxtLink to="/association" class="cta">
            Découvrir l'association
          </NuxtLink>
        </div>
      </div>
      <HomeWave :colors="['#ead0a3', '#f7e9d4']" />
    </section>
    <section class="accueil-2 section-page">
      <span id="actualites" class="ancre"></span>
      <div class="title">
        <h1>Nos <br />actualités</h1>
      </div>
      <div class="content">
        <div v-if="$apollo.queries.articles.loading" class="loader">
          <img src="~/assets/img/ui/loader.gif" alt="chargement" />
        </div>
        <div v-else-if="error != ''">{{ error }}</div>
        <ListActus v-else :articles="articles" />
        <div data-aos="fade-up">
          <NuxtLink to="/blog" class="cta">Voir tous les articles</NuxtLink>
        </div>
      </div>
      <HomeWave :colors="['#e3ad89', '#f4dbc9']" />
    </section>
  </div>
</template>

<script>
import { PAGINATED_POSTS } from '@/apollo/queries'

export default {
  data() {
    return {
      error: '',
    }
  },
  apollo: {
    articles: {
      query: PAGINATED_POSTS,
      variables() {
        return { first: 2, categoryName: 'Actualités' }
      },
      update(data) {
        return data.posts.edges
      },
      error(err) {
        this.error = err.message
      },
    },
  },
}
</script>

<style lang="scss">
.logo {
  &.ver {
    background-image: url('~/assets/img/pages/accueil/ver.png');
  }
  &.plante {
    background-image: url('~/assets/img/pages/accueil/plante.png');
  }
  &.solidarite {
    background-image: url('~/assets/img/pages/accueil/solidarite.png');
  }
}

.accueil {
  ul.valeurs li {
    display: flex;
    margin-bottom: 3rem;

    .logo {
      flex: 0 1 70px;
      background-size: contain;
      background-repeat: no-repeat;
    }

    .text {
      flex: 0 1 90%;
      margin-left: 1rem;
    }
  }

  .content .cta {
    margin: 1rem auto;
  }

  h2 {
    margin-bottom: 1rem;
    font-weight: 400;
  }
}
</style>
