"use strict";

const test = require('tape');
const {join} = require('path');
const nock = require('nock');
const request = require('supertest')('http://localhost:3000');
const statusCodes = require('../../constants/constants')["statusCodes"];

let getScope, postScope, postScope2, deleteScope, deleteScope2, body, body2, body3;
test('setup', t => {
    const payload = [ 'John J Rambo', 'Conan The Barbarian', 'Billy Jack' ];
    const requestPostHeaders = {
        reqheaders: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        }
    };

    // Mock the configuration request response
    getScope = nock('http://localhost:3000/')
      .get('/api/v1/users/badMofos')
      .reply(200, payload);

    const postPayload = {
        "_id":"movies",
        "_rev":"1-5a778353b79bf977b259522b9bd06a88",
        "prices":[1,2,3,4,5],
        "ratings":[
            {"saying":"1 buck"},
            {"saying":"2 bucks"},
            {"saying":"3 bucks"},
            {"saying":"4 bucks"},
            {"saying":"5 bucks"}
        ]
    };

    const postPayload2 = {
        "_id": "spicegirls",
        "_rev": "41-6ac81d7fd42042177fb72ed8de747885",
        "girls": [
            "Posh Spice",
            "Scary Spice",
            "Baby Spice",
            "Sporty Spice",
            "Ginger Spice"
        ],
        "songs": [
            "Wannabe",
            "Stop",
            "Viva Forever",
            "Spice up your life"
        ]
    };

    body = {
        "document": {
            "prices": [1, 2, 3, 4, 5],
            "ratings": [
                {
                    "saying": "1 buck"
                },
                {
                    "saying": "2 bucks"
                },
                {
                    "saying": "3 bucks"
                },
                {
                    "saying": "4 bucks"
                },
                {
                    "saying": "5 bucks"
                }
            ]
        }
    };

    body2 = {
        "name": "spicegirls",
        "document": {
            "girls": ["Posh Spice", "Scary Spice", "Baby Spice", "Sporty Spice", "Ginger Spice"],
            "songs": ["Wannabe", "Stop", "Viva Forever", "Spice up your life"]
        }
    };

    body3 = {
	    "name": "spicegirls"
    };

    postScope = nock('http://localhost:3000/', requestPostHeaders)
        .post('/api/v1/couch/insertDocument/bucks', body)
        .reply(201, postPayload);

    postScope2 = nock('http://localhost:3000/', requestPostHeaders)
        .post('/api/v1/couch/insertDocument', body2)
        .reply(201, postPayload2);

    deleteScope = nock('http://localhost:3000/', {
            'Content-Type': 'application/json'
        })
        .post('/api/v1/couch/deleteDocument', body3)
        .reply(204);

    deleteScope2 = nock('http://localhost:3000/', {
            'Content-Type': 'application/json'
        })
        .post('/api/v1/couch/deleteDocument/spicegirls')
        .reply(204);

    t.end();
});

test('Practice Testing with Mock', nest => {
    nest.test('Mock GET request to /api/v1/users/badMofos', assert => {
        const ok = statusCodes["ok"];
        request
            .get('/api/v1/users/badMofos')
            .set('Accept', 'application/json')
            .expect(res => {
                assert.equal(res.status, ok, "200 Status Code returned");
                const soldiers = res.body
                const expected = [ 'John J Rambo', 'Conan The Barbarian', 'Billy Jack' ];
                assert.deepEqual(
                    soldiers, 
                    expected, 
                    `Should return [ 'John J Rambo', 'Conan The Barbarian', 'Billy Jack' ]`
                );
            })
            .end((err, res) => {
                assert.equal(getScope.isDone(), true, "Get /api/v1/users/badMofos Nock Spy called");
                assert.end();
            });
    });

    nest.test('Mock POST request to /api/v1/couch/insertDocument/:docname', assert => {
        const created = statusCodes["create"];
        request
            .post('/api/v1/couch/insertDocument/bucks')
            .set({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            })
            .send(body)
            .expect(res => {
                assert.equal(res.status, created, "201 Status Code returned");
                assert.equal(res.body.prices[0], 1, "Body should contain 1");
            })
            .end((err, res) => {
                assert.equal(postScope.isDone(), true, "POST /api/v1/couch/insertDocument/:docname Nock Spy called");
                assert.end();
            });
    });

    nest.test('Mock POST request to /api/v1/couch/insertDocument', assert => {
        const created = statusCodes["create"];
        request
            .post('/api/v1/couch/insertDocument')
            .set({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            })
            .send(body2)
            .expect(res => {
                assert.equal(res.status, created, "201 Status Code returned");
                assert.equal(res.body.girls[0], "Posh Spice", "Body should contain Posh Spice as value.");
            })
            .end((err, res) => {
                assert.equal(postScope.isDone(), true, "POST /api/v1/couch/insertDocument Nock Spy called");
                assert.end();
            });
    });

    nest.test('Mock DELETE request to /api/v1/couch/deleteDocument', assert => {
        const deleted = statusCodes["delete"];
        request
            .post('/api/v1/couch/deleteDocument')
            .set({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            })
            .send(body3)
            .expect(res => {
                assert.equal(res.status, deleted, "204 Status Code returned");
            })
            .end((err, res) => {
                assert.equal(postScope.isDone(), true, "DELETE /api/v1/couch/deleteDocument Nock Spy called");
                assert.end();
            });
    });

    nest.test('Mock DELETE request to /api/v1/couch/deleteDocument/:docname', assert => {
        const deleted = statusCodes["delete"];
        request
            .post('/api/v1/couch/deleteDocument/spicegirls')
            .set({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            })
            .send(body3)
            .expect(res => {
                assert.equal(res.status, deleted, "204 Status Code returned");
            })
            .end((err, res) => {
                assert.equal(postScope.isDone(), true, "DELETE /api/v1/couch/deleteDocument/:docname Nock Spy called");
                assert.end();
            });
    });
});

test('teardown', t => {
    // Cleanup done here.
    nock.cleanAll();
    t.end();
});