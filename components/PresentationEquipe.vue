<template>
  <section class="asso-2">
    <h2>Présentation<br />de l'équipe</h2>
    <ul class="membres">
      <li v-for="membre in equipe" :key="membre.order" class="membre">
        <div class="photo">
          <img
            :src="require(`~/assets/img/association/staff/${membre.photo}`)"
            alt=""
          />
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
      equipe: ['test'],
    }
  },
  async fetch() {
    this.equipe = await this.$content('staff').sortBy('order').fetch()
  },
}
</script>

<style lang="scss">
.asso-2 {
  margin-bottom: 2rem;
  h2 {
    --hauteur-titre: 285px;
    background-image: url('~assets/img/accueil/bg-title2.png');
    line-height: initial;
  }

  ul {
    list-style-type: none;
  }
}

.membres {
  --largeur-photo: initial;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  padding: 0 10%;
  gap: 2rem;

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

  img {
    max-width: 100%;
  }

  h3 {
    font-style: italic;
    font-size: 3rem;
    font-family: var(--font-serif);
    margin-bottom: 1rem;
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
