/// <reference path="app.js" />
/// <reference path="jquery-2.1.4.js" />
/// <reference path="scrollto.js" />
/// <reference path="angular.js" />
/// <reference path="jquery-ui.js" />
/// <reference path="bootstrap.js" />

var pageOffset = -100; // Pixels
var scrollTime = 3000; // Milliseconds

var satelliteOffset = 2000; // Pixels
var satelliteSpeed = 0.5;  // Multiplier

var planetOffset = 100; // Pixels
var planetSpeed = 0.3;  // Multiplier

var backgroundParallaxSpeed = 0.7;  // Multiplier
var numberOfClouds = 3;

//$('body').css('background-size', backgroundParallaxSpeed * 100 + '%');
$("#accordion").accordion({
    heightStyle: "content",
    autoHeight: false,
    clearStyle: true,
});

$('#mainMenu li a, .navbar-brand').click(function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top + pageOffset
    }, scrollTime);
});

$(document).scroll(function () {
    var scrollTop = $(window).scrollTop();
    $('body').css({ backgroundPosition: '0px ' + scrollTop * backgroundParallaxSpeed + 'px' });
    $('#planet').css({ top: (-$(window).scrollTop() * planetSpeed) + planetOffset + 'px' });
    $('#satellite').css({ top: (-$(window).scrollTop() * satelliteSpeed) + satelliteOffset + 'px' });
});

angular.module('DPY3.SiteCtrl', []).controller('siteCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.clouds = new Array();

    $scope.models = {
        cloud: {
            top: 0,
            left: 0,
            zIndex: 0
        }
    };

    $scope.sendMessage = function () {
        $scope.name = '';
        $scope.email = '';
        $scope.message = '';

        // TODO: Ajax message to server

        alert('Thanks for your message!');
    }

    for (var i = 0; i < numberOfClouds; i++) {
        var cloud = $.extend({}, $scope.models.cloud);
        cloud.top = -10 * (i % 2) + 50;
        cloud.left = ((100 / numberOfClouds) * i) + (10 / 3);
        $scope.clouds.push(cloud);
    }

    console.log($scope.clouds);
}]);