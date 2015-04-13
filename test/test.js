'use strict';

var Chart = require('..');

describe('JSON Chart', function () {

    describe('validate', function () {

        it('should work', function () {

            Chart.validate({
                data: [{
                    x: [0, 1, 2],
                    y: [0, 2, 4]
                }]
            });

        });

    });

});
