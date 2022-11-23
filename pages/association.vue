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
        <p data-aos="fade-up">
          HAVRE DE VERS est née, le 14 janvier 2016, d'une envie commune de
          trois amis, Marian, Flavien et Léo, afin d'apporter une solution face
          å la situation de crise importante dans les domaines de l'agriculture,
          de l'alimentation et de la santé.
        </p>
        <p data-aos="fade-up">
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
        <ul data-aos="fade-up">
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
    <section class="section-page chiffres">
      <span id="chiffres" class="ancre"></span>
      <div class="title">
        <h2>L'association en quelques chiffres</h2>
      </div>
      <div class="content">
        <ul>
          <li data-aos="zoom-in" data-aos-delay="100">
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path
                  d="M144 160c-44.2 0-80-35.8-80-80S99.8 0 144 0s80 35.8 80 80s-35.8 80-80 80zm368 0c-44.2 0-80-35.8-80-80s35.8-80 80-80s80 35.8 80 80s-35.8 80-80 80zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM416 224c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"
                />
              </svg>
            </div>
            <div class="value"><count-up :end="254" /></div>
            <div class="unit"><h3>Adhérent(e)s</h3></div>
          </li>
          <li data-aos="zoom-in" data-aos-delay="250">
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  d="M346.7 6C337.6 17 320 42.3 320 72c0 40 15.3 55.3 40 80s40 40 80 40c29.7 0 55-17.6 66-26.7c4-3.3 6-8.2 6-13.3s-2-10-6-13.2c-11.4-9.1-38.3-26.8-74-26.8c-32 0-40 8-40 8s8-8 8-40c0-35.7-17.7-62.6-26.8-74C370 2 365.1 0 360 0s-10 2-13.3 6zM244.6 136c-40 0-77.1 18.1-101.7 48.2l60.5 60.5c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-55.3-55.3 0 .1L2.2 477.9C-2 487-.1 497.8 7 505s17.9 9 27.1 4.8l134.7-62.4-52.1-52.1c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L199.7 433l100.2-46.4c46.4-21.5 76.2-68 76.2-119.2C376 194.8 317.2 136 244.6 136z"
                />
              </svg>
            </div>
            <div class="value"><count-up :end="8500" suffix="&nbsp;kg" /></div>
            <div class="unit"><h3>Collectés chaque année</h3></div>
          </li>
          <li data-aos="zoom-in" data-aos-delay="400">
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path
                  d="M256 32H181.2c-27.1 0-51.3 17.1-60.3 42.6L3.1 407.2C1.1 413 0 419.2 0 425.4C0 455.5 24.5 480 54.6 480H256V416c0-17.7 14.3-32 32-32s32 14.3 32 32v64H521.4c30.2 0 54.6-24.5 54.6-54.6c0-6.2-1.1-12.4-3.1-18.2L455.1 74.6C446 49.1 421.9 32 394.8 32H320V96c0 17.7-14.3 32-32 32s-32-14.3-32-32V32zm64 192v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32s32 14.3 32 32z"
                />
              </svg>
            </div>
            <div class="value"><count-up :end="18" suffix="km" /></div>
            <div class="unit"><h3>Parcourus chaque semaine</h3></div>
          </li>
        </ul>
      </div>
      <HomeWave :colors="['#ead0a3', '#f7e9d4']" />
    </section>
    <PresentationEquipe />
  </div>
</template>

<style lang="scss">
.association h3 {
  font-family: var(--font-changa);
  margin: 0.5rem 0;
}

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

.chiffres {
  ul {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  li {
    text-align: center;
    padding: 1rem;
    margin-bottom: 2rem;
    flex: 0 0 33%;
  }

  .icon svg {
    height: 50px;
    margin-bottom: 1rem;
  }

  .value {
    font-size: 50px;
  }

  h3 {
    font-size: clamp(1.5rem, 2vw, 2rem);
  }

  @media (min-width: 1200px) {
    ul {
      flex-direction: row;
    }
  }
}
</style>
