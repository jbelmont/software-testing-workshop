"use strict";

const test = require('tape');
const {join} = require('path');
const nock = require('nock');
const request = require('supertest')('http://localhost:3000');
const statusCodes = require('../../constants/constants')["statusCodes"];

let body, getScope, postScope;
test('setup', t => {
    const payload = [ 'John J Rambo', 'Conan The Barbarian', 'Billy Jack' ];
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
    postScope = nock('http://localhost:3000/')
        .post('/api/v1/couch/insertDocument/bucks', body)
        .reply(201, postPayload)
    t.end();
});

test('Practice Testing with Mock', nest => {
    nest.test('Mock GET request to /api/v1/users/badMofos', assert => {
        const ok = statusCodes["ok"];
        request
            .get('/api/v1/users/badMofos')
            .set('Accept', 'application/json')
            .expect(res => {
                assert.equal(res.status, ok);
                const soldiers = res.body
                const expected = [ 'John J Rambo', 'Conan The Barbarian', 'Billy Jack' ];
                assert.deepEqual(
                    soldiers, 
                    expected, 
                    `Should return [ 'John J Rambo', 'Conan The Barbarian', 'Billy Jack' ]`
                );
            })
            .end((err, res) => {
                assert.equal(getScope.isDone(), true, "Get Request was executed with Nock Spy");
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
                assert.equal(res.status, created);
                assert.equal(res.body.prices[0], 1);
            })
            .end((err, res) => {
                assert.equal(postScope.isDone(), true, "POST Request was executed with Nock Spy");
                assert.end();
            });
    });
});

test('teardown', t => {
    nock.cleanAll();
    t.end();
});