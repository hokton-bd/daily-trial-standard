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