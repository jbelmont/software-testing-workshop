'use strict';

const express = require('express');
const router = express.Router();
const path = require('path');
const winston = require('winston');

const users = require('../models/db');

router.get('/badMofos', (req, res, next) => {
    users.dbActions()
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.send(err);
        });
});

module.exports = router;