/*jslint node: true */
'use strict';

angular.module('me.contact', [])

    .controller('ContactController', [
        '$sce',
        function($sce) {
            var that = this;

            this.actionUrl = '';

            this.updateActionUrl = function() {
                that.actionUrl = $sce.trustAsResourceUrl('https://docs.google.com/forms/d/1E1zYwFsiVTnXFLPQoyu_p34LUTRGdSQHut5km3eNjok/formResponse?' +
                    'entry.549975105=' + that.name +
                    '&entry.364966672=' + that.email +
                    '&entry.1033360665=' + that.company +
                    '&entry.1159796349=' + that.message);
            };

            this.send = function() {
                that.sent = true;
            };
        }
    ]);
