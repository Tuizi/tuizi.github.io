'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    gulp.src('css/src/style.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

var babel = require("gulp-babel");

gulp.task("babel", function () {
    return gulp.src("scripts/src/app.js")
        .pipe(babel())
        .pipe(gulp.dest("scripts"));
});

gulp.task('dailyperf', function () {
    gulp.watch('./css/src/**.scss', ['sass']);
    gulp.watch('./scripts/src/**.js', ['babel']);
});