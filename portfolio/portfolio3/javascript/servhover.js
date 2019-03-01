$(document).ready(function() {
    $('.servhov').on({
        mouseover: function() {
            const image = this.id + '-image';
            $("#" + image).css("transform", "rotateX(360deg)");
        },
        mouseleave: function() {
            const image = this.id + '-image';
            $("#" + image).css("transform", "rotateX(0deg)");
        }
    });
})