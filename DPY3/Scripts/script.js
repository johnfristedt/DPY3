/// <reference path="jquery-2.1.4.js" />
/// <reference path="scrollto.js" />
/// <reference path="bootstrap.js" />

$('#mainMenu li a').click(function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top - 50
    }, 1000);
});