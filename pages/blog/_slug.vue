<template>
  <article>
    <h2>{{ article.title }}</h2>
    <img :src="article.img" alt="" />
    <p>{{ article.description }}</p>
    <nuxt-content :document="article" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('blog', params.slug).fetch()

    return { article }
  },
}
</script>
