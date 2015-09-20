var gulp 	= require('gulp'),
	wiredep = require('wiredep').stream,
	useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css'),
    clean = require('gulp-clean'),
    sftp = require('gulp-sftp');

// SFTP
gulp.task('sftp', function () {
    return gulp.src('dist/**/*')
        .pipe(sftp({
            host: 'loftblog.tmweb.ru',
            user: 'loftblog',
            pass: 'loftblog',
            remotePath: '/home/l/loftblog/remove.loftblog.tmweb.ru/piblick_html'
        }));
});

// Clean
gulp.task('clean', function () {
    return gulp.src('dist', {read: false})
        .pipe(clean());
});

// Build
gulp.task('build', ['clean'], function () {
    var assets = useref.assets();

    return gulp.src('app/*.html')
        .pipe(assets)
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(assets.restore())
        .pipe(useref())
        .pipe(gulp.dest('dist'));
});

// bower
gulp.task('bower', function () {
  gulp.src('./app/index.html')
    .pipe(wiredep({
      directory : "app/bower_components"
    }))
    .pipe(gulp.dest('./app'));
});

gulp.task('watch', function () {
	gulp.watch('bower.json', ['bower']);
})