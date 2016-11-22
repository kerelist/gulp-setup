'use strict';

var config = require('../config');
var gulp = require('gulp');

var svgmin = require('gulp-svgmin'),
    svgstore = require('gulp-svgstore');

var path = require('path'),
    fs = require('fs');

var changed = require('gulp-changed');


//STRAIGHT MINIFICATION (NO SPRITESHEET)
//start images in config.img.srcDir
gulp.task('svgmin', function() {
    return gulp.src(config.svg.src)
        .pipe(changed(config.svg.dest))
        .pipe(svgmin( function(file) {
            var prefix = path.basename(file.relative, path.extname(file.relative));
            return {
                plugins: [{
                    cleanupAttrs: true,   
                }, {
                    removeTitle: true,   
                }, {
                    removeUnusedNS: true,   
                }, {
                    removeEditorsNSData: true,   
                }, {
                    removeAttrs: { attrs: ['stroke', 'data-name', 'id'] },
                }, {
                    removeStyleElement: true,
                }, {
                    removeMetadata: true,
                }, {
                    removeUselessDefs: true,
                }]
            }
        } ))
        .pipe(gulp.dest(config.svg.dest));
});


// SPRITESHEETS
//start svg folder with images to be made into a sprite in config.svg.spriteSrc directory
gulp.task('svg-prep', function() {
    return gulp.src(config.svg.spriteSrc)
        .pipe(changed(config.svg.minDir))
        .pipe(svgmin( function(file) {
            var prefix = path.basename(file.relative, path.extname(file.relative));
            return {
                plugins: [{
                    cleanupAttrs: true,   
                }, {
                    removeTitle: true,   
                }, {
                    removeUnusedNS: true,   
                }, {
                    removeEditorsNSData: true,   
                }, {
                    removeAttrs: { attrs: ['stroke', 'fill', 'data-name', 'class'] },
                }, {
                    removeStyleElement: true,
                }]
            }
        } ))
        .pipe(gulp.dest(config.svg.minDir));
});

gulp.task('svg-symbol', ['svg-prep'], function() {

    var getFolders = function (dir) {
      return fs.readdirSync(dir)
        .filter(function(file) {
          return fs.statSync(path.join(dir, file)).isDirectory();
      });
    };

    var spriteFolders = getFolders(config.svg.minDir);

    var buildSprites = spriteFolders.map(function(folder){

        var src = path.join(config.svg.minDir, folder, '**/*.svg');

        return gulp.src(src)
            .pipe(changed(config.svg.spriteDest))
            .pipe(svgstore())
            .pipe(gulp.dest(config.svg.spriteDest));

    });

});

gulp.task('svg-sprites', ['svg-prep', 'svg-symbol']);