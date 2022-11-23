<template>
  <div class="iCountUp"></div>
</template>

<script>
import { CountUp } from '~/node_modules/countup.js'

export default {
  props: {
    start: {
      type: Number,
      default: 0,
    },
    end: {
      type: Number,
      required: true,
    },
    decimals: {
      type: Number,
      default: 0,
    },
    duration: {
      type: Number,
      default: 2,
    },
    delay: {
      type: Number,
      default: 1000,
    },
    prefix: {
      type: String,
      default: '',
    },
    suffix: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      countUp: null,
    }
  },
  computed: {
    options() {
      return {
        startVal: this.start, // number to start at (0)
        decimalPlaces: this.decimals, // number of decimal places (0)
        duration: this.duration, // animation duration in seconds (2)
        useGrouping: true, // example: 1,000 vs 1000 (true)
        useEasing: true, // ease animation (true)
        smartEasingThreshold: 999, // smooth easing for large numbers above this if useEasing (999)
        smartEasingAmount: 333, // amount to be eased for numbers above threshold (333)
        separator: '&nbsp;', // grouping separator (',')
        decimal: ',', // decimal ('.')
        prefix: this.prefix, // text prepended to result
        suffix: this.suffix, // text appended to result
        enableScrollSpy: false, // start animation when target is in view
        scrollSpyDelay: 0, // delay (ms) after target comes into view
        scrollSpyOnce: false, // run only once
      }
    },
  },
  mounted() {
    const dom = this.$el
    this.countUp = new CountUp(dom, this.end, this.options)
    this.scrollSpy(this.countUp)

    if (this.$route.hash === '#chiffres') {
      this.$nextTick(function () {
        this.countUp.start()
      })
    }
  },
  methods: {
    scrollSpy(countup) {
      window.addEventListener('scroll', function () {
        const bottomOfScroll = window.innerHeight + window.scrollY
        const rect = countup.el.getBoundingClientRect()
        const topOfEl = rect.top + window.pageYOffset
        const bottomOfEl = rect.top + rect.height + window.pageYOffset

        if (
          bottomOfEl < bottomOfScroll &&
          bottomOfEl > window.scrollY &&
          countup.paused
        ) {
          // in view
          countup.paused = false
          countup.start()
        } else if (
          (window.scrollY > bottomOfEl || topOfEl > bottomOfScroll) &&
          !countup.paused
        ) {
          // scrolled past
          countup.reset()
        }
      })
    },
  },
}
</script>
