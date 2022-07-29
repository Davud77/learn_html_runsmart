const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
  });


(document).querySelector('.prev').addEventListener('click', function(){
    slider.goTo('prev');  
});

(document).querySelector('.next').addEventListener('click', function(){
    slider.goTo('next');  
});


    //modal

    /* $('[data-modal=consultations]').on('click',function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal_close').on('click', function() {
        $('.overlay, #consultation, #thinks, #order').fadeOut('slow');
    });
    $('.button_mini').on('click', function() {
        $('.overlay, #order').fadeOut('slow');
    });

    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('');
        });
    }); */

