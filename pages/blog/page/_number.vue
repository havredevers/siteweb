<template>
  <div class="blog">
    <h2>Le Blog</h2>
    <ul class="list-actus">
      <li v-for="article in articles" :key="article.slug">
        <BlogArticle :article="article" />
      </li>
    </ul>
    <section class="prev-next">
      <nuxt-link :to="prevLink" title="Page précédente">&#60;&#60;</nuxt-link>
      <nuxt-link
        v-if="hasNextPage"
        :to="`/blog/page/${pageNo + 1}`"
        title="Page suivante"
      >
        &#62;&#62;
      </nuxt-link>
      <div v-if="!hasNextPage"></div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, $variables, params, error }) {
    const pageNo = parseInt(params.number)
    const posts = await $content('blog')
      .without(['body'])
      .sortBy('updatedAt', 'desc')
      .limit($variables.blogPagination + 1)
      .skip($variables.blogPagination * (pageNo - 1))
      .fetch()

    if (!posts.length) {
      return error({ statusCode: 404, message: 'Aucun article trouvé!' })
    }

    const hasNextPage = posts.length === $variables.blogPagination + 1
    const articles = hasNextPage ? posts.slice(0, -1) : posts
    return { hasNextPage, articles, pageNo }
  },
  computed: {
    prevLink() {
      return this.pageNo === 2 ? '/blog' : `/blog/page/${this.pageNo - 1}`
    },
  },
}
</script>
