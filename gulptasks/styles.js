'use strict';

const gulp = require('gulp');
const less = require('gulp-less');
const notify = require('gulp-notify');
const debug = require('gulp-debug');

module.exports = function(options) {
    return function() {
        return gulp.src(options.src)
            .pipe(debug({title: 'src'}))
            .pipe(less())
            .on('error', notify.onError(function(err) {
                return {
                    title: 'Less compile err',
                    message: err.message
                }
            }))
            .pipe(debug({title: 'less'}))
            .pipe(gulp.dest('public/css/'));
    };
};