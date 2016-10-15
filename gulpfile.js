var gulp = require('gulp'),
    connect = require('gulp-connect'),
    history = require('connect-history-api-fallback'),
    webpack = require('webpack');

gulp.task('watch', function () {
    gulp.watch(['./bundle.js'], ['reload']);
})

gulp.task('reload', function () {
    connect.reload();
})

gulp.task('connect', function () {
    connect.server({});
});

function log(error) {
    console.error(error.toString && error.toString());
}

gulp.task('default', ['connect']);