'use strict';

const test = require('tap').test;
const request = require('supertest');

const app = require('../../app');
const statusCodes = require('../../constants/constants')["statusCodes"];
const db = require('../../models/crudOperations');

test('setup', t => {
  t.plan(1);
  return db.insertDocument({
    dbName: 'softwaretesting',
    name: 'movies',
    body: {
      movies: ['Rocky', 'Rambo', 'Blood Sport']
    }
  })
  .then(res => {
    t.deepEquals(res.movies, ['Rocky', 'Rambo', 'Blood Sport']);
    t.end();
  });
});

test('retrieve movie list from endpoints', t => {
  t.plan(2);
  const ok = statusCodes["ok"];
  const expected = ['Rocky', 'Rambo', 'Blood Sport'];
  request(app)
      .get('/api/v1/couch/retrieveDocument/movies')
      .set('Accept', 'application/json')
      .expect(res => {
          t.equal(res.status, ok);
          const movies = res.body.movies
          t.same(
              movies,
              expected,
              `Should return ${expected}`
          );
      })
      .end((err, res) => {
          t.end();
      });
});

test('teardown', t => {
  t.plan(0);
  return db.deleteDocument({
    dbName: 'softwaretesting',
    name: 'movies'
  })
  .then(res => {
    t.end();
  });
});
