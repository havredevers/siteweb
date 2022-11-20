<template>
  <div class="association">
    <div class="carousel">
      <div class="page-header">
        <div class="carousel-img">
          <nuxt-img
            format="png"
            src="/association/cuisine.png"
            alt=""
            width="1200"
            height="815"
          />
        </div>
        <div class="carousel-title">
          <h1>L'association</h1>
          <p>Ici on voit la vie en VERS</p>
          <NuxtLink to="/adherer" class="cta">Rejoignez-nous</NuxtLink>
        </div>
      </div>
    </div>
    <section class="section-page asso-1">
      <span id="qui-sommes-nous" class="ancre"></span>
      <div class="title">
        <h2>Qui sommes-nous&nbsp;?</h2>
      </div>
      <div class="content lead">
        <p>
          HAVRE DE VERS est née, le 14 janvier 2016, d'une envie commune de
          trois amis, Marian, Flavien et Léo, afin d'apporter une solution face
          å la situation de crise importante dans les domaines de l'agriculture,
          de l'alimentation et de la santé.
        </p>
        <p>
          Gaspillage et inégalité alimentaire, impératifs écologiques, hégémonie
          de l'exploitation animate industrielle et de la grande distribution,
          déperdition des agricultures paysannes, perte de biodiversité, manque
          de résilience écologique, tres faible support des initiatives å
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
            Une transformation des biodéchets en un amendement organique de
            haute valeur agronomique par lombricompostage;
          </li>
          <li>
            Une sensibilisation à l'impact écologique et économico-social de la
            gestion des biodéchets.
          </li>
        </ul>
      </div>
      <HomeWave :colors="['#e3ad89', '#f4dbc9']" />
    </section>
    <PresentationEquipe />
  </div>
</template>

<style lang="scss">
.asso-1 {
  li {
    list-style-type: initial;
  }

  .content {
    text-align: center;

    & > * + * {
      margin-top: 2rem;
    }
  }
}
</style>
