<template>
  <div>
    <section class="asso-1">
      <h2>Qui sommes-nous ?</h2>
      <p>
        HAVRE DE VERS est née, le 14 janvier 2016, d'une envie commune de trois
        amis, Marian, Flavien et Léo, afin d'apporter une solution face å la
        situation de crise importante dans les domaines de l'agriculture, de
        l'alimentation et de la santé.
      </p>
      <p>
        Gaspillage et inégalité alimentaire, impératifs écologiques, hégémonie
        de l'exploitation animate industrielle et de la grande distribution,
        déperdition des agricultures paysannes, perte de biodiversité, manque de
        résilience écologique, tres faible support des initiatives å
        l'agriculture urbaine: autant d'enjeux qui nous ont mobilisé pour
        construire et expérimenter un nouveau modéle associatif de gestion
        locale des biodéchets, économique et alimentaire. Basée sur une
        conception permaculturelle, dans un environnement urbain, cette
        association vise å une transformation sociale et écologique de notre
        vision et de nos méthodes de gestion des matiéres organiques (ou la
        matiére fabriquée par les étres vivants) en générant de nouvelles
        solidarités. Nous revalorisons les biodéchets par lombricompostage en
        vue d'assurer :
      </p>
      <ul>
        <li>
          Une collecte décentralisée locale des biodéchets en milieu urbain ;
        </li>
        <li>
          Une transformation des biodéchets en un amendement organique de haute
          valeur agronomique par lombricompostage;
        </li>
        <li>
          Une sensibilisation à l'impact écologique et économico-social de la
          gestion des biodéchets.
        </li>
      </ul>
    </section>
    <PresentationEquipe />
  </div>
</template>

<script>
export default {
  mounted() {
    this.$handleImagesLoad()
  },
}
</script>

<style lang="scss">
.asso-1 {
  margin-bottom: 2rem;
  font-size: 1.5rem;

  h2 {
    --hauteur-titre: 240px;
    margin-top: -3rem;
    color: var(--clr-bg);
    background-image: url('/ui/association/bg-title3.png');

    @media (min-width: 550px) {
      --hauteur-titre: 300px;
    }

    @media (min-width: 850px) {
      --hauteur-titre: 385px;
    }
  }

  p,
  ul {
    padding: 0 10%;
    text-align: center;
  }

  p + p,
  ul,
  li {
    margin-top: 2rem;
  }
}
</style>
