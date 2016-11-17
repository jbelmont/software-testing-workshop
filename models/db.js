"use strict";

const nano = require('nano')('http://127.0.0.1:5984/');
const winston = require('winston');

const users = require('./users')["users"];

function createDbConnection() {
    return new Promise((resolve, reject) => {
        nano.db.create('softwareTesting', function(err, body) {
            if (!err) {
                const softwareTesting = nano.use('softwareTesting');
                return insertInitialDocument(softwareTesting)
                .then(() => {
                    nano.db.get('users', function(err, body) {
                        if (!err) {
                            resolve(body);
                        }
                        reject(err);
                    });
                });
            } 
            winston.log('error', 'CouchDB Create Database Error', {err});
            reject(new Error('Failed to setup Db Connection'));
        });
    });
}

function insertInitialDocument(dbName) {
    return new Promise((resolve, reject) => {
        dbName.insert(users, 'users', function(err, body, header) {
            if (err) {
                winston.log('error', 'Database Connection Error', {
                    err: err["message"]
                });
                resolve(users);
            }
            winston.info(`Created users table: ${users}`);
            reject(new Error('Failed to Insert document'))
        });
    });
}

function dbActions() {
    return createDbConnection.then(users);
}

exports.dbActions = dbActions;