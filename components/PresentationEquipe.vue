<template>
  <section class="section-page">
    <span id="equipe" class="ancre"></span>
    <div class="title">
      <h2>Présentation <br />de l'équipe</h2>
    </div>
    <div class="content">
      <ul class="membres">
        <li
          v-for="membre in equipe"
          :key="membre.order"
          class="membre"
          data-aos="fade-up"
        >
          <div class="photo">
            <nuxt-img
              format="webp"
              :src="'/association/staff/' + membre.photo"
              alt=""
              loading="lazy"
            />
          </div>
          <h2>{{ membre.nom }}</h2>
          <ul>
            <li v-for="role in membre.roles" :key="role">{{ role }}</li>
          </ul>
        </li>
      </ul>
    </div>
    <HomeWave :colors="['#ead0a3', '#f7e9d4']" />
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
  fetchOnServer: false,
}
</script>

<style lang="scss">
.membres {
  --largeur-photo: initial;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;

  @media (min-width: 550px) {
    flex-direction: row;
    --largeur-photo: 45%;
  }

  @media (min-width: 850px) {
    --largeur-photo: initial;
  }

  @media (min-width: 1200px) {
    --largeur-photo: 45%;
  }
}

.membre {
  flex: var(--largeur-photo);
  max-width: var(--largeur-photo);
  color: var(--clr-secondary);
  margin-top: 2rem;
  text-align: center;

  .photo {
    aspect-ratio: 1/1;
  }

  img {
    max-width: 100%;
  }

  ul {
    font-size: 0.9rem;
  }
}
</style>
