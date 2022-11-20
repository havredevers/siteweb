<template>
  <div class="accueil">
    <AccueilCarousel />
    <section class="section-page">
      <span id="valeurs" class="ancre"></span>
      <div class="title">
        <h1>Nos <br />valeurs</h1>
      </div>
      <div class="content">
        <ul class="valeurs">
          <li data-aos="fade-up">
            <div class="logo">
              <nuxt-img
                format="png"
                src="/ui/accueil/ver.png"
                alt=""
                lazy="loading"
              />
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
              <nuxt-img
                format="png"
                src="/ui/accueil/plante.png"
                alt=""
                lazy="loading"
              />
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
              <nuxt-img
                format="png"
                src="/ui/accueil/solidarite.png"
                alt=""
                lazy="loading"
              />
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
      <HomeWave :colors="['#e3ad89', '#f4dbc9']" />
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
.accueil {
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

  .content .cta {
    margin: 1rem auto;
  }

  h2 {
    margin-bottom: 1rem;
    font-family: Vibur, 'Times New Roman', Times, serif;
    font-weight: 400;
  }
}
</style>
