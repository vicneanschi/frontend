/* jshint node: true */
'use strict';

var gulp = require('gulp');
var webserver = require('gulp-webserver');


gulp.task('webserver', function() {
  gulp.src('src/app')
    .pipe(webserver({
      fallback: 'index.html',
      livereload: true,
      //directoryListing: 'src',
      open: true,
      proxies: [{source: '/api', target: 'http://localhost:1337'}]
    }));
});

/**
 * Default task
 */
gulp.task('default', ['webserver']);

