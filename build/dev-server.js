"use strict";

const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

require('./check-versions')();
const config = require('../config');
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV);
}
const webpack = require('webpack');
let opn = require('opn');
const proxyMiddleware = require('http-proxy-middleware');

let webpackConfig;
if (process.env.NODE_ENV === 'development') {
  webpackConfig = require('./webpack.dev.conf');  
} else if (process.env.NODE_ENV === 'production') {
  webpackConfig = require('./webpack.prod.conf');
}


const index = require('../routes/index');
const users = require('../users/users');
const crud = require('../crudOperations/index');

const app = express();

// default port where dev server listens for incoming traffic
const port = process.env.PORT || config.dev.port

if (process.env.NODE_ENV !== 'testing') {
  const compiler = webpack(webpackConfig)

  const devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
      colors: true,
      chunks: false
    }
  })

  const hotMiddleware = require('webpack-hot-middleware')(compiler)
  // force page reload when html-webpack-plugin template changes
  compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
      hotMiddleware.publish({ action: 'reload' })
      cb()
    })
  });

  // serve webpack bundle output
  app.use(devMiddleware);

  // enable hot-reload and state-preserving
  // compilation error display
  app.use(hotMiddleware);
}

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')());

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// serve pure static assets
const staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory);
app.use(staticPath, express.static('./static'))

app.use('/', index);
app.use('/api/v1/users', users);
app.use('/api/v1/couch', crud);

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
    error: err
  });
});

module.exports = app;
