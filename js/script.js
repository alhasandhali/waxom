$(function () {
  'use strict';

  // Counter part

  $('.counter').counterUp({
    delay: 10,
    time: 3000,
  });

  // Count Down

  $('#getting-started').countdown('2021/08/31', function (event) {
    $(this).html(event.strftime('%d DAYS'));
  });

  $('#getting-started2').countdown('2021/08/31', function (event) {
    $(this).html(event.strftime('%H'));
  });

  $('#getting-started3').countdown('2021/08/31', function (event) {
    $(this).html(event.strftime('%M'));
  });

  $('#getting-started4').countdown('2021/08/31', function (event) {
    $(this).html(event.strftime('%S'));
  });

  // Video Player

  $('.venobox').venobox({
    spinner: 'cube-grid',
    spinColor: '#998675',
  });

  // Menu Fix

  var navoff = $('#menu').offset().top;

  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();

    if (scrolling > navoff) {
      $('#menu').addClass('menu_fix');
    } else {
      $('#menu').removeClass('menu_fix');
    }
  });

  // Bottom to Top scroll button

  $('.top_btn').click(function () {
    $('html,body').animate({
      scrollTop: 0,
    }, 3000);
  });

  $(window).scroll(function () {
    var button = $(this).scrollTop();

    if (button > 200) {
      $('.top_btn').fadeIn();
    } else {
      $('.top_btn').fadeOut();
    }
  });

  // Filter Menu

  var containerEl = document.querySelector('.proj_col');
  var mixer = mixitup(containerEl);

  //Active button in Filter menu

  var btnContainer = document.getElementById("filter_menu");
  var btns = btnContainer.getElementsByClassName("manu");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }

  //Slider 

  $('.post_col').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<i class="fas fa-chevron-left prev"></i>',
    nextArrow: '<i class="fas fa-chevron-right next"></i>',
  });

  $('.post_img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 2000,
    arrows: false,
    dots: true,
  });

});