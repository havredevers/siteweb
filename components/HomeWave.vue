<template>
  <div class="wave">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 90"
      version="1.1"
      width="1440"
      height="90"
    >
      <path
        :style="{ fill: colors[0] }"
        d="M 0,91 V 67.310275 L 91,53.373306 C 160,39.17363 320,11.5 475.5,11.5 c 0,2e-5 -5,1.24997 0,0 V 91"
      />
      <path
        :style="{ fill: colors[1] }"
        d="M 475,91 475,11.5 c 165.0389,0.204649 325.01969,27.914856 485,31.675769 160,3.497417 320,-17.619509 400,-28.177729 l 90,-10.5585854 0.1196,90"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    colors: {
      type: Array,
      default() {
        return ['blue', 'yellow']
      },
    },
  },
}
</script>

<style lang="scss">
.wave {
  display: none;
  position: absolute;
  bottom: 99.5%;
  width: 100%;
  z-index: 25;

  svg {
    width: 100%;
    height: auto;
    display: block;
  }

  @media (min-width: 850px) {
    display: initial;
  }
}

@media (min-width: 850px) {
  .section-page > :not(.wave) {
    padding-bottom: var(--wave-height);
    padding-top: 2rem;
  }
}
</style>
