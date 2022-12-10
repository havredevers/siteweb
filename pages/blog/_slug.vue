<template>
  <article v-if="article" class="blog-article">
    <div class="carousel">
      <div class="page-header">
        <div
          class="carousel-img"
          :style="
            'background-image: url(' +
            article.featuredImage.node.mediaItemUrl +
            ')'
          "
        ></div>
        <div class="carousel-title">
          <h1>{{ article.title }}</h1>
          <div v-sanitize-html="article.excerpt"></div>
          <div class="updatedat">
            Mis à jour le {{ $formatDate(article.modifiedGmt) }}
          </div>
        </div>
      </div>
    </div>
    <section class="section-page">
      <div class="title">
        <client-only>
          <TableOfContent :is-loading="false" />
        </client-only>
      </div>
      <div class="content">
        <div v-sanitize-html="article.content" class="js-toc-content"></div>
      </div>
      <HomeWave :colors="['#e3ad89', '#f4dbc9']" />
    </section>
  </article>
</template>

<script>
import meta from '~/plugins/meta'
import { SINGLE_POST } from '@/apollo/queries'

export default {
  mixins: [meta],
  async asyncData({ app, params }) {
    const client = app.apolloProvider.defaultClient

    const res = await client.query({
      query: SINGLE_POST,
      variables: {
        id: params.slug,
      },
    })

    const article = res.data.post
    const titre = article.title
    const desc = article.excerpt
    const image = article.featuredImage.node.mediaItemUrl

    return { article, titre, desc, image }
  },
}
</script>

<style lang="scss">
.blog-article {
  .updatedat {
    font-size: 0.8rem;
    font-style: italic;

    &:first-letter {
      text-transform: uppercase;
    }
  }

  nav {
    position: sticky;
    top: 115px;
    padding-top: 2rem;
    font-size: 1.1rem;

    li {
      padding: 0.2rem 0;
    }

    li.toc3 {
      margin-left: 1rem;
      font-size: 80%;
    }

    a {
      font-weight: 400;
      text-decoration: none;
      opacity: 0.8;

      &.actif {
        color: var(--clr-bg2);
      }

      &:hover {
        opacity: 1;

        color: var(--clr-bg2);
      }
    }
  }

  #toc_title {
    font-size: 1.6rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .nuxt-content {
    h2,
    h3 {
      padding-top: 100px;
      margin-top: -100px;
    }

    h2,
    h3,
    h4,
    h5,
    p,
    ul,
    ol {
      margin-bottom: 1rem;
    }

    h3 {
      font-size: clamp(1.2rem, 2.7vw, 2rem);
    }

    ol > li {
      list-style-type: decimal;
    }

    li {
      list-style-type: initial;
      margin-left: 1rem;
    }

    img,
    iframe {
      display: block;
      margin: 1rem auto;
    }
  }
}
</style>
