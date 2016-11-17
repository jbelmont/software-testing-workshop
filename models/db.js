"use strict";

const nano = require('nano')('http://127.0.0.1:5984/');
const winston = require('winston');

const users = require('./users')["users"];

function createDbConnection() {
    return new Promise((resolve, reject) => {
        nano.db.create('softwaretesting', function(err, body) {
            if (!err) {
                const softwareTesting = nano.use('softwaretesting');
                return insertInitialDocument(softwareTesting)
                    .then(() => {
                        resolve(retrieveDocument({ dbName: softwareTesting, name: 'users'}));
                    });
            } else {
                const softwareTesting = nano.use('softwaretesting');
                resolve(retrieveDocument({ dbName: softwareTesting, name: 'users'}));
            }
        });
    });
}

function retrieveDocument({dbName, name}) {
    return new Promise((resolve, reject) => {
        dbName.get(name, function(err, body) {
            if (!err) {
                winston.info(body);
                resolve(body);
            }
            reject(err);
        });
    });
}

function insertInitialDocument(dbName) {
    return new Promise((resolve, reject) => {
        dbName.insert(users, 'users', function(err, body, header) {
            if (!err) {
                winston.info(`Created users table: ${users}`);
                resolve(body);
            }
            winston.log('error', 'Database Connection Error', {
                err: err
            });
            reject(users);
        });
    });
}

function dbActions() {
    return createDbConnection();
}

exports.dbActions = dbActions;