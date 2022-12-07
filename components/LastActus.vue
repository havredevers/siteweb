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
          :key="article.slug"
          data-aos="fade-up"
          class="article"
        >
          <BlogArticle :article="article.node" />
        </li>
      </ul>
      <div data-aos="fade-up">
        <NuxtLink to="/blog" class="cta"> Voir tous les articles </NuxtLink>
      </div>
    </div>
    <HomeWave :colors="['#e3ad89', '#f4dbc9']" />
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
