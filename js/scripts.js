$(document).ready(function () {
    // Smooth Scroll
    $('a[href^="#"]').on('click',function (event) {

        event.preventDefault();

        var target = this.hash;

        var $target = $(target);

        $('html, body').stop().animate({

            'scrollTop': $target.offset().top

        }, 900, 'swing', function () {

            window.location.hash = target;

        });
        
    });

    // Animate icons in backend skills section
    $('.back-end-icon-column').mouseenter(function() {
        $('.python-icon , .django-icon').addClass('animate-back-end-top'); 
        $('.postgres-icon, .flask-icon').addClass('animate-back-end-bottom');    
    }).mouseleave(function() {
        $('.python-icon , .django-icon').removeClass('animate-back-end-top');
        $('.postgres-icon, .flask-icon').removeClass('animate-back-end-bottom'); 
        
    });

    // Animate icons in font-end skills section
    $('.font-end-icon-column').mouseenter(function() {
        $('.css3-icon, .html5-icon').addClass('animate-front-end-top');  
        $('.bootstrap-icon, .jquery-icon').addClass('animate-front-end-bottom');    
    }).mouseleave(function() {
        $('.css3-icon, .html5-icon').removeClass('animate-front-end-top');
        $('.bootstrap-icon, .jquery-icon').removeClass('animate-front-end-bottom');
    });
    
    // 
    if($(window).width() > 995) {

        $(window).scroll(function(){

            if($(this).scrollTop() > 100){

                $('#back-to-top').fadeIn();

            }
            else{

                $('#back-to-top').fadeOut();

            }
        });
        $('#back-to-top').click(function(){

            $("html, body").animate({ scrollTop: 0 }, 600);

            return false;

        });

    }
});