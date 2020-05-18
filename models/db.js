"use strict";

const nano = require('nano')('http://admin:password@db:5984');
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
                    })
                    .catch(err => {
                      winston.error(err);
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
              resolve(body);
            } else {
              winston.error(err);
              reject(err);
            }
        });
    });
}

function insertInitialDocument({dbName, name}) {
    return new Promise((resolve, reject) => {
        dbName.insert(usermodels, name, (err, body, header) => {
            if (!err) {
                winston.info(`Created ${name} table: ${usermodels}`);
                resolve(body);
            } else {
              reject(usermodels);
            }
        });
    });
}

function dbActions({ dbName = 'softwaretesting', name = 'users' } = {}) {
    return createDbConnection({dbName, name});
}

exports.dbActions = dbActions;
