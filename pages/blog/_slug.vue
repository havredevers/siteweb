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
            <li
              v-for="link of article.toc"
              :key="link.id"
              :class="{ toc2: link.depth === 2, toc3: link.depth === 3 }"
            >
              <NuxtLink :to="`#${link.id}`" :data-toc="link.id">{{
                link.text
              }}</NuxtLink>
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
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const els = document.querySelectorAll('h2,h3,h4,h5,h6')
      els.forEach((el) => {
        const elTop = el.getBoundingClientRect().top

        if (elTop < 1) {
          const current = document.querySelector(
            '.section-page .title nav a[class~="actif"]'
          )

          if (current) {
            current.classList.remove('actif')
          }

          document
            .querySelector('.section-page .title nav a[data-toc=' + el.id + ']')
            .classList.add('actif')
        }
      })
    },
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
      padding: 0.2rem 0;
    }

    li.toc3 {
      margin-left: 1rem;
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
    font-size: 1.5rem;
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
