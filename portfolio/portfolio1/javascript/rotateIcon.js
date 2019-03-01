$(document).ready(function() {
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
});