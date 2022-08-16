<template>
  <div class="blog">
    <h2>Le Blog</h2>
    <ul class="list-actus">
      <li v-for="article in articles" :key="article.title">
        <BlogArticle :article="article" />
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

<style lang="scss">
.blog {
  h2 {
    --hauteur-titre: 190px;
    background-image: url('@/assets/img/accueil/bg-title2.png');
  }

  .list-actus {
    flex-direction: column;
  }
}
</style>
