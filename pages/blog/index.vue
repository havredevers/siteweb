<template>
  <div class="blog">
    <section class="section-page">
      <div class="title">
        <h1>Le Blog</h1>
      </div>
      <div class="content">
        <div>
          <ul v-if="articles" class="list-actus">
            <li v-for="article in articles" :key="article.slug" class="article">
              <BlogArticle :article="article.node" />
            </li>
          </ul>
        </div>
        <button
          v-if="pageInfo.hasNextPage && !$apollo.queries.articles.loading"
          class="cta"
          @click="showNextArticles"
        >
          Afficher plus
        </button>
        <div v-if="$apollo.queries.articles.loading" class="loader">
          <nuxt-img src="/loader/loader.gif" alt="chargement" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import meta from '~/plugins/meta'
import { PAGINATED_POSTS } from '@/apollo/queries'

export default {
  mixins: [meta],
  data() {
    return {
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
    articles: {
      query: PAGINATED_POSTS,
      variables() {
        return { first: this.pagination }
      },
      update(data) {
        this.pageInfo = data.posts.pageInfo
        return data.posts.edges
      },
    },
  },
  methods: {
    showNextArticles() {
      this.$apollo.queries.articles.fetchMore({
        variables: {
          first: this.pagination,
          after: this.pageInfo.endCursor,
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          const newPosts = fetchMoreResult.posts.edges
          this.pageInfo = fetchMoreResult.posts.pageInfo

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
  .pagination {
    margin-bottom: 2rem;
  }

  .cta {
    margin: auto;
  }
}
</style>
