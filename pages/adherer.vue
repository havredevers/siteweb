<template>
  <div>
    <h2>Nous rejoindre</h2>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
      dignissimos temporibus, ipsam voluptatibus, quibusdam quos dolorum
      architecto dolores corporis eum rem commodi aliquam atque ad tenetur harum
      fugiat pariatur iusto.
    </p>
    <fieldset>
      <legend>Faites votre choix: {{ choix }}</legend>
      <div>
        <input
          id="proximite"
          v-model="choix"
          type="radio"
          name="choix"
          value="proximite"
        />
        <label for="proximite">Adhérent de proximité</label>
      </div>
      <div>
        <input
          id="soutien"
          v-model="choix"
          type="radio"
          name="choix"
          value="soutien"
        />
        <label for="soutien">Adhérent de soutien</label>
      </div>
    </fieldset>
    <div v-if="choix == 'proximite'">
      <iframe
        id="haWidget"
        allowtransparency="true"
        scrolling="auto"
        src="https://www.helloasso.com/associations/havre-de-vers/adhesions/havre-de-vers-adherent-de-proximite-1/widget"
        style="width: 100%; height: 850px; border: none"
        onload="window.scroll(0, this.offsetTop)"
      ></iframe>
    </div>
    <div v-if="choix == 'soutien'">
      <iframe
        id="haWidget"
        allowtransparency="true"
        scrolling="auto"
        src="https://www.helloasso.com/associations/havre-de-vers/adhesions/havre-de-vers-adherent-de-soutien-from-the-ends-of-the-earth/widget"
        style="width: 100%; height: 750px; border: none"
        onload="window.scroll(0, this.offsetTop)"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      choix: 'proximite',
    }
  },
  mounted() {
    this.$handleImagesLoad()
  },
}
</script>
