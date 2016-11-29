'use strict';

var validate = require('jsonschema').validate;

var fs=require('fs');


describe.only('Validate various json chart format', function () {
    var schemaText=fs.readFileSync('./chart-schema.json', {encoding:'utf8'});
    
    var dir=fs.readdirSync('./examples');
    
    dir.forEach(function(file) {
        var jsonChart=JSON.parse(fs.readFileSync('./examples/'+file));
        it('validating: '+file, function () {
            var schema=JSON.parse(schemaText);
            var result=validate(jsonChart, schema);
            if (result.errors.length>0) {
                console.log('--------',file);
                console.log(result.errors);
            }
            result.errors.length.should.equal(0);
        });
    });
});
