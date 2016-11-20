'use strict';

const express = require('express');
const router = express.Router();
const path = require('path');
const winston = require('winston');

const crud = require('../models/crudOperations');
const statusCodes = require('../constants/constants')["statusCodes"];

router.post('/insertDocument', (req, res, next) => {
    const {
        name,
        document
    } = req.body;
    if (name && document) {
        const created = statusCodes["create"];
        const conflict = statusCodes["conflict"];
        return crud.updateDocument({ 
            dbName: 'softwaretesting', 
            name: name, 
            body: document 
        })
        .then(body => {
            res.status(created).send(body);
        })
        .catch(err => {
            res.status(conflict).send(err);
        });
    }
    else {
        const badRequest = statusCodes["badRequest"];
        res.status(badRequest).send({
            err: new Error(badRequest),
            message: 'Missing name/document. Please pass in an object with a name and document property.'
        });
    }
});

router.delete('/deleteDocument', (req, res, next) => {
    const {
        name
    } = req.body;
    if (name) {
        const removed = statusCodes["delete"];
        const gone = statusCodes["gone"];
        return crud.deleteDocument({ 
            dbName: 'softwaretesting', 
            name
        })
        .then(body => {
            res.status(removed).send(body);
        })
        .catch(err => {
            res.status(gone).send(err);
        });
    } else {
        const badRequest = statusCodes["badRequest"];
        res.status(badRequest).send({
            err: new Error(badRequest),
            message: 'Missing name. You need to pass in a name property.'
        });
    }
});

module.exports = router;