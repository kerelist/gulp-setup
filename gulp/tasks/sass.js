'use strict';

var config = require('../config'),
    handleErrors = require('../util/handleErrors');
var gulp = require('gulp');

var sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	sourcemaps = require('gulp-sourcemaps'),
  changed = require('gulp-changed');

gulp.task('sass', function () {
  return gulp.src(config.styles.main)
    .pipe(changed(config.styles.dest))
  	.pipe(sourcemaps.init())
    .pipe(sass({
      sourceComments: true,
      includePaths: [config.styles.src]})
    .on('error', handleErrors))
    .pipe(autoprefixer({
            browsers: ['last 2 versions', 'IE 8', 'IE 9', 'IE 10'],
        }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.styles.dest));
});