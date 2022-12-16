<template>
  <section class="section-page carte">
    <span id="carte" class="ancre"></span>
    <div class="title">
      <h2>Où nous trouver ?</h2>
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
                <img src="~/assets/img/pin-map.png" width="50" />
              </l-icon>
              <l-popup
                :options="{
                  offset: [0, -30],
                  className: 'map-popup',
                }"
              >
                <TooltipBureauAsso />
              </l-popup>
              <l-tooltip
                :options="{
                  direction: 'top',
                  offset: [0, -45],
                  className: 'map-tooltip',
                  opacity: 1,
                }"
              >
                <TooltipBureauAsso />
              </l-tooltip>
            </l-marker>
            <l-marker :lat-lng="[49.4831, 0.13625]">
              <l-icon
                :icon-size="[25, 41]"
                :icon-anchor="[12, 41]"
                class-name="map-icon"
              >
                <img src="~/assets/img/pin-map.png" width="50" />
              </l-icon>
              <l-popup
                :options="{
                  offset: [0, -30],
                  className: 'map-popup',
                }"
              >
                <TooltipHangarZero />
              </l-popup>
              <l-tooltip
                :options="{
                  direction: 'top',
                  offset: [0, -45],
                  className: 'map-tooltip',
                  opacity: 1,
                }"
              >
                <TooltipHangarZero />
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
    <HomeWave :colors="['var(--clr-content2)', 'var(--clr-content1)']" />
  </section>
</template>

<style lang="scss">
.carte {
  --tooltip-bg: #84aa4b;
}

.map-icon img {
  display: block;
  margin: auto;
}

.map-popup .leaflet-popup-content-wrapper,
.leaflet-popup-tip,
.map-tooltip,
.leaflet-container a.leaflet-popup-close-button {
  background-color: var(--tooltip-bg);
  color: white;
}

.map-tooltip {
  padding: 0.5rem;
  font-size: 0.8rem;
  border-radius: 14px;
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
  font-size: 1.1rem;

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
  font-size: 0.75rem;
}

.map-subtitle {
  padding: 0.5rem;
  text-align: center;
}
</style>
