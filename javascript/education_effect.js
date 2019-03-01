$('#education-aei, #education-radius-aei').on({
    mouseover: function() {
        $('#education-radius-aei').addClass("radius-data-hover");
    },
    mouseleave: function() {
        $('#education-radius-aei').removeClass("radius-data-hover");
    }
});  

$('#education-zseii, #education-radius-zseii').on({
    mouseover: function() {
        $('#education-radius-zseii').addClass("radius-data-hover");
    },
    mouseleave: function() {
        $('#education-radius-zseii').removeClass("radius-data-hover");
    }
});  

$('#future-technologies').hide();
$('#button-hide-future').on('click', function(){
    $('#future-technologies').slideToggle(1000);
});