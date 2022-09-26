<template>
  <div class="accueil">
    <AccueilCarousel />
    <section class="accueil-1">
      <div class="title">
        <h1>Nos valeurs</h1>
      </div>
      <div class="content">
        <ul class="valeurs">
          <li data-aos="fade-up">
            <div class="logo">
              <img src="/ui/accueil/ver.png" alt="" />
            </div>
            <div class="text">
              <h2>Prendre soin des êtres vivants</h2>
              <p>
                La permaculture est un mouvement humaniste qui vise à améliorer
                la qualité de vie des hommes et des femmes. Pour prendre soin
                des autres, il est nécessaire de prendre soin de soi… Vaste
                programme dans lequel nous nous engageons car gaspillage et
                inégalité alimentaire, impératifs écologiques, déperdition des
                agricultures paysannes, perte de biodiversité sont autant
                d'enjeux qui nous ont mobilisé pour construire et expérimenter
                un nouveau modèle associatif de gestion locale des biodéchets,
                économique et alimentaire.
              </p>
            </div>
          </li>
          <li data-aos="fade-up">
            <div class="logo">
              <img src="/ui/accueil/plante.png" alt="" />
            </div>
            <div class="text">
              <h2>Prendre soin de notre environnement</h2>
              <p>
                La planète abrite des ressources énergétiques et minérales en
                quantité grande, mais pas infinie. Notre niveau de consommation
                et sa croissance exponentielle (appelée par les vœux de tous les
                politiques et économistes) nous mettront en situation de
                “rupture de stock” dans les prochaines générations.
              </p>
            </div>
          </li>
          <li data-aos="fade-up">
            <div class="logo">
              <img src="/ui/accueil/solidarite.png" alt="" />
            </div>
            <div class="text">
              <h2>Partager son temps et ses ressources</h2>
              <p>
                Le bon sens et l’auto-protection nous invitent à prendre grand
                soin de notre environnement naturel et de sa biodiversité et
                effectuer un aller retour entre les deux. De plus la
                permaculture reconnaît à tout être vivant une valeur
                inestimable, simplement en tant qu’expression de la diversité du
                vivant. Nous allons de l'assiette au jardin et revenons du
                jardin à l'assiette en distribuant le surplus à l'un comme à
                l'autre.
              </p>
            </div>
          </li>
        </ul>
        <div data-aos="fade-up">
          <NuxtLink to="/association" class="cta">
            Découvrir l'association
          </NuxtLink>
        </div>
      </div>
      <div class="wave">
        <img src="/ui/wave_final.svg" />
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
}
</script>

<style lang="scss">
.accueil section {
  position: relative;

  .title {
    flex: 0 0 33%;
    text-align: center;
    padding: 6%;
  }

  h2 {
    font-size: clamp(1.5rem, 4vw, 2.5rem);
  }

  .wave {
    display: none;
    position: absolute;
    top: 99%;
    width: 100%;
    z-index: 2;

    img {
      width: 100%;
    }

    @media (min-width: 850px) {
      display: initial;
    }
  }

  .content {
    flex: 0 0 67%;
    padding: 6% 10% 1rem 10%;

    ul.valeurs li {
      display: flex;
      margin-bottom: 3rem;

      .logo {
        flex: 0 1 10%;

        img {
          width: 100%;
        }
      }

      .text {
        flex: 0 1 90%;
        margin-left: 1rem;
      }
    }
  }

  &.accueil-1 {
    h2 {
      margin-bottom: 1rem;
    }

    .title {
      background-color: #e3ad89;
    }

    .content {
      background-color: #f4dbc9;
    }
  }

  &.accueil-2 {
    .title {
      background-color: #ead0a3;
    }

    .content {
      background-color: #f7e9d4;
    }
  }

  @media (min-width: 850px) {
    display: flex;

    h1 {
      text-align: initial;
      max-width: 350px;
    }

    .content {
      max-width: 67%;
    }
  }
}

@media (min-width: 850px) {
  .accueil .accueil-2 > :not(.wave),
  .footer > * {
    padding-top: var(--wave-height);
  }
}
</style>
