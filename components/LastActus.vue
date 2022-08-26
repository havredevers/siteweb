<template>
  <section class="accueil-2">
    <h1>Les actus</h1>
    <ul class="list-actus">
      <li v-for="article in articles" :key="article.title" data-aos="fade-up">
        <BlogArticle :article="article" />
      </li>
    </ul>
    <NuxtLink to="/blog" class="cta"> Voir tous les articles </NuxtLink>
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

<style lang="scss">
.accueil-2 {
  background-color: var(--clr-bg2);
  padding-bottom: 1rem;

  h1 {
    --hauteur-titre: clamp(90px, 30vw, 175px);
    background-image: url('/ui/accueil/bg-title2.png');
    color: white;
  }
}

.list-actus {
  list-style-type: none;
  flex-wrap: wrap;
  padding: 0 1rem;

  li:nth-child(even) .article {
    .mask {
      top: 2rem;
    }

    img {
      mask-image: url('/ui/mask2.svg');
    }

    @media (min-width: 700px) {
      grid-template:
        'title logo' minmax(80px, auto)
        'desc logo' minmax(80px, 1fr) / 1fr 35%;
    }
  }
}
</style>
