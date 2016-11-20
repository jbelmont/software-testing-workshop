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

    nest.test('POST request to /api/v1/couch/insertDocument that checks Update Conflict', assert => {
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
        const deleted = statusCodes["delete"];
        request(app)
            .del('/api/v1/couch/deleteDocument')
            .set({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            })
            .send({
                "name": "spicegirls"
            })
            .expect(res => {
                assert.equal(res.status, deleted);
            })
            .end((err, res) => {
                assert.end();
            })
    });

    nest.test('Delete request to /api/v1/couch/deleteDocument', assert => {
        const gone = statusCodes["gone"];
        request(app)
            .del('/api/v1/couch/deleteDocument')
            .set({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            })
            .send({
                "name": "spicegirls"
            })
            .expect(res => {
                assert.equal(res.status, gone);
                assert.equal(res.body.message, "deleted");
            })
            .end((err, res) => {
                assert.end();
            })
    });

    nest.test('POST request to /api/v1/couch/insertDocument', assert => {
        const created = statusCodes["create"];
        request(app)
            .post('/api/v1/couch/insertDocument/movies')
            .set({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            })
            .send({
                "document": {
                    "movies": ["Berry Gordy's Last Dragon", "Predator", "Rocky", "Rambo", "Dude Where's My Car"],
                    "ratings": [
                        {
                            "rating": "5 Stars"
                        },
                        {
                            "rating": "4 Stars"
                        },
                        {
                            "rating": "5 Stars"
                        },
                        {
                            "rating": "5 Stars"
                        },
                        {
                            "rating": "2 Stars"
                        }
                    ]
                }
            })
            .expect(res => {
                assert.equal(res.status, created);
                assert.ok(res.body);
                assert.ok(res.body._id);
                assert.ok(res.body._id, "movies");
            })
            .end((err, res) => {
                assert.end();
            });
    });

    nest.test('Delete request to /api/v1/couch/deleteDocument/:name', assert => {
        const deleted = statusCodes["delete"];
        request(app)
            .del('/api/v1/couch/deleteDocument/movies')
            .set({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            })
            .expect(res => {
                assert.equal(res.status, deleted);
            })
            .end((err, res) => {
                assert.end();
            })
    });

});