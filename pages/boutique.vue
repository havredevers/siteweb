<template>
  <div class="boutique">
    <div class="carousel">
      <div class="page-header">
        <div class="carousel-img">
          <nuxt-img
            format="webp"
            src="/carousel/boutique.png"
            alt=""
            width="1200"
            height="815"
          />
        </div>
        <div class="carousel-title">
          <h1>La boutique</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
            architecto laudantium
          </p>
          <a class="protect cta" data-protect="havredeversarobasgmailpointcom">
            Contactez-nous
          </a>
        </div>
      </div>
    </div>
    <section class="section-page">
      <div class="title">
        <h2>La boutique</h2>
      </div>
      <div class="content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          non natus rem illum illo. Vitae quae, id facilis, ducimus doloribus
          sit maxime cum odio aspernatur quo repellat nesciunt voluptatibus
          iusto!
        </p>
      </div>
      <HomeWave :colors="['#e3ad89', '#f4dbc9']" />
    </section>
  </div>
</template>

<style lang="scss">
.boutique p {
  margin-bottom: 2rem;
}
</style>
