/*jslint node: true */
'use strict';

angular.module('me.about', [])

    .controller('AboutController', [
        function() {
            this.title = 'Front-End Developer';

            this.description = 'I am a Bay Area native and UC San Diego alum. I have ' +
                (new Date().getFullYear() - 2012).toString() +
                ' years of experience working with a variety of technologies like AngularJS, Node.js, Java, and PHP. When I\'m not coding, I enjoy hanging out with my dog Bernie, eating good food, and kicking butt in Fantasy Football.';

            this.teslaLink = 'http://ts.la/catherine6931';
        }
    ]);
