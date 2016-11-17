const gulp = require('gulp');
const runSequence = require('run-sequence');
const gutil = require('gulp-util');
const nodemon = require('gulp-nodemon');
const livereload = require('gulp-livereload');


gulp.task('start', () => {  
    livereload.listen();
    nodemon({
        script: './bin/www',
        env: { 'PORT': '3000' }
    });
});