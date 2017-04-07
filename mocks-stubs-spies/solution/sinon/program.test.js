"use strict";

const {join} = require('path');
const chai = require('chai');
const expect = chai.expect;
const should = require('should');
const sinon = require('sinon');
const assert = require('chai').assert;

const DocOperations = require(join(__dirname, '../../../models/crudOperations'));
const statusCodes = require('../../../constants/constants')["statusCodes"];

const sandbox = sinon.sandbox.create();
let retrieveDocStub, insertDocStub, deleteDocStub;
describe('Practice Using Mocks, Stubs, and Spies using sinon', () => {

    before(() => {
        retrieveDocStub = sandbox.stub(DocOperations, "retrieveDocument").returns({
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

        insertDocStub = sandbox.stub(DocOperations, "insertDocument");
        insertDocStub.withArgs().throws({
            "err": {
                "message": "400",
                "stack": "Error: 400\n  some file somewhere"
            },
            "message": "Missing name/document."
        });
        insertDocStub.withArgs({
            "document": {
                "marvel": "A bunch of characters",
                "characters": [
                    "Spider Man",
                    "Thor",
                    "Incredible Hulk",
                    "Superman",
                    "Batman"
                ]
            }
        }).returns({
            "_id": "heman",
            "_rev": "9-cf3fae66dc4bc00b7c16a70a087e2f7b",
            "heroSlogan": "I have the power",
            "He-Man": [
                "He-Man",
                "Battle Cat",
                "Man-At-Arms",
                "Teela",
                "Skeletor"
            ]
        });

        deleteDocStub = sandbox.stub(DocOperations, "deleteDocument");
        deleteDocStub.onCall(0).returns();
        deleteDocStub.onCall(1).returns({
            "message": "deleted",
            "stack": "Error: deleted\n stuff",
            "name": "Error",
            "error": "not_found",
            "reason": "deleted",
            "scope": "couch",
            "statusCode": 404,
            "request": {
                "method": "GET",
                "headers": {
                "content-type": "application/json",
                "accept": "application/json"
                },
                "uri": "http://127.0.0.1:5984/softwaretesting/bob"
            },
            "headers": {
                "date": "Date 1",
                "content-type": "application/json",
                "cache-control": "must-revalidate",
                "statusCode": 404,
                "uri": "http://127.0.0.1:5984/softwaretesting/bob"
            },
            "errid": "non_200",
            "description": "couch returned 404"
        });
    });

    after(() => {
        sandbox.restore();
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
            const heManDoc = DocOperations.retrieveDocument({
                dbName: 'softwaretesting',
                name: 'powerRangers'
            });
            sinon.assert.calledOnce(retrieveDocStub);
            should.deepEqual(heManDoc["He-Man"], heMan, "He-Man should have his proper foes and heroes.");
            done();
        });

        it('Stub out insertDocument and test calling sinon.stub with different arguments', done => {
            try {
                const insertDocCall1 = insertDocStub();
            } catch (e) {
                sinon.assert.threw(insertDocStub);
            }
            const insertDoc = {
                "document": {
                    "marvel": "A bunch of characters",
                    "characters": [
                        "Spider Man",
                        "Thor",
                        "Incredible Hulk",
                        "Superman",
                        "Batman"
                    ]
                }
            };
            const insertDocCall2 = insertDocStub(insertDoc);
            sinon.assert.calledWith(insertDocStub, insertDoc);
            done();
        });

        it('Stub out deleteDocument and test calling sinon.stub multiple times', done => {
            const deleteDoc1 = deleteDocStub();
            should.equal(deleteDoc1, undefined);
            const deleteDoc2 = deleteDocStub();
            sinon.assert.calledTwice(deleteDocStub);
            should.ok(deleteDoc2["error"], "Should return an error when tryingn to delete document again");
            done();
        });
    });

});
