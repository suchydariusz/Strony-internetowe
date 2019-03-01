$(document).ready(function() {
    $('#hideImg1, #hideImg2').on({
        mouseover: function() {
            const id = this.id;
            if(id === "hideImg1") {
                $('#texthide1').hide();
                $('#texthide2').hide();
            }
            else if(id === "hideImg2") {
                $('#texthide3').hide();
                $('#texthide4').hide();
            }
            else return false;
        },
        mouseleave: function() {
            const id = this.id;
            if(id === "hideImg1") {
                $('#texthide1').show();
                $('#texthide2').show();
            }
            else if(id === "hideImg2") {
                $('#texthide3').show();
                $('#texthide4').show();
            }
            else return false;
        }
    })
})
