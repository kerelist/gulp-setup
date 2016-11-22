'use strict';

var config = require('../config');
var gulp = require('gulp');

var sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer');

gulp.task('compress', function () {
  return gulp.src(config.styles.main)
    .pipe(sass({
      outputStyle: 'compressed',
    })
    .on('error', sass.logError))
    .pipe(autoprefixer({
            browsers: ['last 2 versions', 'IE 8', 'IE 9', 'IE 10'],
            cascade: false
        }))
    .pipe(gulp.dest(config.styles.dest));
});