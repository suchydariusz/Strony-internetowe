$(document).ready(function() {
    $('.gallery').on('click', function() {
        let imageId = this.id;
        $("#main-img").attr('src', 'images/gallery/' + imageId + '.jpg');
    })
});

