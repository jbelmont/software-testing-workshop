"use strict";

const test = require('tape');
const {join} = require('path');
const sinon = require('sinon');

const statusCodes = require('../../../constants/constants')["statusCodes"];
const DocOperations = require(join(__dirname, '../../../models/crudOperations'));

let sandbox;
let retrieveDocStub, insertDocStub, deleteDocStub;
test('setup', t => {
    sandbox = sinon.sandbox.create();
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

    insertDocStub = sandbox.stub(DocOperations, "updateDocument");
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
    t.end();
});

test('Practice Testing with Mocks, Spies, Stubs using Sinon', nest => {
    nest.test('Stub out retrieveDocuments by using sinon.stub and spy with sinon.assert', assert => {
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
        assert.deepEqual(heManDoc["He-Man"], heMan, "He-Man should have his proper foes and heroes.");
        assert.end();
    });

    nest.test('Stub out insertDocument and test calling sinon.stub with different arguments', assert => {
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
        assert.end();
    });

    nest.test('Stub out deleteDocument and test calling sinon.stub multiple times', assert => {
        const deleteDoc1 = deleteDocStub();
        assert.equal(deleteDoc1, undefined);
        const deleteDoc2 = deleteDocStub();
        sinon.assert.calledTwice(deleteDocStub);
        assert.ok(deleteDoc2["error"], "Should return an error when trying to delete document again");
        assert.end();
    });
});

test('teardown', t => {
    sandbox.restore();
    t.end();
});