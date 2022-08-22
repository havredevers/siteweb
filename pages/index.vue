<template>
  <div>
    <AccueilCarousel />
    <section class="accueil-1">
      <h1>Nos valeurs</h1>
      <ul>
        <li>
          <div class="title-wrapper">
            <div class="logo">
              <CustomImage src="/ui/accueil/ver.png" alt="" />
            </div>
            <h2>Prendre soin des êtres vivants</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            ullam maxime temporibus, et doloremque harum fugit magni expedita
            omnis voluptates tempora optio repellat. Harum voluptas alias
            molestiae ipsam veniam iusto.
          </p>
        </li>
        <li>
          <div class="title-wrapper">
            <div class="logo">
              <CustomImage src="/ui/accueil/plante.png" alt="" />
            </div>
            <h2>Prendre soin du sol</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            ullam maxime temporibus, et doloremque harum fugit magni expedita
            omnis voluptates tempora optio repellat. Harum voluptas alias
            molestiae ipsam veniam iusto.
          </p>
        </li>
        <li>
          <div class="title-wrapper">
            <div class="logo">
              <CustomImage src="/ui/accueil/solidarite.png" alt="" />
            </div>
            <h2>Partager son temps et ses ressources</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            ullam maxime temporibus, et doloremque harum fugit magni expedita
            omnis voluptates tempora optio repellat. Harum voluptas alias
            molestiae ipsam veniam iusto.
          </p>
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
  h1 {
    --hauteur-titre: clamp(130px, 30vw, 215px);
    background-image: url('/ui/accueil/bg-title1.png');
    color: var(--clr-secondary);
  }

  ul {
    padding: 0 2rem;
    margin-top: 1rem;
    gap: 1rem;

    @media (min-width: 850px) {
      display: flex;
      justify-content: space-evenly;
    }

    li {
      list-style-type: none;
      flex: 0 0 33%;
      padding-bottom: 2rem;

      h2 {
        font-size: clamp(1.2rem, 2vw, 2rem);
        margin: 0 0 1rem 0.5rem;
        font-family: 'Times New Roman', Times, serif;
      }

      p {
        margin-left: 58px;

        @media (min-width: 850px) {
          margin-left: clamp(53px, 20%, 83px);
        }
      }
    }

    .title-wrapper {
      display: flex;

      .logo {
        flex: 0 0 50px;

        @media (min-width: 850px) {
          flex: 0 0 clamp(45px, 15%, 75px);
        }

        img {
          width: 100%;
        }
      }
    }
  }

  @media (min-width: 850px) {
    padding: 0 10%;
  }
}
</style>
