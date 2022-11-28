export default {
  data() {
    return {
      root: 'https://www.havredevers.fr',
      // Set these variables in each page
      // in data() or asyncData()
      // titre: '',
      // desc: '',
      // image: '',
    }
  },
  computed: {
    title() {
      const debutTitre = 'Havre de Vers - '

      return this.titre === ''
        ? debutTitre + this.capitalizeFirstLetter(this.$route.name)
        : debutTitre + this.titre
    },
    url() {
      return this.root + this.$route.path
    },
    img() {
      return this.image === ''
        ? 'https://www.havredevers.fr/opengraph_img.png'
        : this.image.substring(0, 4) === 'http'
        ? this.image
        : this.root + this.image
    },
  },
  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    },
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.desc,
        },
        // Facebook Meta Tags
        {
          hid: 'og:url',
          property: 'og:url',
          content: this.url,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.desc,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.img,
        },
        // Twitter Meta Tags
        {
          hid: 'twitter:url',
          property: 'twitter:url',
          content: this.url,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.desc,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.img,
        },
      ],
    }
  },
}
