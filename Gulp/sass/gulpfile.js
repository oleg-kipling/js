'use strict';

var gulp = require('gulp'),
	concatCSS = require('gulp-concat-css'),
	rename = require('gulp-rename'),
	notify = require('gulp-notify'),
    autoprefixer = require('gulp-autoprefixer'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass'),
	minifyCSS = require('gulp-minify-css');

// server connect
gulp.task('connect', function(){
    connect.server({
        root: 'app',
        livereload:true
    });
});

// css
gulp.task('css', function () {
   gulp.src('scss/style.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(minifyCSS())
    .pipe(rename('bundle.min.css'))
    .pipe(gulp.dest('app/css'))
    .pipe(connect.reload());
    // .pipe(notify('Done!'));
});

// html
gulp.task('html', function(){
    gulp.src('app/index.html')
    .pipe(connect.reload());
})

// watch
gulp.task('watch', function() {
	gulp.watch('css/*.css', ['css'])
    gulp.watch('app/index.html', ['html'])
})

// default
gulp.task('default', ['connect','watch', 'css', 'watch']);