'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('dev', ['clean'], function (callBack) {
  runSequence(['lint', 'sass'],'concat', callBack);
});