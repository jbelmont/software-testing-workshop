"use strict";

const test = require('tape');
const {join} = require('path');
const supertest = require('supertest');
const sinon = require('sinon');
const proxyquire = require('proxyquire');
const statusCodes = require('../../constants/constants')["statusCodes"];

// globals
let getBadMofos, request, app;

test('setup', t => {
    // A stub we can use to control conditionals
    getBadMofos = sinon.stub();

    app = require('express')();
    // Bind a route to our application
    proxyquire(join(__dirname, '../../users/users.js'), getBadMofos)(app);

    // Get a supertest instance so we can make requests
    request = supertest(app);
    t.end();
});

test('Practice Testing with Mock', nest => {
    getBadMofos.yields(null, [ 'John J Rambo', 'Conan The Barbarian', 'Billy Jack' ]);
    nest.test('Mock GET request to /api/v1/users/badMofos', assert => {
        const ok = statusCodes["ok"];
        request(app)
            .get('/badMofos')
            .set('Accept', 'application/json')
            .expect(res => {
                assert.equal(res.status, ok);
                const soldiers = res.body.names
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

test('teardown', t => {
  request.get.restore();
  t.end();
});