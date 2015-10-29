/// <reference path="app.js" />
/// <reference path="jquery-2.1.4.js" />
/// <reference path="scrollto.js" />
/// <reference path="angular.js" />
/// <reference path="bootstrap.js" />

var pageOffset = -100; // Pixels
var scrollTime = 3000; // Milliseconds
var satelliteOffset = 2000; // Pixels
var satelliteSpeed = 0.5;  // Multiplier
var backgroundParallaxSpeed = 0.5;  // Multiplier

$('#mainMenu li a, .navbar-brand').click(function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top + pageOffset
    }, scrollSpeed);
});

$(document).scroll(function () {
    console.log();
    $('body').css({ backgroundPosition: '0px ' + $(window).scrollTop() * backgroundParallaxSpeed + 'px' });
    $('#satellite').css({ top: (-$(window).scrollTop() * satelliteSpeed) + satelliteOffset + 'px' });
});

angular.module('DPY3.SiteCtrl', []).controller('siteCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.new = {
        cloud: {}
    };

    for (var i = 0; i < 6; i++)
        $scope.clouds.push($scope.new.cloud);
}]);