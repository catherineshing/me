'use strict';

angular.module('me', [
    'ngRoute',
    'angular-clipboard',
    'ui.bootstrap',
    'me.about',
    'me.contact',
    'me.home',
    'me.resume'
])

    .config([
        '$routeProvider',
        function($routeProvider) {
            // Routes
            $routeProvider
                .when('/about', {
                    templateUrl: './src/about/about.tpl.html'
                })
                .when('/contact', {
                    templateUrl: './src/contact/contact.tpl.html'
                })
                .when('/home', {
                    templateUrl: './src/home/home.tpl.html'
                })
                .when('/resume', {
                    templateUrl: './src/resume/resume.tpl.html'
                })
                .otherwise({
                    redirectTo: '/home'
                });
        }
    ])

    .controller('IndexController', [
        '$anchorScroll',
        '$scope',
        function($anchorScroll, $scope) {
            var that = this;

            $scope.name = 'Catherine Shing';

            this.view = 'home';

            this.loadView = function(view) {
                that.view = view;
                that.showDropdown = false;
                $anchorScroll();
            };
        }
    ]);
