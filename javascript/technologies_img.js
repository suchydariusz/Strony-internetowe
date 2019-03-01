$(function() {
    $('.technologies-logo').on('mouseover', function() {
        $(this).animate({
            opacity: 0.0,
            paddingTop: '+=30'
        }, 500, function() {
            $(this).animate({
                opacity: 1,
                paddingTop: '-=30'
            }, 500);
        });
    });
});
