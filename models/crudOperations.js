"use strict";

const nano = require('nano')('http://127.0.0.1:5984/');
const winston = require('winston');

function insertDocument({ dbName = 'softwaretesting', name = 'users', body } = {}) {
    return new Promise((resolve, reject) => {
        const couchDBName = nano.use(dbName);
        return updateDoc({ dbName: couchDBName, name, body })
            .then(() => {
                resolve(retrieveDoc({ dbName: couchDBName , name }));
            })
            .catch(err => {
                reject(err);
            });
    });
}

function updateDoc({dbName, name, body}) {
    return new Promise((resolve, reject) => {
        dbName.insert(body, name, (err, body, header) => {
            if (!err) {
                resolve(body);
            } else {
                reject(err);
            }
        });
    });
}

function retrieveDoc({dbName, name}) {
    return new Promise((resolve, reject) => {
        dbName.get(name, (err, body) => {
            if (!err) {
                resolve(body);
            }
            reject(err);
        });
    });
}

function retrieveDocument({dbName, name}) {
    const couchDBName = nano.use(dbName);
    return new Promise((resolve, reject) => {
        couchDBName.get(name, (err, body) => {
            if (!err) {
                resolve(body);
            }
            reject(err);
        });
    });
}

function retrieveDoc({dbName, name}) {
    return new Promise((resolve, reject) => {
        dbName.get(name, (err, body) => {
            if (!err) {
                resolve(body);
            }
            reject(err);
        });
    });
}

function deleteDocument({dbName, name}) {
    const couchDBName = nano.use(dbName);
    return retrieveDoc({dbName: couchDBName, name})
        .then(body => {
            if (body) {
                const {
                    _rev
                } = body;
                couchDBName.destroy(name, _rev, (err, body) => {
                    if (!err) {
                        return body;
                    }
                    throw err;
                });
            }
        });
}

exports.retrieveDocument = retrieveDocument;
exports.updateDocument = insertDocument;
exports.deleteDocument = deleteDocument;