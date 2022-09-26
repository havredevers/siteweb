<template>
  <section class="accueil-2">
    <div class="title">
      <h1>Nos actualités</h1>
    </div>
    <div class="content">
      <ul class="list-actus">
        <li
          v-for="article in articles"
          :key="article.title"
          data-aos="fade-up"
          class="article"
        >
          <BlogArticle :article="article" />
        </li>
      </ul>
      <div data-aos="fade-up">
        <NuxtLink to="/blog" class="cta"> Voir tous les articles </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    articles: {
      required: true,
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>
