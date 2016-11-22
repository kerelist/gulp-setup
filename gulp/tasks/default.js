'use strict';

var config = require('../config');
var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', ['dev', 'watch']);

gulp.task('default', ['dev'], function (callBack) {
  runSequence('watch', callBack);
});