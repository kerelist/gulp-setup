'use strict';

var gulp = require('gulp');

gulp.task('env:dev', function () {
  return getEnvironment('development');
});

gulp.task('env:test', function () {
  return getEnvironment('test');
});

gulp.task('env:prod', function () {
  return getEnvironment('production');
});

function getEnvironment (value) {
  let env = process.env;
  env.NODE_ENV = value;

  return env;
}
