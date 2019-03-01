$(document).ready(function() {
    $('.all-images').on({
        mouseover: function() {
            const id = this.id;
            const imageId = id.replace("div","");
            $("#" + imageId).addClass("img-hov");
            $("#" + imageId.replace("image", "text")).addClass("text-hov");
            $("#" + id).addClass(imageId.replace("image","div-bg-hov"));
        }, 
        mouseleave: function() {
        const id = this.id;
        const imageId = id.replace("div","");
        $("#" + id.replace("div","")).removeClass("img-hov");
        $("#" + imageId.replace("image", "text")).removeClass("text-hov");
        $("#" + id).removeClass(imageId.replace("image","div-bg-hov"));
        }
    })

    $('#image2div, #image3div, #image4div').on('click', function() {
        alert('Kliknij zakładkę fryzjer aby zobaczyć więcej');
    })
})