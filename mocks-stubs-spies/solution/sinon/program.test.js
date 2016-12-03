"use strict";

const {join} = require('path');
const chai = require('chai');
const expect = chai.expect;
const should_chai = chai.should();
const should = require('should');
const sinon = require('sinon');

const DocOperations = require(join(__dirname, '../../../models/crudOperations'));
const statusCodes = require('../../../constants/constants')["statusCodes"];

let retrieveDocStub, insertDocStub, deleteDocStub;
describe('Practice Using Mocks, Stubs, and Spies using sinon', () => {

    before(() => {
        retrieveDocStub = sinon.stub(DocOperations, "retrieveDocument");
        insertDocStub = sinon.stub(DocOperations, "updateDocument");
        deleteDocStub = sinon.stub(DocOperations, "deleteDocument");
    });

    after(() => {
        DocOperations.retrieveDocument.restore();
        DocOperations.updateDocument.restore();
        DocOperations.deleteDocument.restore();
    });

    describe('Stub out all the couchDB calls with sinon mocking library.', () => {

        it('Stub out retrieveDocuments by using sinon.stub and spy with sinon.assert', done => {
            const heMan = [
                "He-Man",
                "Battle Cat",
                "Man-At-Arms",
                "Teela",
                "Skeletor"
            ];
            retrieveDocStub.returns({
                "_id": "heman",
                "_rev": "1-f250259ef8e8c1e6f98734110999246f",
                "heroSlogan": "I have the power",
                "He-Man": [
                    "He-Man",
                    "Battle Cat",
                    "Man-At-Arms",
                    "Teela",
                    "Skeletor"
                ]
            });
            let heManDoc = DocOperations.retrieveDocument({ 
                dbName: 'softwaretesting', 
                name: 'powerRangers'
            });
            should.deepEqual(heManDoc["He-Man"], heMan, "He-Man should have his proper foes and heroes.");
            done();
        });
    });

});