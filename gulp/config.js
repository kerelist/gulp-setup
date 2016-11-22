'use strict';

var projectDir: './',

module.exports = {

  // browserPort: 3000,
  // UIPort: 3001,

  buildDir: projectDir + 'build/',
  nodeDir: './node_modules/',
  cleanFiles: projectDir + 'build/*.+(js|css)',

  styles: {
    main: projectDir + 'scss/style.scss',
    src: projectDir + 'scss/**/*.scss',
    dest: projectDir + 'build',
    name: 'style.css',
  },

  scripts: {
    src: projectDir + 'js/**/*.js',
    app: projectDir + 'js/app/*.js',
    vend: projectDir + 'js/vendor/*.js',
    dest: projectDir + 'build',
    name: 'eca.js',
  },

  svg: {
    spriteSrc: projectDir + 'images/svg/src/**/*.svg',
    minDir: projectDir + 'images/svg/min',
    spriteDest: projectDir + 'images/svg',
    src: projectDir + 'img/src/**/*.svg',
    dest: projectDir + 'img'
  },

  html: {
    src: projectDir + '/*.html',
  },

  img: {
    src: projectDir + 'img/src/**/*.+(png|jpeg|jpg|gif)',
    srcDir: projectDir + 'img/src',
    dest: projectDir + 'img'
  },

  webpagetest: {
    apiKey: 'A.68a30b5f58e092349b6d51cade99e7eb',
    url: 'http://www.ecentricarts.com',
    parameters: {
      disableHTTPHeaders: true,
      jpegQuality: 90,
      runs: 1,
      firstViewOnly: true,
      disableScreenshot: true,
      breakDown: true,
      // "private": true,
      location: 'Dulles:Chrome',
      // login: 'admin',
      // password: 'password'
      timeline: true,
      pageSpeed: true
    },
    testSpecs: {
      median: {
        firstView: {
          bytesIn: 1000000,
          visualComplete: 3000,
          loadTime: 3000,
          fullyLoaded: 5000,
          requestsDoc: 55,
          score_gzip: {"min": 90},
          score_compress: {"min": 90},
          score_progressive_jpeg: {"min": 95},
          score_cache: {"min": 85},
          render: {"max": 1000},
          breakdown: {
            "js": {
              "requests": 6,
              "bytes": 200000
            },
            "css": {
              "requests": 1,
              "bytes": 50000
            },
            "image": {
              "requests": 50,
              "bytes": 300000
            }
          }
        }
      }
    }
  }

};
