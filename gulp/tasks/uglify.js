'use strict';

var config = require('../config');
var gulp = require('gulp');

var uglify = require('gulp-uglify');

var concat = require('gulp-concat');

gulp.task('uglify', function() {
    return gulp.src([config.scripts.vend, config.scripts.app])
        .pipe(concat(config.scripts.name))
        .pipe(uglify())
        .pipe(gulp.dest(config.scripts.dest));
});