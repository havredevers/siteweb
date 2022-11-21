<template>
  <div class="mentions">
    <div class="carousel">
      <div class="page-header">
        <div class="carousel-img">
          <nuxt-img
            format="png"
            src="/mentions-legales/livre-ouvert.png"
            alt=""
            width="1200"
            height="815"
          />
        </div>
        <div class="carousel-title">
          <h1>Mentions légales</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
            architecto laudantium
          </p>
        </div>
      </div>
    </div>
    <section class="section-page">
      <span id="association" class="ancre"></span>
      <div class="title">
        <h2>Coordonnées de l'association</h2>
      </div>
      <div class="content lead">
        <address data-aos="fade-up">
          <div>Havre De Vers</div>
          <div>13, rue de Tourville 76600 LE HAVRE</div>
          <br />
          <div class="contact">
            Contact :
            <ul>
              <li>
                Par mail :
                <a
                  class="protect"
                  data-protect="havredeversarobasgmailpointcom"
                >
                  Envoyer un mail
                </a>
              </li>
              <li>
                Par téléphone : <a href="tel:+33659861632">06.59.86.16.32</a>
              </li>
            </ul>
          </div>
        </address>
      </div>
      <HomeWave :colors="['#e3ad89', '#f4dbc9']" />
    </section>
    <section class="section-page">
      <span id="publication" class="ancre"></span>
      <div class="title">
        <h2>Directeur de la publication</h2>
      </div>
      <div class="content lead">
        <address data-aos="fade-up">
          <div>Léo MASSÉ</div>
          <div>Co-fondateur de l'association</div>
        </address>
      </div>
      <HomeWave :colors="['#ead0a3', '#f7e9d4']" />
    </section>
    <section class="section-page">
      <span id="developpement" class="ancre"></span>
      <div class="title">
        <h2>Développement du site</h2>
      </div>
      <div class="content lead">
        <address data-aos="fade-up">
          <div>Pierre-Jean CHANCELLIER</div>
          <br />
          <div class="contact">
            Contact :
            <ul>
              <li>
                Par mail :
                <a
                  class="protect"
                  data-protect="pjchancellierarobasgmailpointcom"
                >
                  Envoyer un mail
                </a>
              </li>
            </ul>
          </div>
        </address>
        <br />
        <div data-aos="fade-up">
          Le site a été développé grâce à des technologies Open-Source. Le
          framework utilisé est
          <a href="https://nuxtjs.org/" target="_blank">Nuxt.js</a>.
        </div>
        <br />
        <div data-aos="fade-up">
          Crédits photos : Tony Bélénus pour les photos des membres du bureau.
        </div>
      </div>
      <HomeWave :colors="['#e3ad89', '#f4dbc9']" />
    </section>
    <section class="section-page">
      <span id="hebergement" class="ancre"></span>
      <div class="title">
        <h2>Hébergement du site</h2>
      </div>
      <div class="content lead">
        <address data-aos="fade-up">
          <a href="https://netlify.app/" target="_blank">Netlify</a><br />
          44 Montgomery Street, Suite 300<br />San Francisco, CA 94104<br /><br />support@netlify.com
        </address>
        <br />
        <p data-aos="fade-up">
          Le code source du site est stocké sur
          <a href="https://github.com/havredevers/siteweb" target="_blank">
            la plateforme Github</a
          >.
        </p>
      </div>
      <HomeWave :colors="['#ead0a3', '#f7e9d4']" />
    </section>
    <section class="section-page">
      <span id="politique-confidentialite" class="ancre"></span>
      <div class="title">
        <h2>Politique de confidentialité</h2>
      </div>
      <div class="content lead">
        <p data-aos="fade-up">
          La présente Politique de confidentialité décrit la façon dont vos
          informations personnelles sont recueillies, utilisées et partagées
          lorsque vous vous rendez sur notre site www.havredevers.fr ou que vous
          y effectuez un achat.
        </p>
      </div>
      <HomeWave :colors="['#e3ad89', '#f4dbc9']" />
    </section>
  </div>
</template>

<style lang="scss">
.mentions {
  .contact {
    li {
      list-style: disc;
      margin-left: 1rem;
    }
  }
}
</style>
