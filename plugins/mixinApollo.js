import { GET_PAGE } from '@/apollo/queries'

export default {
  data() {
    return {
      error: '',
    }
  },
  computed: {
    name() {
      return this.$route.name === 'index' ? 'accueil' : this.$route.name
    },
  },
  apollo: {
    page: {
      query: GET_PAGE,
      prefetch: false,
      variables() {
        return { id: this.name }
      },
      update(data) {
        return data.page.content
      },
      error(err) {
        this.error = err.message
      },
    },
  },
}
