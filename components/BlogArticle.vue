<template>
  <NuxtLink :to="article.path" class="article">
    <div class="article-logo">
      <div class="mask">
        <CustomImage :src="article.img" alt="" />
      </div>
    </div>
    <div class="article-title">
      <h3>{{ article.title }}</h3>
      <small>{{ 'Mis à jour le ' + $formatDate(article.updatedAt) }}</small>
    </div>
    <div class="article-desc">
      <p>{{ article.description }}</p>
      <span>Lire l'article</span>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>

<style lang="scss">
.article {
  display: grid;
  grid-template:
    'title'
    'logo'
    'desc';
  max-width: 850px;
  margin: 0 auto 3rem;
  padding: 1rem;
  overflow: hidden;
  color: var(--clr-font);
  transition: all 0.3s ease-in-out;
  border-radius: 0.5rem;

  &-logo {
    flex: 0 0 35%;
    grid-area: logo;
    transition: inherit;
  }

  &-title {
    grid-area: title;
  }

  &-desc {
    grid-area: desc;
  }

  h3 {
    font-size: clamp(1.5rem, 5vw, 2rem);
  }

  small {
    display: block;
    padding-bottom: 1rem;
    opacity: 0.8;
  }

  p {
    margin-bottom: 1.5rem;
  }

  span {
    color: var(--clr-primary);
    font-weight: bold;
  }

  .mask {
    display: flex;
    align-items: center;
    margin: -50px -150px 0;
    position: relative;
    transition: inherit;
    top: 0;
  }

  img {
    mask-repeat: no-repeat;
    mask-position: center;
    mask-size: contain;
    mask-image: url('/ui/mask.svg');
    transition: inherit;
    width: 100%;
    max-height: 325px;
    filter: sepia(80%);
  }

  @media (min-width: 700px) {
    padding: 2rem 1rem 0;

    grid-template:
      'logo title' minmax(80px, auto)
      'logo desc' minmax(80px, 1fr) / 35% 1fr;

    &-title {
      margin-top: 3rem;
    }
    &-title,
    &-desc {
      padding-left: 1.5rem;
    }
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    img {
      filter: sepia(0%);
    }

    .mask {
      transform: translateY(-15px);
      filter: drop-shadow(2px 9px 6px rgba(0, 0, 0, 0.5));
    }

    span {
      text-decoration: underline;
    }
  }
}
</style>
