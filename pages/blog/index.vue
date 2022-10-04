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
  async asyncData({ $content, $variables, route }) {
    const page = parseInt(route.query.page) || 1
    const totalPosts = await $content('blog').only(['titre']).fetch()
    const nbPages = Math.ceil(totalPosts.length / $variables.blogPagination)

    const articles = await $content('blog')
      .without(['body'])
      .sortBy('updatedAt', 'desc')
      .skip((page - 1) * $variables.blogPagination)
      .limit($variables.blogPagination)
      .fetch()

    return { page, nbPages, articles }
  },
  watch: {
    $route() {
      this.$nuxt.refresh()
    },
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
