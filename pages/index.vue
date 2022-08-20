<template>
  <div>
    <AccueilCarousel />
    <section class="accueil-1">
      <div class="accroche">
        <div class="title">Ici, on voit la vie en VERS&nbsp;!</div>
        <p>
          Association pour l'accompagnement d'une revalorisation des bio-déchets
          au HAVRE
        </p>
      </div>
    </section>
    <section class="accueil-2">
      <h2>Nos valeurs</h2>
      <ul>
        <li>
          <CustomImage src="/ui/accueil/ver.png" alt="" />
          <h3>Prendre soin des êtres vivants</h3>
        </li>
        <li>
          <CustomImage src="/ui/accueil/plante.png" alt="" />
          <h3>Prendre soin du sol</h3>
        </li>
        <li>
          <CustomImage src="/ui/accueil/solidarite.png" alt="" />
          <h3>Partager son temps et ses ressources</h3>
        </li>
      </ul>
    </section>
    <LastActus :articles="articles" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('blog')
      .without(['body'])
      .sortBy('updatedAt', 'desc')
      .limit(2)
      .fetch()
    return { articles }
  },
  mounted() {
    this.$handleImagesLoad()
  },
}
</script>

<style lang="scss">
.accueil-1 {
  position: relative;
  background-image: url('/ui/accueil/ver-main.png');
  background-repeat: no-repeat;
  background-position: right;
  background-size: cover;

  @media (min-width: 850px) {
    background-size: initial;
    min-height: 1050px;
  }
  .accroche {
    position: relative;
    color: var(--clr-primary);
    padding: 2rem 0;
    max-width: 770px;

    & > * {
      padding: 1rem 2rem;
      background-color: rgba(238, 236, 228, 0.8);
    }

    .title {
      font-family: var(--font-serif);
      font-style: italic;
      font-weight: 300;
      font-size: 2rem;
      margin: 1rem 0 5rem;

      @media (min-width: 550px) {
        font-size: 3rem;
      }

      @media (min-width: 850px) {
        margin-top: 5rem;
        font-size: 5rem;
      }
    }

    p {
      font-weight: bold;
      font-size: 1.2rem;

      @media (min-width: 550px) {
        font-size: 1.5rem;
      }

      @media (min-width: 850px) {
        font-size: 2rem;
      }
    }
  }
}

.accueil-2 {
  color: var(--clr-secondary);

  @media (min-width: 850px) {
    margin-top: -7rem;
  }

  h2 {
    --hauteur-titre: 250px;
    background-image: url('/ui/accueil/bg-title1.png');
    color: inherit;

    @media (min-width: 850px) {
      margin-top: 0;
    }
  }

  ul {
    padding: 0 2rem;
    margin-top: 1rem;

    @media (min-width: 850px) {
      display: flex;
      justify-content: space-evenly;
    }

    li {
      list-style-type: none;
      text-align: center;
      font-weight: bold;
      font-size: 2rem;
      flex: 0 0 25%;
      padding-bottom: 2rem;

      img {
        width: 100%;
        max-width: 200px;
      }

      h3 {
        margin-top: 1rem;
        padding: 0 1rem;
        font-size: 2rem;
      }
    }
  }
}
</style>
