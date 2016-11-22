'use strict';

var config = require('../config');
var gulp = require('gulp');

var path = require('path'),
    fs = require('fs');

var imagemin = require('gulp-imagemin');
var changed = require('gulp-changed');


gulp.task('rastermin', function () {

	return gulp.src(config.img.src)
		.pipe(changed(config.img.dest))
    	.pipe(imagemin([
    		imagemin.jpegtran(), 
    		imagemin.optipng(),
    		imagemin.gifsicle()
    	]))    
    	.pipe(gulp.dest(config.img.dest));

});	