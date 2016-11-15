const test = require('tape');
const request = require('supertest');

const app = require('../../app');

test('Practice Integration Testing with a simple Node/Express API', nest => {

    // TODO: Make passing integration test by giving expected variable
    // GO to models/users.js and look at JSON structure.
    nest.test('Test /api/v1/users/badMofos', assert => {
        // const expected = ...;  TODO: add expected block here
        request(app)
            .get('/api/v1/users/badMofos')
            .set('Accept', 'application/json')
            .expect(res => {
                
            })
            .end((err, res) => {
                assert.end();
            });
    });

});