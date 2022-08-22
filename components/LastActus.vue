<template>
  <section class="accueil-2">
    <h1>Les actus</h1>
    <ul class="list-actus">
      <li v-for="article in articles" :key="article.title">
        <BlogArticle :article="article" />
      </li>
    </ul>
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

  h1 {
    --hauteur-titre: clamp(90px, 30vw, 175px);
    background-image: url('/ui/accueil/bg-title2.png');
    color: white;

    @media (min-width: 850px) {
      width: 350px;
    }
  }
}

.list-actus {
  list-style-type: none;
  padding: 0 3rem;
  flex-wrap: wrap;

  li {
    margin-top: 2rem;
  }

  @media (min-width: 850px) {
    display: flex;
    justify-content: space-evenly;
    gap: 2rem;

    a:hover .mask,
    a:focus-visible .mask {
      transform: initial;
    }
  }
}
</style>
