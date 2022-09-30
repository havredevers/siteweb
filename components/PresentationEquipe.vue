<template>
  <section class="asso-2">
    <h1>Présentation de l'équipe</h1>
    <ul class="membres">
      <li v-for="membre in equipe" :key="membre.order" class="membre">
        <div class="photo">
          <img :src="'/staff/' + membre.photo" alt="" />
        </div>
        <h3>{{ membre.nom }}</h3>
        <ul>
          <li v-for="role in membre.roles" :key="role">{{ role }}</li>
        </ul>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      equipe: [],
    }
  },
  async fetch() {
    this.equipe = await this.$content('staff').sortBy('order').fetch()
  },
}
</script>

<style lang="scss">
.membres {
  --largeur-photo: initial;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;

  @media (min-width: 550px) {
    flex-direction: row;
    --largeur-photo: 45%;
  }

  @media (min-width: 850px) {
    flex-direction: row;
    --largeur-photo: 45%;
  }

  @media (min-width: 1200px) {
    --largeur-photo: 30%;
  }
}

.membre {
  flex: var(--largeur-photo);
  max-width: var(--largeur-photo);
  color: var(--clr-secondary);
  margin-top: 2rem;

  .photo {
    aspect-ratio: 1/1;
  }

  img {
    max-width: 100%;
  }

  h3 {
    font-style: italic;
    font-size: 3rem;
    font-family: var(--font-serif);
  }

  ul {
    font-size: 1.5rem;
  }

  h3,
  ul {
    text-align: center;
  }
}
</style>
