"use strict";

const nano = require('nano')('http://127.0.0.1:5984/');
const winston = require('winston');

const usermodels = require('./userModels');

function createDbConnection({ dbName = 'softwaretesting', name = 'users' } = {}) {
    return new Promise((resolve, reject) => {
        nano.db.create(dbName, (err, body) => {
            if (!err) {
                const couchDBName = nano.use(dbName);
                return insertInitialDocument({ dbName: couchDBName, name })
                    .then(() => {
                        resolve(retrieveDocument({ dbName: couchDBName , name }));
                    });
            } else {
                const db = nano.use(dbName);
                resolve(retrieveDocument({ dbName: db, name }));
            }
        });
    });
}

function retrieveDocument({dbName, name}) {
    return new Promise((resolve, reject) => {
        dbName.get(name, (err, body) => {
            if (!err) {
                winston.info(body);
                resolve(body);
            }
            reject(err);
        });
    });
}

function insertInitialDocument({dbName, name}) {
    return new Promise((resolve, reject) => {
        dbName.insert(usermodels, name, (err, body, header) => {
            if (!err) {
                winston.info(`Created ${name} table: ${usermodels}`);
                resolve(body);
            }
            winston.log('error', 'Database Connection Error', {err});
            reject(usermodels);
        });
    });
}

function dbActions({ dbName = 'softwaretesting', name = 'users' } = {}) {
    return createDbConnection({dbName, name});
}

exports.dbActions = dbActions;