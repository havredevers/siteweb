<template>
  <section class="section-page carte">
    <span id="carte" class="ancre"></span>
    <div class="title">
      <h2>Nous trouver</h2>
    </div>
    <div class="content">
      <div style="height: 500px">
        <client-only>
          <l-map
            :zoom="13"
            :max-zoom="17"
            :center="[49.49621, 0.12325]"
            :options="{ attributionControl: false, scrollWheelZoom: false }"
            data-aos="zoom-in"
          >
            <l-tile-layer
              url="https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg"
              attribution="Map tiles by <a href='http://stamen.com'>Stamen Design</a>, <a href='http://creativecommons.org/licenses/by/3.0'>CC BY 3.0</a> &mdash; Map data &copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors'"
            ></l-tile-layer>
            <l-tile-layer
              url="https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}{r}.png"
              attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors &copy; <a href='https://carto.com/attributions'>CARTO</a>"
            ></l-tile-layer>
            <l-marker :lat-lng="[49.4961925, 0.1233144]">
              <l-icon
                :icon-size="[25, 41]"
                :icon-anchor="[12, 41]"
                class-name="map-icon"
              >
                <img src="/ui/pin-map.png" width="50" />
              </l-icon>
              <l-tooltip
                :options="{
                  direction: 'top',
                  offset: [0, -45],
                  className: 'map-tooltip',
                }"
              >
                <div class="tooltip-header">
                  <img src="/ui/logo-blanc.png" />
                  <div>
                    <strong>Havre de Vers</strong><br />13, rue de Tourville<br />76600
                    LE HAVRE
                  </div>
                </div>
                <hr />
                <div class="tooltip-hours">
                  Permanences :
                  <ul>
                    <li>Lundi : 10h à 19h</li>
                    <li>Mercredi : 10h à 19h</li>
                    <li>Vendredi : 10h à 19h</li>
                  </ul>
                </div>
              </l-tooltip>
            </l-marker>
            <l-marker :lat-lng="[49.4831, 0.13625]">
              <l-icon
                :icon-size="[25, 41]"
                :icon-anchor="[12, 41]"
                class-name="map-icon"
              >
                <img src="/ui/pin-map.png" width="50" />
              </l-icon>
              <l-tooltip
                :options="{
                  direction: 'top',
                  offset: [0, -45],
                  className: 'map-tooltip',
                }"
              >
                <div class="tooltip-header">
                  <img src="/ui/logo-blanc.png" />
                  <div>
                    <strong>Hangar zéro</strong><br />37 Quai de la Saône<br />76600
                    LE HAVRE
                  </div>
                </div>
                <hr />
                <div class="tooltip-hours">
                  Permanences :
                  <ul>
                    <li>Mardi : 10h à 19h</li>
                    <li>Jeudi : 10h à 19h</li>
                  </ul>
                </div>
              </l-tooltip>
            </l-marker>
          </l-map>
        </client-only>
      </div>
      <div class="map-subtitle">
        <a
          href="https://www.openstreetmap.org/?mlat=49.49621&mlon=0.12330#map=13/49.49621/0.12325"
          target="_blank"
        >
          Afficher une carte plus grande
        </a>
      </div>
    </div>
    <HomeWave :colors="['#e3ad89', '#f4dbc9']" />
  </section>
</template>

<style lang="scss">
.map-icon img {
  display: block;
  margin: auto;
}

.map-tooltip {
  --tooltip-bg: #84aa4b;
  padding: 0.5rem;
  font-size: 0.8rem;
  color: white;
  border-radius: 14px;
  background-color: var(--tooltip-bg);
  border-color: var(--tooltip-bg);

  &.leaflet-tooltip-top::before {
    border-top-color: var(--tooltip-bg);
  }

  strong {
    font-size: 1.1rem;
  }

  hr {
    margin: 0.3rem 0;
  }

  li {
    list-style-type: initial;
    margin-left: 1rem;
  }
}

.tooltip-header {
  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    width: 100px;
    margin: 0 0 1rem 0;
  }

  @media (min-width: 550px) {
    flex-direction: row;

    img {
      margin: 0 1rem 0 0;
    }
  }
}

.tooltip-hours {
  font-size: 0.7rem;
}

.map-subtitle {
  padding: 0.5rem;
  text-align: center;
}
</style>
