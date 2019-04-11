$(document).ready(function() {
    $('.card').on({
        mouseover: function() {
            const txt = this.id + '-text';
            $("#" + txt).css("padding-top", "20%");
            $("#" + this.id).css({
                "transform": "scale(1.01)",
                "box-shadow": "1px 1px 10px 5px rgba(0, 0, 0, 0.2)"
             });
        },
        mouseleave: function() {
            const txt = this.id + '-text';
            $("#" + txt).css("padding-top", "40%");
            $("#" + this.id).css({
                "transform": "scale(1.00)",
                "box-shadow": "1px 1px 10px 5px rgba(0, 0, 0, 0)"
             });
        },
        click: function() {
            alert('Po kliknięciu przekierowanie np. do podstrony z cenami');
        }
    })

    //button alert
    $('.parallax-button').on('click', function() {
        alert('klik! klik! :)');
    })

    /*----------serv hover---------- */
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
    /*----------serv hover END---------- */
});
