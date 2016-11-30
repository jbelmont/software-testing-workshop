"use strict";

const test = require('tape');
const {join} = require('path');
const sinon = require('sinon');
const nock = require('nock');
const request = require('supertest')('http://localhost:3000');
const statusCodes = require('../../constants/constants')["statusCodes"];

let spyBadMofos;
test('setup', t => {
    const payload = [ 'John J Rambo', 'Conan The Barbarian', 'Billy Jack' ];
    // Mock the configuration request response
    nock('http://localhost:3000/')
      .get('/api/v1/users/badMofos')
      .reply(200, payload);

    spyBadMofos = sinon.spy(request, "get");
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
                assert.end();
            });
    });
});

test('Practice Using Spies with Sinon', nest => {
    nest.test('Spy GET request to /api/v1/users/badMofos', assert => {
        const ok = statusCodes["ok"];
        request
            .get('/api/v1/users/badMofos')
            .set('Accept', 'application/json')
            .expect(res => {
                sinon.assert.calledTwice(spyBadMofos);
            })
            .end((err, res) => {
                assert.end();
            });
    });
});

test('teardown', t => {
    spyBadMofos.reset();
    t.end();
});