const test = require('tape');
const request = require('supertest');

const app = require('../../build/dev-server');

test('Practice Integration Testing with a simple Node/Express API', nest => {

    nest.test('Make GET request to /api/v1/users and check payload', assert => {
        const expected = [ 'John J Rambo', 'Conan The Barbarian', 'Billy Jack' ];
        request(app)
            .get('/api/v1/users/badMofos')
            .set('Accept', 'application/json')
            .expect(res => {
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