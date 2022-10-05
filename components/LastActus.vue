<template>
  <section class="accueil-2 section-page">
    <span id="actualites" class="ancre"></span>
    <div class="title">
      <h1>Nos <br />actualités</h1>
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
    <HomeWave :colors="['#ead0a3', '#f7e9d4']" />
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
