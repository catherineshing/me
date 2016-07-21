/*jslint node: true */
'use strict';

angular.module('me.about', [])

    .controller('AboutController', [
        '$window',
        function($window) {
            this.title = 'Front-End Developer';

            this.description = 'I am a Bay Area native and UC San Diego alum. I have ' +
                (new Date().getFullYear() - 2012).toString() +
                ' years of experience working with a variety of technologies like AngularJS, Node.js, Java, and PHP. When I\'m not coding, I enjoy hanging out with my dog Bernie, eating good food, and kicking butt in Fantasy Football.';

            this.isIos = /iPhone|iPad|iPod/i.test($window.navigator.userAgent);
            this.clipboardSupported = false;
        }
    ]);
