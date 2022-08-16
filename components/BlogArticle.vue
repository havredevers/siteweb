<template>
  <NuxtLink :to="article.path" class="article">
    <h3>{{ article.title }}</h3>
    <small>{{ 'Mis à jour le ' + $formatDate(article.updatedAt) }}</small>
    <div class="article-logo">
      <img src="@/assets/img/accueil/shape1.png" alt="" />
      <div class="mask">
        <img :src="article.img" alt="" />
      </div>
    </div>
    <div>
      <span class="btn">Lire l'article</span>
      <div style="clear: both"></div>
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
  display: block;
  text-decoration: none;
  max-width: 455px;
  margin: auto;

  &:hover .btn {
    color: var(--clr-secondary);
    background: var(--clr-bg);
  }

  h3 {
    color: var(--clr-secondary);
    text-align: center;
    font-size: 2rem;
    font-family: 'FRUIT PUNCH';
    letter-spacing: 2px;
  }

  small {
    display: block;
    text-align: center;
    color: var(--clr-primary);
    padding-bottom: 1rem;
  }

  &-logo {
    position: relative;
  }

  .mask {
    transition: all 0.3s ease-in-out;
    transform: translate(-10%, 20%) scale(0.8);
    position: absolute;
    inset: 0 0 0 -5px;
    display: flex;
    align-items: center;
    mask-repeat: no-repeat;
    mask-position: center;
    mask-size: contain;
    mask-image: url(data:image/png;base64,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);

    img {
      object-fit: cover;
      height: 100%;
    }
  }

  img {
    width: 100%;
  }

  .btn {
    margin-top: 30px;
    color: var(--clr-bg);
    background: var(--clr-secondary);
    border: 1px solid var(--clr-secondary);
    border-radius: 0.375rem;
    padding: 0.75rem 0.375rem;
    transition: all 0.3s ease-in-out;
    float: right;
  }
}
</style>
