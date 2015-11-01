/// <reference path="app.js" />
/// <reference path="jquery-2.1.4.js" />
/// <reference path="scrollto.js" />
/// <reference path="angular.js" />
/// <reference path="bootstrap.js" />

var pageOffset = -100; // Pixels
var scrollTime = 3000; // Milliseconds
var satelliteOffset = 2000; // Pixels
var satelliteSpeed = 0.5;  // Multiplier
var backgroundParallaxSpeed = 0.7;  // Multiplier

//$('body').css('background-size', backgroundParallaxSpeed * 100 + '%');

$('#mainMenu li a, .navbar-brand').click(function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top + pageOffset
    }, scrollTime);
});

$(document).scroll(function () {
    console.log();
    $('body').css({ backgroundPosition: '0px ' + $(window).scrollTop() * backgroundParallaxSpeed + 'px' });
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

    for (var i = 0; i < 6; i++)
        $scope.clouds.push($.extend({}, $scope.models.cloud));

    console.log($scope.clouds);
}]);