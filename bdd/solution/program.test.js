const chai = require('chai');
const expect = chai.expect;
const should = chai.should();

require('../exercises/findIndex');
require('../exercises/find');

describe('Practice Unit testing with BDD style library such as Mocha', function() {

    it('Unit test the Array.prototype.findIdx function', done => {
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

    it('Unit test the Array.prototype.findInput function', done => {
        const information = [
            {
                city: 'Cincinnati',
                population: 2500000
            },
            {
                city: 'Phoenix',
                timezone: 'Mountain Time Zone' 
            },
            {
                city: 'Raleigh',
                state: 'NC'
            }
        ];
        const expected = {
            city: 'Raleigh',
            state: 'NC'
        };
        information.findInput(info => info["city"] === 'Raleigh').should.eql(expected);
        should.equal(information.findInput(info => info["population"] < 200000), undefined);
        done();
    });
    
});