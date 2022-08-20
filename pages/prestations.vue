<template>
  <div class="prestations">
    <h2>Nos prestations</h2>
    <ul>
      <li>
        <div>
          <h3>Atelier jardin/potager</h3>
          <CustomImage src="/prestations/jardin.png" alt="" />
        </div>
      </li>
      <li>
        <div>
          <h3>Compostage</h3>
          <CustomImage src="/prestations/compostage.png" alt="" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.prestations {
  h2 {
    height: 0;
  }

  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    flex-direction: column;
    padding: 0 7%;

    @media (min-width: 850px) {
      flex-direction: row;
    }
  }

  h3 {
    font-style: italic;
    font-size: 2rem;
    font-family: var(--font-serif);
    color: var(--clr-secondary);
    text-align: center;
    margin-bottom: 1rem;
  }

  img {
    max-width: 100%;
    margin: auto;
    display: block;
  }
}
</style>
