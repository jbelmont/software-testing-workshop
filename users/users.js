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

module.exports = router;