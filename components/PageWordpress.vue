<template>
  <div>
    <LoaderApple v-if="$apollo.queries.page.loading" />
    <div v-else-if="error != ''">{{ error }}</div>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-else class="wp-api" v-html="page?.content"></div>
  </div>
</template>

<script>
import mixinApollo from '~/plugins/mixinApollo'

export default {
  mixins: [mixinApollo],
  props: {
    pageName: {
      type: String,
      required: true,
    },
  },
}
</script>
