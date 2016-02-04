'use strict';

angular.module('me.home', [])

    .controller('HomeController', [
        '$window',
        function($window) {
            this.height = $window.innerHeight;
        }
    ]);
