<template>
  <div :class="'error-' + error.statusCode">
    <section class="section-page">
      <div class="title">
        <h1>Erreur {{ error.statusCode }}</h1>
      </div>
      <div class="content">
        <p v-if="error.statusCode === 404" class="error">
          La page demandée a été compostée
        </p>
        <p v-else class="error">Une erreur est apparue</p>
        <NuxtLink to="/" class="cta">Retour à l'accueil</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'default',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss">
.error {
  font-size: clamp(1.7rem, 4vw, 2.5rem);
  margin-bottom: 3rem;
}
</style>
