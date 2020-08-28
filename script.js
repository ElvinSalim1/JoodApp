$(document).ready(function(){
    
    var owl = $('#firstslide');
    owl.owlCarousel({
        autoplay: true,
        autoplayTimeout: 2000,
        loop: true,
        responsive:{0:{items:1},500:{items:1},800:{items:3},1000:{items:4}
        }
    })

    var owl2 = $('#secondslide');
    owl2.owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        center: true,   
        responsive: {0:{items:3},500:{items: 3},1000:{items: 5}}
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