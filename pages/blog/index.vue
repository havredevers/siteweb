<template>
  <div class="blog">
    <section class="section-page">
      <div class="title">
        <h1>Le Blog</h1>
      </div>
      <div class="content">
        <ul class="list-actus">
          <li v-for="article in articles" :key="article.slug" class="article">
            <BlogArticle :article="article" />
          </li>
        </ul>
        <BlogPagination :current-page="page" :nb-pages="nbPages" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      nbPages: 1,
      articles: [],
    }
  },
  async fetch() {
    this.articles = await this.$content('blog')
      .only(['titre'])
      .fetch()
      .then((reponse) => {
        this.nbPages = Math.ceil(
          reponse.length / this.$variables.blogPagination
        )

        if (this.page < 0 || this.page > this.nbPages) {
          this.$nuxt.error({ statusCode: 404 })
        }

        return this.$content('blog')
          .without(['body'])
          .sortBy('updatedAt', 'desc')
          .skip((this.page - 1) * this.$variables.blogPagination)
          .limit(this.$variables.blogPagination)
          .fetch()
      })
  },
  created() {
    this.page = parseInt(this.$route.query.page) || 1
  },
}
</script>

<style lang="scss">
.blog .prev-next {
  display: flex;
  justify-content: space-between;
  margin: 2rem auto;
  font-weight: bold;
  font-size: 2rem;
  max-width: 850px;

  a {
    color: var(--clr-primary);
    border: 1px solid var(--clr-primary);
    border-radius: 100%;
    padding: 15px;

    &:focus-visible,
    &:hover {
      background: var(--clr-primary);
      color: white;
    }
  }

  @media (min-width: 550px) {
    justify-content: space-between;
  }
}
</style>
