<template>
  <footer>
    <div class="logo">
      <img src="@/assets/img/logo-rose.png" alt="" />
    </div>
    <div class="coord">
      <address>
        Havre de Vers<br />13, rue de Tourville<br />76600 LE HAVRE
      </address>
      <img src="@/assets/img/accueil/ver.png" alt="" />
      <div class="horaires">
        LUNDI, MERCREDI<br />ET VENDREDI<br />DE 10H A 19H
      </div>
    </div>
    <div class="reseaux">
      Suivez-nous !
      <ul>
        <li>
          <a href="#" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              />
            </svg>
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path
                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
              />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style lang="scss">
footer {
  background-image: url('~assets/img/footer.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  color: var(--clr-secondary);
  font-size: 1.1rem;
  font-weight: bold;
  padding: 2rem 1rem 0;
  align-items: center;
  justify-content: space-between;

  & > * {
    padding-bottom: 1rem;
  }

  @media (min-width: 550px) {
    display: flex;
  }

  @media (min-width: 850px) {
    font-size: 1.5rem;
  }

  .logo {
    flex: 0 0 25%;

    img {
      display: block;
      margin: auto;
      width: 100%;
      max-width: 200px;
    }
  }

  .coord {
    flex: 0 0 33%;
    text-align: center;

    address {
      font-style: normal;
    }

    img {
      max-width: 60px;
    }
  }

  .reseaux {
    align-self: end;

    ul {
      margin-top: 0.5rem;
      padding: 0;
      list-style-type: none;
      display: flex;
      gap: 1rem;
    }

    a {
      display: block;

      svg {
        fill: var(--clr-secondary);
        width: 45px;
        height: 45px;
        border: 2px solid var(--clr-secondary);
        border-radius: 50%;
        padding: 0.5rem;
        transition: all 0.3s ease-in-out;
      }

      &:focus-visible svg,
      &:hover svg {
        background-color: var(--clr-secondary);
        fill: white;
      }
    }
  }
}
</style>
