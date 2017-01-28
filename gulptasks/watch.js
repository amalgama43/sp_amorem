'use strict';

const gulp = require('gulp');

module.exports = function(options) {
    return function() {
        gulp.watch('frontend/assets/**/*.*', gulp.series('assets'));
        gulp.watch('frontend/styles/**/*.*', gulp.series('styles'));
        gulp.watch('frontend/js/**/*.*', gulp.series('js:build'));
    };
};
