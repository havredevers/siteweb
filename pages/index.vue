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
        <div v-if="$apollo.queries.accueil.loading" class="loader">
          <img src="~/assets/img/ui/loader.gif" alt="chargement" />
        </div>
        <div v-else-if="error != ''">{{ error }}</div>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div v-else v-html="accueil"></div>
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
import { PAGINATED_POSTS, GET_PAGE } from '@/apollo/queries'

export default {
  data() {
    return {
      error: '',
    }
  },
  apollo: {
    accueil: {
      query: GET_PAGE,
      variables() {
        return { id: 'accueil' }
      },
      update(data) {
        return data.page.content
      },
      error(err) {
        this.error = err.message
      },
    },
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
