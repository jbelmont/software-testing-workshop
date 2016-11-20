"use strict";

const nano = require('nano')('http://127.0.0.1:5984/');
const winston = require('winston');

function insertDocument({ dbName = 'softwaretesting', name = 'users', body } = {}) {
    return new Promise((resolve, reject) => {
        const couchDBName = nano.use(dbName);
        return updateDocument({ dbName: couchDBName, name, body })
            .then(() => {
                resolve(retrieveDocument({ dbName: couchDBName , name }));
            })
            .catch(err => {
                reject(err);
            });
    });
}

function updateDocument({dbName, name, body}) {
    return new Promise((resolve, reject) => {
        dbName.insert(body, name, (err, body, header) => {
            if (!err) {
                winston.info(`Created ${name} document`);
                resolve(body);
            }
            winston.log('error', 'Database Connection Error', {err});
            reject(err);
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

function deleteDocument({dbName, name}) {
    return new Promise((resolve, reject) => {
        const dbName = nano.use(dbName);
        return retrieveDocument({dbName, name})
        .then((err, body) => {
            if (!err) {
                const {
                    _rev
                } = body;
                dbName.destroy(name, _rev, (err, body) => {
                    if (!err) {
                        resolve(body);
                    }
                    reject(err);
                });
            }
            reject(err);
        });
    });
}

exports.updateDocument = insertDocument;
exports.deleteDocument = deleteDocument;