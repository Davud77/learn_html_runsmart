const slider = tns({
    container: '.carousel_inner',
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



$(document).ready(function(){
    $('ul.catalog_tabs').on('click', 'li:not(.catalog_tab_active)', function() {
        $(this)
          .addClass('catalog_tab_active').siblings().removeClass('catalog_tab_active')
          .closest('div.container').find('div.catalog_content').removeClass('catalog_content_active').eq($(this).index()).addClass('catalog_content_active');
    });

    // Modal

    $('[data-modal=consultations]').on('click', function() {
        $('.overlay, #consultations').fadeIn('slow');
    });

    $('.modal_close').on('click', function() {
        $('.overlay, #consultations, #thanks, #order').fadeOut('slow');
    });

    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal_descr').text($('.catalog_item_subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    }); 


    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog_item_content').eq(i).toggleClass('catalog_item_content_active');
                $('.catalog_item_list').eq(i).toggleClass('catalog_item_list_active');
            });
        });
    }

    toggleSlide('.catalog_item_link');
    toggleSlide('.catalog_item_list_back');


    function validateForms(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 5
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Введите свой email",
                    minlength: jQuery.validator.format("Введите {0} символов")
                },
                phone: "Введите свой телефон",
                email: {
                    required: "Введите свой email",
                    email: "косяк допустил ты"
                }
            }
        });
    }

    validateForms('#consultation-feed_form');
    validateForms('#consultations form');
    validateForms('#order form');

    $('input[name=phone]').mask("+7 (999) 999-99-99");

    $('form').submit(function(e){
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "#",
            data: $(this).serialize()
        }).done(function(){
            $(this).find("input").val("");
            $('#consultations, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');


            $('form').trigger('reset');
        });
        return false;
    });

    new WOW().init();

});