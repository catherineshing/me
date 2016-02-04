'use strict';

angular.module('me.about', [])

    .controller('AboutController', [
        function() {
            var that = this;

            this.title = 'Front-End Developer';

            this.description = 'I am a Bay Area native and UCSD alum. I have ' +
                (new Date().getFullYear() - 2012).toString() +
                ' years of experience working with a variety of technologies like AngularJS, Node.js, Java, and PHP. When I\'m not coding, I enjoy hanging out with my dog Bernie, eating good food, and kicking butt in Fantasy Football.';
        }
    ]);
