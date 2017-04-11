'use strict';

var config = require('../config');
var gulp = require('gulp');

var concat = require('gulp-concat'),
	sourcemaps = require('gulp-sourcemaps'),
	babel = require("gulp-babel");

gulp.task('concat', function() {
	return gulp.src([config.scripts.vend, config.scripts.app])
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat(config.scripts.name))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.scripts.dest));
});