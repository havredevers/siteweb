import Vue from 'vue'

Vue.prototype.$formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(date).toLocaleDateString('fr', options)
}

export default ({ app }, inject) => {
  inject('variables', Vue.observable({ blogPagination: 3 }))
}

Vue.mixin({
  mounted: () => {
    const oC = document.querySelectorAll('.protect')

    oC.forEach((link) => {
      let sC = link.getAttribute('data-protect')
      sC = sC.replace('point', '.')
      sC = sC.replace('arobas', '@')
      link.setAttribute('href', 'mailto:' + sC)
    })

    /* eslint-disable no-undef */
    tarteaucitron.init({
      privacyUrl: '' /* Privacy policy url */,
      bodyPosition:
        'top' /* or top to bring it as first element for accessibility */,

      hashtag: '#tarteaucitron' /* Open the panel with this hashtag */,
      cookieName: 'tarteaucitron' /* Cookie name */,

      orientation: 'bottom' /* Banner position (top - bottom) */,

      groupServices: false /* Group services by category */,
      serviceDefaultState: 'wait' /* Default state (true - wait - false) */,

      showAlertSmall: false /* Show the small banner on bottom right */,
      cookieslist: true /* Show the cookie list */,

      closePopup: false /* Show a close X on the banner */,

      showIcon: true /* Show cookie icon to manage cookies */,
      iconSrc: '/ui/cookie.png' /* Optionnal: URL or base64 encoded image */,
      iconPosition:
        'BottomLeft' /* BottomRight, BottomLeft, TopRight and TopLeft */,

      adblocker: false /* Show a Warning if an adblocker is detected */,

      DenyAllCta: true /* Show the deny all button */,
      AcceptAllCta: true /* Show the accept all button when highPrivacy on */,
      highPrivacy: true /* HIGHLY RECOMMANDED Disable auto consent */,

      handleBrowserDNTRequest: true /* If Do Not Track == 1, disallow all */,

      removeCredit: true /* Remove credit link */,
      moreInfoLink: true /* Show more info link */,

      useExternalCss: false /* If false, the tarteaucitron.css file will be loaded */,
      useExternalJs: false /* If false, the tarteaucitron.js file will be loaded */,

      // "cookieDomain": ".my-multisite-domaine.fr", /* Shared cookie for multisite */

      readmoreLink: '' /* Change the default readmore link */,

      mandatory: false /* Show a message about mandatory cookies */,
      mandatoryCta: false /* Show the disabled accept button when mandatory on */,
    })

    // Services utilisés
    ;(tarteaucitron.job = tarteaucitron.job || []).push('helloasso')
    tarteaucitron.user.googleFonts = [
      'Work Sans:300,400,700',
      'Changa One:400,700',
      'Vibur:400,700',
    ]
    ;(tarteaucitron.job = tarteaucitron.job || []).push('googlefonts')
  },
})
