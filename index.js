'use strict';

angular.module('me', [
    'ngRoute',
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
        '$rootScope',
        function($anchorScroll, $rootScope) {
            var that = this;

            $rootScope.name = 'Catherine Shing';

            this.view = 'home';

            this.loadView = function(view) {
                that.view = view;
                $anchorScroll();
            };
        }
    ]);
