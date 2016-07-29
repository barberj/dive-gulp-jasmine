require("babel-register");

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    exit = require('gulp-exit'),
    jasmine = require('gulp-jasmine-phantom');

gulp.task('spec', function() {
  return gulp.src('spec/**/*').
    pipe(jasmine({
      specHtml: 'specRunner.html',
      integration: true
    }));
});

gulp.task('default', function() {
  return gulp.src('src/**/*').
    pipe(uglify()).
    pipe(concat('app.js')).
    pipe(gulp.dest('.')).
    pipe(exit());
});
