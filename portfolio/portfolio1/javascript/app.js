
$(document).ready(function() {
    /*-------Add text to picture-----------*/
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
    /*-------Add text to picture END-----------*/

    /*-------change photo gallery-----------*/
    $('.gallery').on('click', function() {
        let imageId = this.id;
        $("#main-img").attr('src', 'images/gallery/' + imageId + '.jpg');
    })
    /*-------change photo gallery END-----------*/

    /*-------rotate icon-----------*/
    $('.fa-plus-square, #plus-text-1, #plus-text-2, #plus-text-3, #plus-text-4').on({
        mouseover: function() {
            let id = $(this).attr('id');;
            console.log(id.substr(id.length-1));
            $('#plus-icon-' + id.substr(id.length-1)).addClass('fa-plus-square-hover');
        },
        mouseleave: function() {
            let id = this.id;
            $('#plus-icon-' + id.substr(id.length-1)).removeClass('fa-plus-square-hover ');
        }
    });

    $('.completeness').on({
        mouseover: function() {
            let id = this.id; //completness-icon-(id)
            console.log('#' + id.substr(13));
            $('#' + id.substr(13)).addClass('fas-hover');
        },
        mouseleave: function() {
            let id = this.id;
            $('#' + id.substr(13)).removeClass('fas-hover');
        }
    });
/*-------rotate icon END-----------*/
});




