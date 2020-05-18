"use strict";

const test = require('tape');
const {join} = require('path');
const sinon = require('sinon');
const should = require('should');

const statusCodes = require('../constants/constants')["statusCodes"];
const DocOperations = require(join(__dirname, '../models/crudOperations'));

let sandbox;
let retrieveDocStub, insertDocStub, deleteDocStub;
test('setup', t => {
    sandbox = sinon.sandbox.create();
    // TODO: setup work here.
    t.end();
});

// TODO: finish the tests here.
test('Practice Testing with Mocks, Spies, Stubs using Sinon', nest => {
    nest.test('Stub out retrieveDocuments by using sinon.stub and spy with sinon.assert', assert => {
        assert.end();
    });

    nest.test('Stub out insertDocument and test calling sinon.stub with different arguments', assert => {
        assert.end();
    });

    nest.test('Stub out deleteDocument and test calling sinon.stub multiple times', assert => {
        assert.end();
    });
});

test('teardown', t => {
    sandbox.restore();
    t.end();
});