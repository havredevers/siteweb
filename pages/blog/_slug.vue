<template>
  <article class="blog-article">
    <div class="carousel">
      <div class="page-header">
        <div class="carousel-img">
          <nuxt-img
            format="png"
            :src="article.img"
            alt=""
            width="1200"
            height="815"
          />
        </div>
        <div class="carousel-title">
          <h1>{{ article.title }}</h1>
          <p>{{ article.description }}</p>
          <div class="updatedat">
            Mis à jour le {{ $formatDate(article.updatedAt) }}
          </div>
        </div>
      </div>
    </div>
    <section class="section-page">
      <div class="title">
        <nav>
          <div id="toc_title">Table des matières</div>
          <ul aria-labelledby="toc_title">
            <li v-for="link of article.toc" :key="link.id">
              <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
      <div class="content">
        <nuxt-content :document="article" />
      </div>
      <HomeWave :colors="['#e3ad89', '#f4dbc9']" />
    </section>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    try {
      const article = await $content('blog', params.slug).fetch()

      return { article }
    } catch (err) {
      error(err)
    }
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

    li {
      list-style-type: upper-roman;
      margin-left: 2rem;
    }

    a {
      font-weight: 400;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  #toc_title {
    font-weight: bold;
  }

  .nuxt-content {
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
