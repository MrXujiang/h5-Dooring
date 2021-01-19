jQuery(document).ready(function() {
  'use strict';

  // Call all ready functions
  appinocks_navbarFixed(),
    appinocks_navScrollSpy(),
    appinocks_counterUp(),
    appinocks_magnificPopupVideo(),
    // appinocks_owl_carousel(),
    appinocks_pricingTab(),
    appinocks_copyrightDynamicYear(),
    appinocks_preloader(),
    appinocks_scrollIt(),
    new WOW().init();
});

/*  ---------------------------------------------------
    1.Navbar Fixed
    --------------------------------------------------- */
function appinocks_navbarFixed() {
  'use-strict';

  // Variables
  var scrollTop = jQuery(window).scrollTop(),
    navbarMenu = jQuery('.header'),
    navbarLink = jQuery('.navbar-nav>li>a'),
    scrollTopBtn = jQuery('.scroll-top-btn'),
    downloadBtn = jQuery('#downloadBtn'),
    downScroll = jQuery('.down-scroll'),
    navbarHamburgerBtn = jQuery('.navbar-hamburger');

  // Window On Scroll Add Class Shrink
  jQuery(window).on('scroll', function() {
    let scrollTop = jQuery(this).scrollTop();
    if (scrollTop > 80) {
      navbarMenu.addClass('header-shrink');
      scrollTopBtn.addClass('active');
    } else {
      navbarMenu.removeClass('header-shrink');
      scrollTopBtn.removeClass('active');
    }
  });

  if (scrollTop > 100) {
    navbarMenu.addClass('header-shrink');
    scrollTopBtn.addClass('active');
  } else {
    navbarMenu.removeClass('header-shrink');
    scrollTopBtn.removeClass('active');
  }

  navbarLink.on('click', function() {
    jQuery('.navbar-collapse').collapse('hide');
    navbarHamburgerBtn.toggleClass('active');
  });
}

/*  ---------------------------------------------------
    2.Navbar Scroll Spy
    --------------------------------------------------- */
function appinocks_navScrollSpy() {
  'use-strict';

  // Scroll Spy
  jQuery('body').scrollspy({
    target: '#fixedNavbar',
    offset: 95,
  });
}

/*  ---------------------------------------------------
    3.Counters
    --------------------------------------------------- */
function appinocks_counterUp() {
  'use-strict';

  jQuery('.counter').counterUp({
    delay: 15,
    time: 2000,
  });
}

/*  -----------------------------------------------------
    4.Owl Carousel
    ----------------------------------------------------- */

function appinocks_owl_carousel() {
  'use-strict';

  // Variables
  var screenshotsSlider = jQuery('.screenshots-slider');

  // Partners Slider
  screenshotsSlider.owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    center: true,
    stagePadding: 0,
    smartSpeed: 1000,
    animateOut: 'fadeOut',
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    navText: ['<span><</span>', '<span>></span>'],
    responsive: {
      0: {
        items: 2,
        center: false,
      },
      600: {
        items: 3,
      },
      768: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });
}

/*  -----------------------------------------------------
    5.Magnific Popup
    ----------------------------------------------------- */

function appinocks_magnificPopupVideo() {
  'use-strict';

  // Variables
  var videoPopupItem = jQuery('.popup-youtube, .popup-vimeo, .popup-gmaps');

  videoPopupItem.magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });
}

/*  -----------------------------------------------------
    6.Pricing Tab
    ----------------------------------------------------- */

function appinocks_pricingTab() {
  'use-scrict';

  // Variables
  var pricingTabLink = jQuery('.price-toggle-wrap > a'),
    pricingTabContent = jQuery('.pricing-tab-content');

  pricingTabLink.on('click', function() {
    pricingTabLink.removeClass('active');
    jQuery(this).addClass('active');
    pricingTabContent.removeClass('active');
    pricingTabContent.eq(jQuery(this).index()).addClass('active animated fadeInUp');
  });
}

/*  -----------------------------------------------------
    7.Copyright
    ----------------------------------------------------- */

function appinocks_copyrightDynamicYear() {
  'use-strict';

  // Variables
  var fullYearCopyright = jQuery('#fullYearCopyright'),
    getFullYearDate = new Date().getFullYear();

  fullYearCopyright.text(getFullYearDate);
}

/*  -----------------------------------------------------
    9.Preloader
    ----------------------------------------------------- */

function appinocks_preloader() {
  'use-strict';

  // Variables
  var preloaderWrap = jQuery('.preloader-wrap'),
    loaderInner = jQuery('.preloader-wrap .preloader-inner');

  jQuery(window).load('body', function() {
    loaderInner.fadeOut();
    preloaderWrap.delay(350).fadeOut('slow');
  });
}

/*  -----------------------------------------------------
    10.ScrollIt
    ----------------------------------------------------- */

function appinocks_scrollIt() {
  'use-strict';

  jQuery.scrollIt({
    upKey: 38,
    downKey: 40,
    easing: 'swing',
    scrollTime: 600,
    activeClass: 'active',
    onPageChange: null,
    topOffset: -15,
  });
}

/*  -----------------------------------------------------
    11.ScrollUp
    ----------------------------------------------------- */

function appinocks_scrollUp() {
  'use-strict';

  jQuery('.scroll-top-btn').on('click', function(event) {
    event.preventDefault();

    jQuery('html, body').animate(
      {
        scrollTop: jQuery(jQuery.attr(this, 'href')).offset().top,
      },
      500,
    );
  });
}

appinocks_scrollUp();
