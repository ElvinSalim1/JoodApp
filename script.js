$(document).ready(function(){
    
    var owl = $('#firstslide');
    owl.owlCarousel({
        loop: true,
        margin: 5,
        items: 4,
        autoplay: true,
        autoplayTimeout: 2000,
        autolpayHoverPause: true,
        responsive:{
            0:{
                items:1,
                nav: true
            },
            600:{
                items:3,
                nav:true,
                loop:true
            },
            1000:{
                items:4,
                nav:true,
                loop:true
            }
        }
    })

    var owl2 = $('#secondslide');
    owl2.owlCarousel({
        center: true,
        items: 5,
        loop: true,
        margin: 70,
        autoplay: true,
        autoplayTimeout: 2000,
        autolpayHoverPause: true,
        center: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: true,
                loop: true
            },
            1000:{
                items: 5,
                nav: true,
                loop: true
            }
        }
    })
})

var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true,
    callback: function(box){

    },
    scrollContainer: null,
    resetAnimation: true,
});
wow.init();