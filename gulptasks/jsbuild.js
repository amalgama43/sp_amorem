'use strict';

const gulp = require('gulp');
const uglify = require('gulp-uglify');
const rigger = require('gulp-rigger');

module.exports = function(options) {
    return function() {
        return gulp.src(options.mainJsSrc)
            .pipe(rigger())
            .pipe(uglify())
            .pipe(gulp.dest(options.dst));
    };
};