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
  text-align: center;

  a {
    --img-size: 250px;
    display: inline-block;
    max-width: 850px;
    color: var(--clr-font);

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
      }

      img {
        filter: opacity(85%);
        transform: scale(1.15);
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

    img {
      display: block;
      filter: opacity(50%);
      transition: all 0.3s ease-in-out;
      width: 100%;
      border-radius: 15px;
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
    flex: 0 0 70%;

    p {
      margin-top: 1.5rem;
      display: none;
    }

    span {
      color: var(--clr-green3);
      background: white;
      border-radius: 10px;
      font-weight: bold;
      overflow: hidden;
      display: block;
      text-decoration: underline;
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
        background: transparent;
        border-radius: 0;
      }
    }
  }
}
</style>
