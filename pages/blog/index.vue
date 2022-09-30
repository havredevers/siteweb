<template>
  <div class="blog container">
    <h1>Le Blog</h1>
    <ul class="list-actus">
      <li v-for="article in articles" :key="article.slug" class="article">
        <BlogArticle :article="article" />
      </li>
    </ul>
    <section v-if="hasPrevPage || hasNextPage" class="prev-next">
      <nuxt-link
        v-if="hasPrevPage"
        :to="'/blog/?page=' + (page - 1)"
        title="Page précédente"
        >&#60;&#60;</nuxt-link
      >
      <div v-if="!hasPrevPage || !hasNextPage"></div>
      <nuxt-link
        v-if="hasNextPage"
        :to="'/blog/?page=' + (page + 1)"
        title="Page suivante"
        >&#62;&#62;</nuxt-link
      >
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, $variables, route }) {
    const page = parseInt(route.query.page) || 1
    const posts = await $content('blog')
      .without(['body'])
      .sortBy('updatedAt', 'desc')
      .skip((page - 1) * $variables.blogPagination)
      .limit($variables.blogPagination + 1)
      .fetch()

    const hasNextPage = posts.length === $variables.blogPagination + 1
    const hasPrevPage = page > 1
    const articles = hasNextPage ? posts.slice(0, -1) : posts

    return { page, hasNextPage, hasPrevPage, articles }
  },
  watch: {
    $route() {
      this.$nuxt.refresh()
    },
  },
}
</script>

<style lang="scss">
.blog {
  .prev-next {
    display: flex;
    justify-content: space-between;
    margin: 2rem auto;
    font-weight: bold;
    font-size: 2rem;
    max-width: 850px;

    @media (min-width: 550px) {
      justify-content: space-between;
    }

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
  }
}
</style>
