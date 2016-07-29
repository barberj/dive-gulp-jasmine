require("babel-register");

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    exit = require('gulp-exit'),
    jasmine = require('gulp-jasmine-browser');

gulp.task('spec', function() {
  return gulp.src(['app.js', 'spec/**/*']).
    pipe(jasmine.specRunner({console: true})).
    pipe(jasmine.headless());
});

gulp.task('default', function() {
  return gulp.src('src/**/*').
    pipe(uglify()).
    pipe(concat('app.js')).
    pipe(gulp.dest('.')).
    pipe(exit());
});
