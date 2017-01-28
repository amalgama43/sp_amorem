'use strict';

const gulp = require('gulp');

function requireTask(taskName, path, options) {
    options = options || {};
    options.taskName = taskName;
    gulp.task(taskName, function(callback) {
        let task = require(path).call(this, options);
        return task(callback);
    });
}

requireTask('styles', './gulptasks/styles', {
    src: 'frontend/styles/main.less'
});

requireTask('styles:sprite', './gulptasks/sprite', {
    spriteName: 'sprite.png',
    spriteLessName: 'sprite.less',
    spriteLessDst: 'tmp/styles/',
    spritePathInCss: '../image/sprite.png',
    spriteSrc: 'frontend/spriteimgs/**/*.*',
    spriteDst: 'public/image/',
});

requireTask('assets', './gulptasks/assets', {
    src: 'frontend/assets/**',
    dst: 'public'
});

requireTask('clean', './gulptasks/clean', {
    src: ['public', 'tmp']
});

requireTask('watch', './gulptasks/watch', {});

requireTask('build', './gulptasks/build', {});

requireTask('browser-sync', './gulptasks/browser-sync', {
    base: 'public',
    watchSrc: 'public/**/*.*'
});

requireTask('js:build', './gulptasks/jsbuild', {
    mainJsSrc: 'frontend/js/main.js',
    dst: 'public/js/'
});


gulp.task('build', gulp.series('clean', 'styles:sprite',
    gulp.parallel('styles', 'assets')
));

gulp.task('dev',
    gulp.series('build', gulp.parallel('watch','browser-sync'))
);


