'use strict';

angular.module('me.about', [])

    .controller('AboutController', [
        function() {
            console.log('about');

            this.intro = 'hello world';

            this.details = [
                'Born and raised in the Bay Area',
                'Loves dogs',
                'Fantasy Football Champion 2013, 2015'
            ];
        }
    ]);
