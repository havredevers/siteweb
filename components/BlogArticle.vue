<template>
  <NuxtLink :to="'/blog/' + article.slug">
    <div class="article-logo">
      <img
        :src="article.featuredImage.node.mediaItemUrl"
        :alt="article.featuredImage.node.altText"
        loading="lazy"
      />
    </div>
    <div class="article-content">
      <div class="article-title">
        <h2>{{ article.title }}</h2>
        <small>{{
          'Mis en ligne le ' + $formatDate(article.modifiedGmt)
        }}</small>
      </div>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="article.excerpt"></div>
      <span>Lire l'article</span>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.page .article a .article-logo {
  width: var(--img-size);
  flex: 0 0 var(--img-size);
  overflow: hidden;
  margin: 0 auto;
  border-radius: 15px;
  background: black;
  aspect-ratio: 16/11;
  display: flex;
  align-items: center;
  margin: auto;

  img {
    display: block;
    width: 100%;
    border-radius: 15px;
    z-index: 0;
    transition: all 0.3s ease-in-out;
  }

  @media (min-width: 1200px) {
    --img-size: 35%;
  }
}

.article {
  margin-bottom: 1rem;
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
    border-radius: 15px;
    transition: all 0.3s ease-in-out;

    &:hover {
      .article-title {
        opacity: 0;
      }

      span {
        height: initial;
        opacity: 1;
        text-align: center;
        padding: 1rem;
        display: inline-block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      img {
        transform: scale(1.15);
        opacity: 0.9;
      }

      @media (min-width: 1200px) {
        background: rgba(0, 0, 0, 0.1);
      }
    }
  }

  &-title {
    overflow: hidden;
    width: 75%;
    margin: auto;
    padding: 1rem;
    border-radius: 15px;
    background: rgba(0, 0, 0, 0.7);

    small {
      color: #ddd;
      display: none;
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
    margin-bottom: 3rem;

    a {
      display: flex;
      align-items: flex-start;
      padding: 1rem;

      &:hover {
        .article-title {
          opacity: initial;
          height: initial;
        }

        span {
          text-align: left;
          padding: 0;
          text-decoration: underline;
          position: relative;
          top: 0;
          left: 0;
          transform: initial;
        }
      }
    }

    &-title {
      padding: 0;
      background: initial;
      border-radius: initial;
      width: initial;

      small {
        display: initial;
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
