<template>
  <div class="blog">
    <section class="section-page">
      <div class="title">
        <h1>Le Blog</h1>
      </div>
      <div class="content">
        <a id="content" class="ancre"></a>
        <BlogPagination :current-page="page" :nb-pages="nbPages" />
        <Transition>
          <div v-if="isError && !$fetchState.pending">
            <p class="error">La page demandée a été compostée</p>
            <NuxtLink class="cta" to="/">Retour à l'accueil</NuxtLink>
          </div>
        </Transition>
        <Transition>
          <div v-if="!isError && !$fetchState.pending">
            <ul class="list-actus">
              <li
                v-for="article in articles"
                :key="article.slug"
                class="article"
              >
                <BlogArticle :article="article" />
              </li>
            </ul>
          </div>
        </Transition>
        <BlogPagination :current-page="page" :nb-pages="nbPages" />
      </div>
    </section>
  </div>
</template>

<script>
import meta from '~/plugins/meta'

export default {
  mixins: [meta],
  data() {
    return {
      page: 1,
      nbPages: 1,
      articles: [],
    }
  },
  async fetch() {
    this.page = parseInt(this.$route.query.page) || 1
    this.articles = await this.$content('blog')
      .only(['titre'])
      .fetch()
      .then((reponse) => {
        this.nbPages = Math.ceil(
          reponse.length / this.$variables.blogPagination
        )

        return this.$content('blog')
          .without(['body'])
          .sortBy('updatedAt', 'desc')
          .skip((this.page - 1) * this.$variables.blogPagination)
          .limit(this.$variables.blogPagination)
          .fetch()
      })
  },
  fetchOnServer: false,
  computed: {
    isError() {
      return this.page < 0 || this.page > this.nbPages
    },
  },
  watch: {
    '$route.query': 'launch',
  },
  beforeMount() {
    this.titre = 'Le blog'
    this.desc = "Actualités de l'association"
    // this.image = ''
  },
  methods: {
    launch() {
      document.querySelector('#content').scrollIntoView({ behavior: 'smooth' })
      this.$fetch()
    },
  },
}
</script>

<style lang="scss">
.blog {
  .pagination {
    margin-bottom: 2rem;
  }
}
</style>
