'use strict';

var Chart = require('..');

describe('JSON Chart', function () {

     it('check  1D array xyxyxy', function () {
         var data=[1,2,3,4,5,6];
         var result=Chart.validate(data,{type:'1DXY'});
         result.should.eql({data:[{x:[1,3,5], y:[2,4,6]}]});

         var result=Chart.validate(data);
         result.should.eql({data:[{x:[0,1,2,3,4,5], y:[1,2,3,4,5,6]}]});
     });
    
    it('check 2D array xy xy xy', function () {
        var data=[[1,4],[2,5],[3,6]];
        var result=Chart.validate(data);
        result.should.eql({data:[{x:[1,2,3], y:[4,5,6]}]});
    });

    it('check 2D array xxx yyy', function () {
        var data=[[1,3,5],[2,4,6]];
        var result=Chart.validate(data);
        result.should.eql({data:[{x:[1,3,5], y:[2,4,6]}]});
         
    });

    it('check x y object', function () {
        var data={x:[1,3,5],y:[2,4,6]};
        var result=Chart.validate(data);
        result.should.eql({data:[{x:[1,3,5], y:[2,4,6]}]});

    });
    
});
