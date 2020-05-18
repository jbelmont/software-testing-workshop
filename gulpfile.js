const gulp = require('gulp');
const webpack = require('webpack');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const runSequence = require('run-sequence');
const gutil = require('gulp-util');
const merge = require('merge-stream');
const nodemon = require('gulp-nodemon');
const livereload = require('gulp-livereload');

// Load Environment constiables
require('dotenv').config();
const webpackConfig = process.env.NODE_ENV === 'development'
  ? require('./webpack.config.js')
  : require('./webpack.config.prod.js');

const jsPaths = [
  'static/js/components/*.js'
];
const sassPaths = [
  'static/scss/*.scss',
  './node_modules/bootstrap/dist/css/bootstrap.min.css'
];

const filesToCopy = [
  {
		src: './node_modules/react/dist/react.min.js',
		dest: './static/build'
	},
  {
    src: './node_modules/react-dom/dist/react-dom.min.js',
		dest: './static/build'
  },
  {
    src: './node_modules/react-bootstrap/dist/react-bootstrap.min.js',
		dest: './static/build'
  },
  {
    src: './images/favicon.ico',
    dest: './static/build'
  },

  {
    src: './icomoon/symbol-defs.svg',
    dest: './static/build'
  }
];

gulp.task('copy:react:files', () => {
	const streams = [];
	filesToCopy.forEach(file => {
		streams.push(gulp.src(file.src).pipe(gulp.dest(file.dest)));
	});
	return merge.apply(this, streams);
});

gulp.task('uglify:js', () => {
  return gulp.src(jsPaths)
    .pipe(uglify())
    .pipe(gulp.dest('static/build'));
});

gulp.task('build:js', (callback) => {
  webpack(Object.create(webpackConfig), (err, stats) => {
    if (err) {
      throw new gutil.PluginError('build:js', err);
    }
    gutil.log('[build:js]', stats.toString({colors: true, chunks: false}));
    callback();
  });
});

gulp.task('build:sass', () => {
  return gulp.src(sassPaths[0])
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed',
      includePaths: ['node_modules']
    }))
    .pipe(autoprefixer({cascade: false}))
    .pipe(concat('software-testing.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./static/build'))
    .pipe(livereload());
});

gulp.task('build:vendor:sass', () => {
  return gulp.src([...sassPaths.slice(1)])
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed',
      includePaths: ['node_modules']
    }))
    .pipe(autoprefixer({cascade: false}))
    .pipe(concat('vendor.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./static/build'));
});

gulp.task('watch:js', () => {
  let config = Object.create(webpackConfig);
  config.watch = true;
  webpack(config, (err, stats) => {
    if (err) {
      throw new gutil.PluginError('watch:js', err);
    }
    gutil.log('[watch:js]', stats.toString({colors: true, chunks: false}));
  });
  gulp.watch('static/js/components/*.js', ['uglify:js', 'build:js']);
});

gulp.task('watch:sass', () => {
  gulp.watch('static/scss/*.scss', ['build:sass']);
});

gulp.task('start', () => {
  nodemon({
    script: './bin/www',
    ignore: ['static/*'],
    env: { 'PORT': '3000' }
  });
});

gulp.task('debug', () => {
  nodemon({
    exec: 'node-inspector & node --inspect',
    ext: 'js',
    ignore: ['static/*'],
    script: './bin/www',
    verbose: true
  });
});

gulp.task('build', (cb) => {
  runSequence('copy:react:files', 'uglify:js', 'build:js', 'build:sass', 'build:vendor:sass',  cb);
});

gulp.task('dev', (cb) => {
  livereload.listen();
  runSequence('copy:react:files', 'uglify:js', 'build:sass', 'build:vendor:sass', ['watch:js', 'watch:sass'], 'start', cb);
});

gulp.task('dev:debug', (cb) => {
  livereload.listen();
  runSequence('copy:react:files', 'uglify:js', 'build:sass', 'build:vendor:sass', ['watch:js', 'watch:sass'], 'debug', cb);
});
