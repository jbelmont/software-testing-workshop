const chai = require('chai');
const expect = chai.expect;

require('../exercises/findIndex');

describe('Practice Unit testing with BDD style library such as Mocha', function() {

    it('Unit test the Array.prototype.findIdx function', function(done) {
        const numbers = [1,2,3,4,5];
        const expected = 2;
        expect(numbers.findIdx(val => val === 3)).to.eql(expected);

        const names = [
            {
                name: 'Marcel'
            },
            {
                name: 'Leo'
            },
            {
                name: 'Dave'
            }
        ];
        const IDX = 1;
        expect(names.findIdx(val => val["name"] === 'Leo')).to.eql(IDX);
        expect(names.findIdx(val => val["name"] === 'Allan') > -1).to.not.be.ok;
        done();  
    });
    
});