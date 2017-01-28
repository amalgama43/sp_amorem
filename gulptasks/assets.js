'use strict';

const gulp = require('gulp');
const newer = require('gulp-newer');
const debug = require('gulp-debug');

module.exports = function(options) {
    return function() {
        return gulp.src(options.src)
            .pipe(newer(options.dst))
            .pipe(debug({title: 'assets'}))
            .pipe(gulp.dest(options.dst));
    };
};