<template>
  <div class="blog">
    <h2>Le Blog</h2>
    <ul class="list-actus">
      <li v-for="article in articles" :key="article.slug">
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
  updated() {
    this.$nextTick(() => {
      setTimeout(function () {
        window.scrollTo(0, 0)
      }, 5)
    })
  },
}
</script>

<style lang="scss">
.blog {
  h2 {
    --hauteur-titre: 190px;
    background-image: url('/ui/accueil/bg-title2.png');
  }

  .list-actus {
    flex-direction: column;
  }

  .prev-next {
    display: flex;
    padding: 0 1rem;
    justify-content: space-between;
    margin-top: 1rem;
    font-weight: bold;
    font-size: 2rem;

    @media (min-width: 550px) {
      justify-content: space-around;
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
