<!-- eslint-disable vue/no-v-html -->
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
          <div v-html="article.excerpt"></div>
          <div class="updatedat">
            Mis à jour le {{ $formatDate(article.modifiedGmt) }}
          </div>
        </div>
      </div>
    </div>
    <section class="section-page">
      <div class="title with-toc">
        <TableOfContent :is-loading="$fetchState.pending || !hasHeadings" />
      </div>
      <div class="content">
        <div class="js-toc-content" v-html="article.content"></div>
      </div>
      <HomeWave :colors="['var(--clr-content2)', 'var(--clr-content1)']" />
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
      hasHeadings: false,
      slider: {},
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
    const client = this.$apolloProvider.defaultClient
    const res = await client.query({
      query: SINGLE_POST,
      variables: {
        id: this.$route.params.slug || '',
      },
    })
    if (res.data.post) {
      this.article = res.data.post
      this.titre = this.article.title
      this.desc = this.article.excerpt
      this.image = this.article.featuredImage.node.mediaItemUrl
    }
  },
  head() {
    return {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/tiny-slider.css',
        },
      ],
      meta: [
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          property: 'og:type',
          content: 'article',
        },
        {
          property: 'article:published_time',
          content: this.article.modifiedGmt,
        },
        {
          property: 'article:author',
          content: this.article.author.node.name,
        },
      ],
    }
  },
  watch: {
    article() {
      import('~/node_modules/tiny-slider/src/tiny-slider').then(({ tns }) => {
        const regex = /<h2.+id=".+".+<\/h2>/g
        this.hasHeadings = this.article.content.search(regex) !== -1
        const hasCarousel = this.createCarousel()

        if (hasCarousel)
          tns({
            container: '.wp-block-gallery',
            preventScrollOnTouch: 'auto',
            preventActionWhenRunning: true,
            items: 1,
            navAsThumbnails: true,
            navContainer: '.dots',
            controls: false,
            responsive: {
              1200: {
                items: 2,
                gutter: 10,
              },
              1600: {
                items: 3,
                gutter: 10,
              },
            },
          })
      })
    },
  },
  methods: {
    createCarousel() {
      const divs = document.querySelectorAll('.wp-block-gallery')
      if (divs.length === 0) return false

      divs.forEach((div) => {
        let newGallery = document.createElement('div')
        newGallery.classList.add('wp-block-gallery')

        const dotsContainer = document.createElement('ul')
        dotsContainer.classList.add('dots')

        const sliders = div.querySelectorAll('.wp-block-image')
        sliders.forEach((slider) => {
          const newSlider = document.createElement('div')
          const img = slider.querySelector('img')
          img.addEventListener('click', () => {
            document.querySelector('#modal').style.display = 'flex'
            document.querySelector('#modal img').src = img.src
            document.querySelector('#modal .caption').innerHTML = img.alt
          })
          newSlider.appendChild(img)
          newGallery.appendChild(newSlider)

          const dot = document.createElement('li')
          const miniature = img.cloneNode(true)
          miniature.classList.add('dot-img')
          dot.classList.add('dot')
          dot.appendChild(miniature)
          dotsContainer.appendChild(dot)
        })

        div.parentNode.replaceChild(newGallery, div)

        newGallery = document.querySelector('.wp-block-gallery')
        newGallery.parentNode.insertBefore(
          dotsContainer,
          newGallery.nextSibling
        )
      })

      return true
    },
  },
}
</script>

<style lang="scss">
.blog-article {
  .js-toc-content > * {
    margin-bottom: 1rem;
  }

  .updatedat {
    font-size: 0.8rem;
    font-style: italic;

    &:first-letter {
      text-transform: uppercase;
    }
  }
}
</style>
