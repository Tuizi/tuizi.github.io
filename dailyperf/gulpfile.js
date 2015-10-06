'use strict';

var gulp = require('gulp');


gulp.task('sass', function () {
    var sass = require('gulp-sass');

    gulp.src('css/src/style.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('build', function () {
    var concat = require('gulp-concat'),
        uglify = require('gulp-uglify');

    gulp.src(['bower_components/doT/doT.js'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('scripts/'));

});

gulp.task('dailyperf', function () {
    gulp.watch('./css/src/*.scss', ['sass']);
    gulp.watch('./scripts/src/*.js', ['build']);
});