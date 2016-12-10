'use strict';

const express = require('express');
const {join} = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const winston = require('winston');

// Load Environment Variables
require(join(__dirname, 'config/config'))["dotEnv"];

const routes = require(join(__dirname, 'routes/index'));
const users = require(join(__dirname, 'users/users'));
const crud = require(join(__dirname, 'crudOperations/index'));
const app = express();

// view engine setup
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(favicon(join(__dirname, 'static/build', 'favicon.ico')));
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(join(__dirname, 'static')));

app.use('/', routes);
app.use('/api/v1/users', users);

/**
 * catch 404 and forward to error handler
 */
app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/**
 * development error handler
 * will print stacktrace
 */
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

/**
 * production error handler
 * no stacktraces leaked to user
 * */ 
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;