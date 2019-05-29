//----------navbar show------------
$(function() {
    $('.navbar-nav').hide().slideDown(1000);
});
//----------navbar show END------------

//----------education section effect------------
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
//----------education section effect END------------

//----------email form------------
$('#contactForm').on('submit', function(e) {
    var name = $('#formName').val();
    var surname = $('#formSurname').val();
    var email = $('#formEmail').val();
    var textArea = $('#inputTextArea').val();

    if((name && surname && email && textArea) != "") {
        e.preventDefault();
        $.ajax({
            type: 'post',
            url: 'kontakt.php',
            data: $('#contactForm').serialize(),
            success: function() {
                alert('Wiadomość została wysłana');
                $('#formName').val('');
                $('#formSurname').val('');
                $('#formEmail').val('');
                $('#inputTextArea').val('');
            }
        });
    }
    else {
        e.preventDefault();
        alert('Nie udało się wysłać wiadomości, nie wszystkie pola zostały wypełnione');
    }
});

//----------email form END------------

//----------goToTop------------
$(document).ready(function(){
    $(window).scroll(function () {
           if ($(this).scrollTop() > 60) {
               $('#back-to-top').fadeIn();
           } else {
               $('#back-to-top').fadeOut();
           }
       });

       $('#back-to-top').click(function () {
           $('#back-to-top').hide();
           $('body,html').animate({
               scrollTop: 0
           }, 800);
           return false;
       });
       
       $('#back-to-top').show();
});
//----------goToTop END------------

//----------scroll effect------------
var heightDirectContact = $('.footer-col-right').offset().top;
if($(window).height() <= 1080) {
    $('.footer-col-right').hide();
}
else {
    $('.footer-col-right').show();
}

var heightMyPhoto = $('#my-image').offset().top;

$(function() {
    $('.text-right-photo').one('mouseover', function() {
            $('#my-image img').css({
                'border': '2px solid #00b894',
                'transition': 'border 2s'
            });
    });
});

$(window).scroll(function() {
    var heightSite = $(window).scrollTop();
    if(heightSite > heightDirectContact-(heightDirectContact * 0.2)) {
        $('.footer-col-right').fadeIn(3000);
    }
});

//----------scroll effect end------------

//----------technologies img section------------
$(function() {
    $('.technologies-logo').on('mouseover', function() {
        $(this).stop().animate({
            opacity: 0.0,
            paddingTop: '10'
        }, 300, function() {
            $(this).stop().animate({
                opacity: 1,
                paddingTop: '0'
            }, 300);
        });
    });
});
//----------technologies img section end------------