<template>
  <div>
    <h2>Le Blog</h2>
    <ul>
      <li v-for="article in articles" :key="article.title">
        <NuxtLink :to="article.path">
          <div>{{ article.title }}</div>
          <div>{{ 'Mis à jour le ' + $formatDate(article.updatedAt) }}</div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('blog')
      .without(['body'])
      .sortBy('updatedAt', 'desc')
      .fetch()

    return { articles }
  },
}
</script>
