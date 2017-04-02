'use strict';

const express = require('express');
const router = express.Router();
const path = require('path');
const winston = require('winston');

const db = require('../models/crudOperations');

router.get('/badMofos', (req, res, next) => {
    db.retrieveDocument({ dbName: 'softwaretesting', name: 'badMofos' })
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.send(err);
        });
});

router.post('/addUser', (req, res, next) => {
  const {
    user
  } = req.body;
  db.updateDocument({ dbName: 'softwaretesting', name: 'users' })
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = router;
