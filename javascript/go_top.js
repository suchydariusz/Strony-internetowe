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