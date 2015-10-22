/// <reference path="jquery-2.1.4.js" />
/// <reference path="scrollto.js" />
/// <reference path="bootstrap.js" />

var body = document.body,
    html = document.documentElement;

var height = Math.max(body.scrollHeight, body.offsetHeight,
                       html.clientHeight, html.scrollHeight, html.offsetHeight);

var doc = document.documentElement;
var scroll = 0;
var lastScroll = scroll;
var bubbles = new Array();

$('#mainMenu li a, .navbar-brand').click(function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top - 100
    }, 2000);
});

$('body').on({
    'mousewheel': function (e) {
        
    }
});

$(document).scroll(function () {
    scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    for (var i = 0; i < bubbles.length; i++) {
        var yPos = parseInt($(bubbles[i]).css('top').slice(0, $(bubbles[i]).css('top').length - 2));
        var zPos = parseInt($(bubbles[i]).css('z-index')) / 1000;

        $(bubbles[i]).css('top', (yPos + ((lastScroll - scroll) / (4 * (zPos * -1)))) + 'px');
    }

    lastScroll = scroll;
});

for (var i = 0; i < 20; i++) {
    var scale = Math.floor((Math.random() * 200) + 10);
    var yPos = Math.floor((Math.random() * height) + 50);
    var xPos = Math.floor(Math.random() * 100);
    var duration = Math.floor((Math.random() * 70) + 30);
    
    var element = $('<div/>')
                    .addClass('ball')
                    .css('top', yPos + 'px')
                    .css('left', xPos + 'vw')
                    .css('animation-duration', duration + 's')
                    .css('width', scale + 'px')
                    .css('height', scale + 'px')
                    .css('z-index', -scale)
                    .css('background-color', 'rgb(' + Math.floor(Math.random() * 255) + ',' +
                                                      Math.floor(Math.random() * 255) + ',' +
                                                      Math.floor(Math.random() * 255) + ')');

    bubbles.push(element);

    $('body').append(element);
}

function clamp(val, min, max) {
    val = Math.max(min, val);
    val = Math.min(max, val);
    return val;
}