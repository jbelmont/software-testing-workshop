const test = require('tape');
const request = require('supertest');

const app = require('../../build/dev-server');
const statusCodes = require('../../constants/constants')["statusCodes"];

test('Practice Integration Testing with a Restful API', nest => {

    nest.test('GET request to /api/v1/users/badMofos', assert => {
        const ok = statusCodes["ok"];
        const expected = [ 'John J Rambo', 'Conan The Barbarian', 'Billy Jack' ];
        request(app)
            .get('/api/v1/users/badMofos')
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

    nest.test('POST request to /api/v1/couch/insertDocument', assert => {
        const created = statusCodes["create"];
        request(app)
            .post('/api/v1/couch/insertDocument')
            .set({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            })
            .send({
                "name": "spicegirls",
                "document": {
                    "girls": ["Posh Spice", "Scary Spice", "Baby Spice", "Sporty Spice", "Ginger Spice"],
                    "songs": ["Wannabe", "Stop", "Viva Forever", "Spice up your life"]
                }
            })
            .expect(res => {
                assert.equal(res.status, created);
                assert.ok(res.body);
                assert.ok(res.body._id);
            })
            .end((err, res) => {
                assert.end();
            });
    });

    nest.test('POST request to /api/v1/couch/insertDocument', assert => {
        const conflict = statusCodes["conflict"];
        request(app)
            .post('/api/v1/couch/insertDocument')
            .set({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            })
            .send({
                "name": "spicegirls",
                "document": {
                    "girls": ["Posh Spice", "Scary Spice", "Baby Spice", "Sporty Spice", "Ginger Spice"],
                    "songs": ["Wannabe", "Stop", "Viva Forever", "Spice up your life"]
                }
            })
            .expect(res => {
                assert.equal(res.status, conflict);
                assert.equal(res.body.name, 'Error');
                assert.equal(res.body.reason, 'Document update conflict.');
            })
            .end((err, res) => {
                assert.end();
            });
    });

    nest.test('Delete request to /api/v1/couch/deleteDocument', assert => {
        
    });

});