'use strict';

var config = require('../config'),
	handleErrors = require('../util/handleErrors');
var gulp = require('gulp');

var jscs = require('gulp-jscs');
var jscsStylish = require('gulp-jscs-stylish');

var jshint = require('gulp-jshint');
var notify = require('gulp-notify');

gulp.task('jscs', function () {
  return gulp.src(config.scripts.app)
     .pipe(jscs())
     .pipe(jscsStylish());
});

gulp.task('lint', function () {
    gulp.src(config.scripts.app)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});


gulp.task('lintplus', ['jscs', 'lint']);