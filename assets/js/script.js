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

}());

$(function(){
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


});