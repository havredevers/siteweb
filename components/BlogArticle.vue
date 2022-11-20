<template>
  <NuxtLink :to="article.path">
    <div class="article-logo">
      <nuxt-img format="png" :src="article.img" alt="" loading="lazy" />
    </div>
    <div class="article-content">
      <div class="article-title">
        <h2>{{ article.title }}</h2>
        <small>{{ 'Mis en ligne le ' + $formatDate(article.updatedAt) }}</small>
      </div>
      <p>
        {{ truncateString(article.description, 200) }}
      </p>
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
  methods: {
    truncateString(str, num) {
      if (str.length <= num) {
        return str
      }
      return str.slice(0, num) + '...'
    },
  },
}
</script>

<style lang="scss">
.article {
  margin-bottom: 3rem;
  text-align: center;

  a {
    font-weight: initial;
    text-decoration: none;
    --img-size: 100%;
    display: inline-block;
    margin: auto;
    width: 100%;
    color: var(--clr-font);
    position: relative;
    padding: 1rem;
    border-radius: 15px;
    transition: all 0.3s ease-in-out;

    &:hover {
      .article-title {
        opacity: 0;
        height: 0;
      }

      span {
        height: initial;
        opacity: 1;
        text-align: center;
        padding: 1rem;
        display: inline-block;
      }

      img {
        filter: opacity(85%);
        transform: scale(1.15);
      }

      @media (min-width: 1200px) {
        background: rgba(0, 0, 0, 0.1);
      }
    }
  }

  &-logo {
    width: var(--img-size);
    flex: 0 0 var(--img-size);
    overflow: hidden;
    margin: 0 auto;
    border-radius: 15px;
    background: black;
    aspect-ratio: 16/11;
    display: flex;
    align-items: center;

    img {
      display: block;
      filter: opacity(50%);
      transition: all 0.3s ease-in-out;
      width: 100%;
      border-radius: 15px;
    }

    @media (min-width: 1200px) {
      --img-size: 35%;
    }
  }

  &-title {
    transition: all 0.3s ease-in-out;
    overflow: hidden;

    small {
      color: #ddd;
    }
  }

  &-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: var(--img-size);
    padding: 1rem;
    color: white;
    flex: 0 0 60%;

    p {
      margin-top: 1.5rem;
      display: none;
      hyphens: auto;
    }

    span {
      color: var(--clr-green3);
      background: white;
      border-radius: 10px;
      font-weight: bold;
      overflow: hidden;
      display: block;
      height: 0;
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
    }
  }

  @media (min-width: 1200px) {
    text-align: left;

    a {
      display: flex;
      align-items: flex-start;

      &:hover {
        .article-title {
          opacity: initial;
          height: initial;
        }

        img {
          filter: opacity(100%);
        }

        span {
          text-align: left;
          padding: 0;
          text-decoration: underline;
        }
      }
    }

    &-content {
      margin-left: 1.5rem;
      position: initial;
      transform: initial;
      color: var(--clr-font);
      padding: 0;

      small {
        color: #666;
      }

      p {
        display: block;
      }

      span {
        margin-top: 1.5rem;
        height: initial;
        opacity: initial;
        overflow: initial;
        background: transparent;
        border-radius: 0;
      }
    }
  }
}
</style>
