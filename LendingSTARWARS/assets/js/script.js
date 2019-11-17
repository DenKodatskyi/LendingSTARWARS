/*  */
$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    margin: 10,
    nav: true,
    navClass: ["slider_nav_left", "slider_nav_right"],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1200: {
        items: 4
      }
    }
  });
});






















