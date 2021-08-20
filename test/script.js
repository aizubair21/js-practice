$(function() {
    $(".owlCarosel1").owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'rubberBand',
        center:false,
        items:1,
        loop:true,
        margin:10,
        nav:true,
        merge: true,
        autoplay:false,
        autoplayTimeout:1000,
        autoplayHoverPause: false,
   

    });
    // $(".start").on("click", function () {
    //     $(this).trigger('play.owl.autoplay', [1000]);
    // });
    // $(".stop").on("click", function (e) {
    //     owl.trigger('stop.owl.autoplay');
    // });
});