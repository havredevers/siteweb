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
    <div class="wave">
      <svg
        viewBox="0 0 1440 130"
        version="1.1"
        width="1440"
        height="130"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          style="fill: #ead0a3; fill-opacity: 1"
          d="M 475 0 L 475 0 L 80 0 L 0 0 L 0 63.349609 L 80 77.404297 C 159.99992 91.723908 320.00016 119.44071 475 119.63867 C 475 119.63865 475 119.6387 475 119.63867 L 475 0 z "
        />
        <path
          style="fill: #f7e9d4; fill-opacity: 1"
          d="M 475 0 L 475 119.63867 C 640.0389 119.43402 800.01969 91.723804 960 87.962891 C 1119.9998 84.465474 1280.0001 105.5824 1360 116.14062 L 1440 126.69922 L 1440 0 L 1360 0 L 960 0 L 475 0 z "
        />
      </svg>
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
