<template>
  <div class="prestations container">
    <h1>Nos prestations</h1>
    <ul class="list-prestas">
      <li v-for="presta in prestations" :key="presta.slug" class="presta">
        <h2>
          {{ presta.title }}
          <small>{{ '(prix : ' + presta.prix + '€)' }}</small>
        </h2>
        <div class="desc">{{ presta.description }}</div>
        <div class="logo">
          <img :src="presta.img" alt="" />
        </div>
        <nuxt-content :document="presta" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, $variables, route }) {
    const prestations = await $content('prestas')
      // .without(['body'])
      .sortBy('title')
      .fetch()

    return { prestations }
  },
}
</script>

<style lang="scss">
.prestations {
  & > ul {
    display: flex;
    flex-wrap: wrap;
  }
}

.presta {
  max-width: 500px;
  margin: 0 auto 2rem;

  .logo {
    max-width: 350px;

    img {
      max-width: 100%;
    }
  }

  li {
    list-style-type: disc;
    margin-left: 1rem;
  }

  .nuxt-content > * {
    margin-bottom: 1rem;
  }
}
</style>
