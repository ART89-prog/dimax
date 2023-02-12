$(() => {

  // Основной слайдер на главной
  $('.main_slider .slider').slick({
    infinite: true,
    dots: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<div class="prev"></div>',
    nextArrow: '<div class="next"></div>'
  });



  $('.licenses_slider').slick({
    centerMode: true,
    variableWidth: true,
    arrows: true,
    slidesToShow: 3,
    prevArrow: '<div class="prev"></div>',
    nextArrow: '<div class="next"></div>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });


  $('.gallery-slider').slick({
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000, 
    touchThreshold: 100,
    prevArrow: '<div class="prev"></div>',
    nextArrow: '<div class="next"></div>',
    draggable: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      }
    ]
}); 



  // Моб. меню
  $('header .mob_menu_btn').click((e) => {
    e.preventDefault()

    $('header .mob_menu_btn').addClass('active')
    $('body').addClass('menu_open')
    $('header .menu').addClass('show')
    $('.overlay').fadeIn(300)
  })

  $('header .close_btn, header .menu .item a, .overlay').click((e) => {
    e.preventDefault()

    $('header .mob_menu_btn').removeClass('active')
    $('body').removeClass('menu_open')
    $('header .menu').removeClass('show')
    $('.overlay').fadeOut(300)
  })



  $('body').on('click', '.modal_link', function (e) {
    e.preventDefault()

    Fancybox.close(true)
    Fancybox.show([{
      src: $(this).data('content'),
      type: 'inline',
    }]);
  })


 




})


