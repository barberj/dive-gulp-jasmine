require("babel-register");

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    exit = require('gulp-exit'),
    jasmine = require('gulp-jasmine');

gulp.task('spec', function() {
  return gulp.src('spec/**/*').
    pipe(jasmine({
      config: {
        spec_dir: 'spec',
        helpers: [
          'helpers/spec_helper.js'
        ]
      }
    }));
});

gulp.task('default', function() {
  return gulp.src('src/**/*').
    pipe(uglify()).
    pipe(concat('app.js')).
    pipe(gulp.dest('.')).
    pipe(exit());
});
