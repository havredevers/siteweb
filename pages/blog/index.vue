<template>
  <div class="blog">
    <div class="carousel">
      <div class="page-header">
        <div class="carousel-img"></div>
        <div class="carousel-title">
          <h1>Blog</h1>
          <p>Retrouvez ici toutes nos actualités, recettes, reportages...</p>
        </div>
      </div>
    </div>
    <section class="section-page">
      <div class="title">
        <div v-if="$apollo.queries.categories.loading" class="loader">
          <img src="~/assets/img/ui/loader.gif" alt="chargement" />
        </div>
        <div v-else-if="error != ''">{{ error }}</div>
        <fieldset v-else>
          <legend>Filtrer les articles</legend>
          <div class="filter">
            <div>
              <input id="all" v-model="filter" type="radio" value="all" /><label
                for="all"
                >Tous</label
              >
            </div>
            <div v-for="cat in categories" :key="cat.id">
              <input
                v-if="cat.name != 'Non classé'"
                :id="cat.slug"
                v-model="filter"
                type="radio"
                :value="cat.slug"
              /><label
                v-if="cat.name != 'Non classé'"
                :for="cat.slug"
                @click="pushRoute($event)"
                >{{ cat.name }}</label
              >
            </div>
          </div>
        </fieldset>
      </div>
      <div class="content">
        <div
          v-if="
            (isFectchingMore || !$apollo.queries.articles.loading) && articles
          "
        >
          <ListActus :articles="articles" />
        </div>
        <button
          v-if="pageInfo.hasNextPage && !$apollo.queries.articles.loading"
          class="cta"
          @click="showNextArticles"
        >
          Afficher plus
        </button>
        <div v-if="$apollo.queries.articles.loading" class="loader">
          <img src="~/assets/img/ui/loader.gif" alt="chargement" />
        </div>
        <div v-else-if="error != ''">{{ error }}</div>
      </div>
      <HomeWave :colors="['#e3ad89', '#f4dbc9']" />
    </section>
  </div>
</template>

<script>
import meta from '~/plugins/meta'
import { PAGINATED_POSTS, CATEGORIES } from '@/apollo/queries'

export default {
  mixins: [meta],
  data() {
    return {
      error: '',
      isFectchingMore: false,
      filter: 'all',
      pagination: 4,
      pageInfo: {
        hasNextPage: false,
        endCursor: '',
      },
      titre: 'Le blog',
      desc: "Actualités de l'association",
      image: '',
    }
  },
  apollo: {
    categories: {
      query: CATEGORIES,
      update(data) {
        return data.categories.nodes
      },
      error(err) {
        this.error = err.message
      },
    },
    articles: {
      query: PAGINATED_POSTS,
      variables() {
        return {
          first: this.pagination,
          categoryName: this.filter === 'all' ? '' : this.filter,
        }
      },
      update(data) {
        this.pageInfo = data.posts.pageInfo
        return data.posts.edges
      },
      error(err) {
        this.error = err.message
      },
    },
  },
  watch: {
    filter() {
      this.$apollo.queries.articles.refetch()
    },
  },
  mounted() {
    this.filter = this.$route.hash.substring(1)
  },
  methods: {
    pushRoute(e) {
      this.$router.push({ hash: e.target.attributes.for.value })
    },
    showNextArticles() {
      this.isFectchingMore = true

      this.$apollo.queries.articles.fetchMore({
        variables: {
          first: this.pagination,
          after: this.pageInfo.endCursor,
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          const newPosts = fetchMoreResult.posts.edges
          this.pageInfo = fetchMoreResult.posts.pageInfo
          this.isFectchingMore = false

          return {
            posts: {
              __typename: previousResult.posts.__typename,
              edges: [...previousResult.posts.edges, ...newPosts],
              pageInfo: this.pageInfo,
            },
          }
        },
      })
    },
  },
}
</script>

<style lang="scss">
.blog {
  .carousel-img {
    background-image: url('~/assets/img/pages/adherer/cuisine.png');
  }

  fieldset {
    border: none;

    legend {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    input {
      display: none;
    }

    label {
      display: block;
      font-size: 1.5rem;
      text-align: center;
      padding: 0.5rem;

      &:hover {
        cursor: pointer;
        background-color: var(--clr-primary);
      }
    }
  }

  .filter {
    background-color: var(--clr-green1);
    border-radius: 20px;
    max-width: 350px;
    overflow: hidden;

    input:checked + label {
      background-color: var(--clr-primary);
    }
  }

  .cta {
    margin: auto;
  }
}
</style>
