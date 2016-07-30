
"use strict";

var startup = function () {

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    fade: true
  });

};

$(document).ready(startup);
