<template>
  <ul class="list-actus">
    <li
      v-for="article in articles"
      :key="article.slug"
      class="article"
      data-aos="fade-up"
    >
      <BlogArticle :article="article.node" />
    </li>
  </ul>
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
