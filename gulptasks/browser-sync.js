'use strict';

const gulp = require('gulp');
const browserSync = require('browser-sync').create();

module.exports = function(options) {
    return function() {
        browserSync.init({
            server: options.base
        });
        browserSync.watch(options.watchSrc).on('change', browserSync.reload);
    }
};
