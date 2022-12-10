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
      <div class="title">
        <TableOfContent :is-loading="$fetchState.pending" />
      </div>
      <div class="content">
        <div class="js-toc-content" v-html="article.content"></div>
      </div>
      <HomeWave :colors="['#e3ad89', '#f4dbc9']" />
    </section>
    <ImageModal />
  </article>
</template>

<script>
import meta from '~/plugins/meta'

import { SINGLE_POST } from '@/apollo/queries'

export default {
  mixins: [meta],
  data() {
    return {
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
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/tiny-slider.css',
      },
    ],
  },
  watch: {
    article() {
      if (!this.$fetchState.pending && process.client) {
        import('~/node_modules/tiny-slider/src/tiny-slider').then(({ tns }) => {
          this.createCarousel(document.querySelector('.wp-block-gallery'))

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
      }
    },
  },
  methods: {
    createCarousel(div) {
      const modal = document.createElement('div')
      modal.id = 'modal'
      modal.classList.add('modal')

      let newGallery = document.createElement('div')
      newGallery.classList.add('wp-block-gallery')

      const dotsContainer = document.createElement('ul')
      dotsContainer.classList.add('dots')

      const sliders = div.querySelectorAll('.wp-block-image')
      sliders.forEach((slider) => {
        const newSlider = document.createElement('div')
        const img = slider.querySelector('img')
        img.addEventListener('click', () => {
          console.log(this)
          document.querySelector('#modal').style.display = 'block'
          document.querySelector('#modal img').src = img.src
          document.querySelector('#modal .caption').innerHTML = img.alt
        })
        newSlider.appendChild(img)
        newGallery.appendChild(newSlider)

        const dot = document.createElement('li')
        dot.classList.add('dot')
        dot.appendChild(img.cloneNode(true))
        dotsContainer.appendChild(dot)
      })

      div.parentNode.replaceChild(newGallery, div)

      newGallery = document.querySelector('.wp-block-gallery')
      newGallery.parentNode.insertBefore(dotsContainer, newGallery.nextSibling)
    },
    bindImg() {},
  },
}
</script>

<style lang="scss">
.blog-article {
  .section-page .content {
    h2[id],
    h3[id] {
      --menu-height: 110px;
      padding-top: var(--menu-height);
      margin-top: calc(-1 * var(--menu-height));
    }
  }

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
