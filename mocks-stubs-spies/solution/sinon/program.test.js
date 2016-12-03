"use strict";

const {join} = require('path');
const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
const http = require('http');
const sinon = require('sinon');

const {
    retrieveDocument,
    updateDocument,
    deleteDocument
} = require(join(__dirname, '../../../models/crudOperations'));
const statusCodes = require('../../../constants/constants')["statusCodes"];

let retrieveDocStub, insertDocStub, deleteDocStub;
describe('Practice Using Mocks, Stubs, and Spies using sinon', () => {

    before(() => {
        retrieveDocStub = sinon.stub(retrieveDocument);
        insertDocStub = sinon.stub(updateDocument);
        deleteDocStub = sinon.stub(deleteDocument);
    });

    after(() => {
        retrieveDocument.restore();
        updateDocument.restore();
        deleteDocument.restore();
    });

    describe('Stub out all the couchDB calls with sinon mocking library.', () => {

        it('Stub out retrieveDocuments by using sinon.stub and spy with sinon.assert', done => {
            
            done();
        });

        it('', done => {
            
            done();  
        });
    });

});