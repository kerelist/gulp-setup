'use strict';

var config = require('../config');
var gulp = require('gulp');

var webpagetest = require("webpagetest");

gulp.task('webpagetest', function() {
  var parameters, testSpecs, wpt;
  wpt = new webpagetest('www.webpagetest.org', config.webpagetest.apiKey);
  
  parameters = config.webpagetest.parameters;
  testSpecs = config.webpagetest.testSpecs;

  return wpt.runTest(config.webpagetest.url, parameters, function(err, data) {
    var checkStatus, testID;
    testID = data.data.testId;
    var checkStatus = function() {
      return wpt.getTestStatus(testID, function(err, data) {
        console.log("Status for " + testID + ": " + data.data.statusText);
        if (!data.data.completeTime) {
          return setTimeout(checkStatus, 15000);
        } else {
          return wpt.getTestResults(testID, {
            specs: testSpecs
          }, function(err, data) {
            console.log("http://www.webpagetest.org/result/" + testID + "/");
            if (err > 0) {
              return process.exit(1);
            }
          });
        }
      });
    };
    return checkStatus();
  });
});