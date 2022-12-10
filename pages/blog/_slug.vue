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
  data() {
    return {
      article: {
        title: '',
        excerpt: '',
        content: '',
        modifiedGmt: '',
        featuredImage: {
          node: {
            altText: '',
            mediaItemUrl: '',
          },
        },
        author: {
          node: {
            name: '',
          },
        },
      },
      titre: '',
      desc: '',
      image: '',
    }
  },
  async fetch() {
    const slug = this.$route.params.slug
    const client = this.$apolloProvider.defaultClient
    const res = await client.query({
      query: SINGLE_POST,
      variables: {
        id: slug,
      },
    })

    this.article = res.data.post
    this.titre = this.article.title
    this.desc = this.article.excerpt
    this.image = this.article.featuredImage.node.mediaItemUrl
  },
}
</script>

<style lang="scss">
.blog-article {
  .section-page .content *[id] {
    --menu-height: 110px;
    padding-top: var(--menu-height);
    margin-top: calc(-1 * var(--menu-height));
  }

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
}
</style>
