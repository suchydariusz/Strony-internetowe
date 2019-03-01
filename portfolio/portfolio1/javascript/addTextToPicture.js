$(document).ready(function() {
    $('.text-image').hide();
    $('.paral-image, .caption').mouseover(function() {
        let parallaxId;
        if(this.id.length == 16) {
            parallaxId = this.id.charAt(15);
        }
        else {
            parallaxId = this.id.charAt(7);
        }
        $('#text-image-' + parallaxId ).show();
        $('#parallax-image-' + parallaxId).addClass('paral-image-hover');

        $('.paral-image').mouseleave(function() {
            $('#text-image-'+ parallaxId ).hide();
            $('#parallax-image-' + parallaxId).removeClass('paral-image-hover');
        });
    });  
});