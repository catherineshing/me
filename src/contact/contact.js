/*jslint node: true */
'use strict';

angular.module('me.contact', [])

    .controller('ContactController', [
        '$http',
        function($http) {
            var that = this;

            this.submit = function() {
                if (!that.spam) {
                    $http.post('./src/contact/contact.php', {
                        name: that.name,
                        email: that.email,
                        message: that.message
                    }).then(function() {
                        that.sent = true;
                    });
                }
            };
        }
    ]);
