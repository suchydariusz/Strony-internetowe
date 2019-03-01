var heightDirectContact = $('.footer-col-right').offset().top;
$('.footer-col-right').hide();
var heightMyPhoto = $('#my-image').offset().top;

$(function() {
    $('.text-right-photo').one('mouseover', function() {
            $('#my-image img').css({
                'border': '2px solid #00b894',
                'transition': 'border 2s'
            });
    });
});

$(window).scroll(function() {
    var heightSite = $(window).scrollTop();
    if(heightSite > heightDirectContact-(heightDirectContact * 0.2)) {
        $('.footer-col-right').fadeIn(3000);
    }
    
});