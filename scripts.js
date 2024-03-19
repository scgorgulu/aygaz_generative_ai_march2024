$(document).ready(function(){
    // Smooth scrolling for nav links
    $('a.nav-link').click(function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
});
$(document).ready(function() {
    $('#worksCarousel, #blogCarousel').on('slid.bs.carousel', function (e) {
        var activeIndex = $(e.relatedTarget).index();
        $(this).find('.carousel-captions .caption').removeClass('active');
        $(this).find('.carousel-captions .caption').eq(activeIndex).addClass('active');
    });
});

