<template>
  <NuxtLink :to="article.path">
    <div class="article-logo">
      <img :src="article.img" alt="" />
    </div>
    <div class="article-content">
      <div class="article-title">
        <h2>{{ article.title }}</h2>
        <small>{{ 'Mis en ligne le ' + $formatDate(article.updatedAt) }}</small>
      </div>
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
  margin-bottom: 3rem;

  a {
    --img-size: 250px;
    display: block;
    max-width: 850px;
    color: var(--clr-font);

    &:hover img {
      filter: brightness(75%);
      transform: translate(-50%, -50%) scale(0.8);
    }
  }

  &-logo {
    width: var(--img-size);
    height: var(--img-size);
    flex: 0 0 var(--img-size);
    overflow: hidden;
    border-radius: 15px;
    margin: 0 auto;
    position: relative;

    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      filter: brightness(35%);
      transition: all 0.3s ease-in-out;
    }
  }

  &-title small {
    color: #ddd;
  }

  &-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(0.8 * var(--img-size));
    color: white;
    flex: 0 0 70%;

    p {
      margin-top: 1.5rem;
      display: none;
    }

    span {
      color: var(--clr-green3);
      font-weight: bold;
      margin-top: 1.5rem;
      display: block;
      text-decoration: underline;
      display: none;
    }
  }

  @media (min-width: 1200px) {
    a {
      display: flex;
    }

    &-content {
      margin-left: 1.5rem;
      position: initial;
      transform: initial;
      color: var(--clr-font);

      small {
        color: #666;
      }

      p,
      span {
        display: block;
      }
    }
  }
}
</style>
