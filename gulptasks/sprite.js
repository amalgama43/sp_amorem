'use strict';

const gulp = require('gulp');
const spritesmith = require('gulp.spritesmith');
var merge = require('merge-stream');

module.exports = function(options) {
    return function() {
        var spriteData =
            gulp.src(options.spriteSrc)
                .pipe(spritesmith({
                    imgName: options.spriteName,
                    cssName: options.spriteLessName,
                    cssFormat: 'less',
                    imgPath: options.spritePathInCss,
                    padding: 2
                }));
        var imgStream = spriteData.img.pipe(gulp.dest(options.spriteDst));
        var cssStream = spriteData.css.pipe(gulp.dest(options.spriteLessDst));

        return merge(imgStream, cssStream);
    };
};

// gulp.task('styles:sprite',function() {
//
// });