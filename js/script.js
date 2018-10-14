$(document).ready(function (){
    $('#button').click(function (){
        $('html, body').animate({
            scrollTop: $('#content').offset().top
        }, 1000);
    });
});