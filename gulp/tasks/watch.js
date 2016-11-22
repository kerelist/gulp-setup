'use strict';

var config = require('../config');
var gulp = require('gulp');

gulp.task('watch', function () {
    gulp.watch(config.styles.src, ['sass']);
    gulp.watch(config.scripts.src, ['lint', 'concat']);
});