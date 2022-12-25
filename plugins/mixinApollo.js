import { GET_PAGE } from '@/apollo/queries'

export default {
  data() {
    return {
      error: '',
    }
  },
  computed: {
    name() {
      return this.pageName ? this.pageName : this.$route.name
    },
    imgHeader() {
      return (
        'background-image: ' +
        (this.page
          ? 'url(' + this.page.featuredImage.node.mediaItemUrl + ')'
          : 'none')
      )
    },
  },
  apollo: {
    page: {
      query: GET_PAGE,
      variables() {
        return { id: this.name }
      },
      update(data) {
        if (this.$route.name === 'association') {
          this.nbParcours = parseInt(data.page.parcours)
          this.nbCollecte = parseInt(data.page.collecte)
        }

        return data.page
      },
      error(err) {
        this.error = err.message
      },
      watchLoading(isLoading, countModifier) {
        if (process.client && !isLoading) {
          setTimeout(() => {
            this.$checkYoutube()
          }, 25)
        }
      },
    },
  },
}
