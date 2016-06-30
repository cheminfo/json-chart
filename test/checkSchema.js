'use strict';

var validate = require('jsonschema').validate;

var fs=require('fs');
var schemaText=fs.readFileSync('./chart-schema.json', {encoding:'utf8'});

describe('Check chart schema', function () {
     it('check if we can load the schme', function () {
         var schema=JSON.parse(schemaText);
         var result=validate({}, schema);
         result.errors.length.should.equal(0);
     });
});
