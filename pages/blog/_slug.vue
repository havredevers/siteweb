<template>
  <article class="blog-article">
    <h2>
      {{ article.title }}
    </h2>
    <div>Mis à jour le {{ $formatDate(article.updatedAt) }}</div>
    <nav>
      <div>Table des matières</div>
      <ul>
        <li v-for="link of article.toc" :key="link.id">
          <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
        </li>
      </ul>
    </nav>
    <CustomImage :src="article.img" alt="" />
    <nuxt-content :document="article" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('blog', params.slug).fetch()

    return { article }
  },
  mounted() {
    this.$handleImagesLoad()
  },
}
</script>

<style lang="scss">
.blog-article {
  h2 {
    color: var(--clr-font);
  }

  nav ul {
    list-style-type: upper-roman;
    margin-left: 2rem;
  }
}
</style>
