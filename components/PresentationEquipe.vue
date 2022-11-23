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
              format="png"
              :src="'/association/staff/' + membre.photo"
              alt=""
              loading="lazy"
            />
          </div>
          <h3>{{ membre.nom }}</h3>
          <ul>
            <li v-for="role in membre.roles" :key="role">{{ role }}</li>
          </ul>
        </li>
      </ul>
    </div>
    <HomeWave :colors="['#e3ad89', '#f4dbc9']" />
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
  justify-content: space-evenly;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  align-items: flex-start;

  @media (min-width: 550px) {
    flex-direction: row;
    --largeur-photo: 30%;
  }

  @media (min-width: 850px) {
    --largeur-photo: initial;
  }

  @media (min-width: 1200px) {
    --largeur-photo: 30%;
  }
}

.membre {
  flex: var(--largeur-photo);
  max-width: var(--largeur-photo);
  color: var(--clr-secondary);
  margin: 2rem 3% 2rem 0;
  text-align: center;

  h3 {
    font-size: clamp(1.5rem, 2.7vw, 2.5rem);
  }

  .photo {
    padding-bottom: 88%;
    height: 0;
    overflow: hidden;
    border-radius: 50%;
    box-shadow: 5px 5px 5px grey;
  }

  img {
    max-width: 100%;
  }

  ul {
    font-size: 0.9rem;
  }
}
</style>
