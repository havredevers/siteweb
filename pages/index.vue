<template>
  <div>
    <AccueilCarousel />
    <section class="accueil-1">
      <div class="container">
        <h1>Nos valeurs</h1>
        <ul>
          <li data-aos="fade-up" data-aos-delay="0">
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
          <li data-aos="fade-up" data-aos-delay="100">
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
          <li data-aos="fade-up" data-aos-delay="200">
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
        <NuxtLink to="/association" class="cta">
          Découvrir l'association
        </NuxtLink>
      </div>
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
  padding-top: 1rem;

  h1 {
    --hauteur-titre: clamp(130px, 30vw, 215px);
    background-image: url('/ui/accueil/bg-title1.png');
    color: var(--clr-secondary);
  }

  ul {
    margin-top: 1rem;

    @media (min-width: 850px) {
      display: flex;
      justify-content: space-between;
    }

    li {
      list-style-type: none;
      flex: 0 0 30%;
      padding-bottom: 2rem;

      h2 {
        font-size: clamp(1.2rem, 2vw, 2rem);
        margin-left: 1.2rem;
      }

      p {
        margin-left: calc(1.2rem + 50px);
        margin-top: 1rem;

        @media (min-width: 850px) {
          margin-left: calc(1.2rem + clamp(45px, 5vw, 75px));
        }
      }
    }

    .title-wrapper {
      display: flex;
      align-items: center;

      .logo {
        flex: 0 0 50px;

        @media (min-width: 850px) {
          flex: 0 0 clamp(45px, 5vw, 75px);
        }

        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
