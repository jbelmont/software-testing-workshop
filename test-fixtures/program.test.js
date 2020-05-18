'use strict';

const test = require('tap').test;
const request = require('supertest');

const app = require('../app');
const statusCodes = require('../constants/constants')["statusCodes"];
const db = require('../models/crudOperations');

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
  // Add rest endpoint call here
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
