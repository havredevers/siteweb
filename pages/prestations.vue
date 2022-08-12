<template>
  <div class="prestations">
    <h2>Nos prestations</h2>
    <ul>
      <li>
        <div>
          <h3>Atelier jardin/potager</h3>
          <img src="@/assets/img/prestations/jardin.png" alt="" />
        </div>
      </li>
      <li>
        <div>
          <h3>Compostage</h3>
          <img src="@/assets/img/prestations/compostage.png" alt="" />
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.prestations {
  h2 {
    height: 0;
  }

  ul {
    display: flex;
    list-style-type: none;
    justify-content: space-evenly;
  }

  h3 {
    font-style: italic;
    font-size: 2rem;
    font-family: var(--font-serif);
    color: var(--clr-secondary);
    text-align: center;
    margin-bottom: 1rem;
  }
}
</style>
