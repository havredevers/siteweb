<template>
  <div class="mentions">
    <div class="carousel">
      <div class="page-header">
        <div class="carousel-img">
          <nuxt-img
            format="webp"
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
      <div class="title">
        <h2>Coordonnées de l'association</h2>
      </div>
      <div class="content">
        <address>
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
      <div class="title">
        <h2>Directeur de la publication</h2>
      </div>
      <div class="content">
        <address>
          <div>Léo MASSÉ</div>
          <div>Président de l'association</div>
        </address>
      </div>
      <HomeWave :colors="['#ead0a3', '#f7e9d4']" />
    </section>
    <section class="section-page">
      <div class="title">
        <h2>Développement du site</h2>
      </div>
      <div class="content">
        <address>
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
        <div>
          Le site a été développé grâce à des technologies Open-Source. Le
          framework utilisé est
          <a href="https://nuxtjs.org/" target="_blank">Nuxt.js</a>.
        </div>
      </div>
      <HomeWave :colors="['#e3ad89', '#f4dbc9']" />
    </section>
    <section class="section-page">
      <div class="title">
        <h2>Hébergement du site</h2>
      </div>
      <div class="content">
        <address>
          <a href="https://netlify.app/" target="_blank">Netlify</a><br />
          44 Montgomery Street, Suite 300<br />San Francisco, CA 94104<br /><br />support@netlify.com
        </address>
        <br />
        <p>
          Le code source du site est stocké sur
          <a href="https://github.com/havredevers/siteweb" target="_blank">
            la plateforme Github</a
          >.
        </p>
      </div>
      <HomeWave :colors="['#ead0a3', '#f7e9d4']" />
    </section>
    <section class="section-page">
      <div class="title">
        <h2>Règlement Général sur la Protection des Données</h2>
      </div>
      <div class="content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur,
          repellat beatae? Perferendis et praesentium quasi veniam doloribus
          dolorem aliquid, sapiente dolore facilis tempore soluta natus aperiam
          nobis at non qui? Excepturi sequi minus reprehenderit deleniti tempore
          voluptatem consectetur, quas est quidem libero animi. Maiores
          voluptatibus cum facere repellat, praesentium earum sed impedit veniam
          temporibus a veritatis distinctio, dolorum nihil magnam. Totam labore
          distinctio nostrum eveniet. A obcaecati illo incidunt accusamus
          distinctio officiis quae alias aut? Veniam iste, accusamus harum nihil
          perferendis, fugiat quod dolorum soluta voluptas ullam, ad esse
          repellendus. Accusantium quis fugiat, nobis a corrupti architecto
          minima quidem aliquam ea ipsa est perferendis reprehenderit aliquid
          dignissimos adipisci ex velit, similique in, sunt quos neque itaque.
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
