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
                    redirectTo: '/about'
                });
        }
    ])

    .controller('IndexController', [
        '$anchorScroll',
        '$rootScope',
        function($anchorScroll, $rootScope) {
            var that = this;

            $rootScope.name = 'Catherine Shing';

            this.view = 'about';

            this.loadView = function(view) {
                that.view = view;
                that.showDropdown = false;
                $anchorScroll();
            };
        }
    ]);
