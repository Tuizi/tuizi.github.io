'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    gulp.src('css/src/style.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

var babel = require("gulp-babel"),
    sourcemaps = require("gulp-sourcemaps"),
    concat = require("gulp-concat");

gulp.task("babel", function () {
    return gulp.src(["scripts/src/card-loader.js", "scripts/src/app.js"])
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat("app.js"))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("scripts"));
});

gulp.task('dailyperf', function () {
    gulp.watch('./css/src/*.scss', ['sass']);
    gulp.watch('./scripts/src/*.js', ['babel']);
});