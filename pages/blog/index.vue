<template>
  <div class="blog">
    <div class="carousel">
      <div class="page-header">
        <div class="carousel-img" :style="imgHeader"></div>
        <div class="carousel-title">
          <h1>Blog</h1>
          <p v-if="!$apollo.queries.page.loading">
            {{ page?.extrait }}
          </p>
        </div>
      </div>
    </div>
    <section class="section-page">
      <div class="title">
        <LoaderApple v-if="$apollo.queries.categories.loading" />
        <div v-else-if="error != ''">{{ error }}</div>
        <fieldset v-else>
          <legend>Filtrer les articles</legend>
          <div class="filter">
            <div>
              <input id="all" v-model="filter" type="radio" value="all" /><label
                for="all"
                tabindex="0"
                @click="pushRoute($event)"
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
                tabindex="0"
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
        <LoaderApple v-if="$apollo.queries.articles.loading" />
        <div v-else-if="error != ''">{{ error }}</div>
      </div>
      <HomeWave :colors="['var(--clr-content2)', 'var(--clr-content1)']" />
    </section>
  </div>
</template>

<script>
import meta from '~/plugins/meta'
import mixinApollo from '~/plugins/mixinApollo'
import { PAGINATED_POSTS, CATEGORIES } from '@/apollo/queries'

export default {
  mixins: [meta, mixinApollo],
  data() {
    return {
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
    $route(to, from) {
      if (to.name === 'blog')
        this.filter = to.hash ? to.hash.substring(1) : 'all'
    },
  },
  mounted() {
    this.filter = this.$route.hash ? this.$route.hash.substring(1) : 'all'
  },
  methods: {
    pushRoute(e) {
      this.$router.push({ hash: e.target.attributes.for.value })
    },
    showNextArticles() {
      this.isFectchingMore = true
      const bottomLastArticle = document
        .querySelector('li.article:last-child')
        .getBoundingClientRect().bottom

      this.$apollo.queries.articles.fetchMore({
        variables: {
          first: this.pagination,
          after: this.pageInfo.endCursor,
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          const newPosts = fetchMoreResult.posts.edges
          this.pageInfo = fetchMoreResult.posts.pageInfo
          this.isFectchingMore = false

          this.$nextTick(() => {
            window.scroll({
              top: document.documentElement.scrollTop + bottomLastArticle - 50,
            })
          })

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
