"use strict";

const {join} = require('path');
const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
const sinon = require('sinon');

const DocOperations = require(join(__dirname, '../models/crudOperations'));
const statusCodes = require('../constants/constants')["statusCodes"];

const sandbox = sinon.sandbox.create();
let retrieveDocStub, insertDocStub, deleteDocStub;
describe('Practice Using Mocks, Stubs, and Spies using sinon', () => {

    before(() => {
        // TODO: Add setup here
    });

    after(() => {
        sandbox.restore();
    });

    describe('Stub out all the couchDB calls with sinon mocking library.', () => {

        it('Stub out retrieveDocuments by using sinon.stub and spy with sinon.assert', done => {
            done();
        });

        it('Stub out insertDocument and test calling sinon.stub with different arguments', done => {
            done();
        });

        it('Stub out deleteDocument and test calling sinon.stub multiple times', done => {
            done();
        });
    });

});