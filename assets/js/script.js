(function() {

    $target = document.getElementById('js-drawer');

    $toggler = document.getElementById('js-toggler');
    $toggler.addEventListener('click', () => {

        $target.classList.toggle('d-checked');

    });

    $closer = document.getElementById('js-drawer-closer');
    $closer.addEventListener('click', () => {

        $target.classList.remove('d-checked');    

    });

    //swipwer
    const mySwiper = new Swiper('.swiper-container', {
        loop: true,

        navigation: {  //ナビゲーションのオプション（矢印ボタンの要素を指定）
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        pagination: {

            el: '.swiper-pagination',
            clickable: true,
            type: 'bullets',

        },

        scrollbar: {

            el: 'swiper-scrollbar',


        }

    });

    new WOW().init();

}());

$(function(){

    //smooth scroll
    $('.js-link').click(function(){
      var adjust = -60;
      var speed = 400;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top + adjust;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
    });

    $('#js-scrollTop').on('click', function() {

        $('body,html').animate({scrollTop:0}, 400, 'swing');

    });

    //floating btn
    $(window).on('scroll', function() {
        if($(this).scrollTop() > 100) {
            $('#js-scrollTop').fadeIn();
        } else {
            $('#js-scrollTop').fadeOut();
        }


    });

    $('.global-nav__link').on('click', function() {

        $('.global-nav__link').removeClass('link--active');
        $(this).addClass('link--active');
        return false;
    });



});