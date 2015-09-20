var gulp 			= require('gulp'),
	less 			= require('gulp-less'),
	rev_append 		= require('gulp-rev-append'),
	rev 			= require('gulp-rev'),
	rev_collector 	= require('gulp-rev-collector'),
	gutil           = require('gulp-util'),
	rimraf          = require('rimraf'),
	revOutdated     = require('gulp-rev-outdated'),
	path            = require('path'),
	through         = require('through2');

gulp.task('less', function () {
    gulp.src('./src/less/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('./www/css/'))
});

gulp.task('rev_append', function() {
  gulp.src('./www/index.html')
    .pipe(rev_append())
    .pipe(gulp.dest('./www/'));
});

gulp.task('rev', function () {
    return gulp.src('./src/less/*.less')
    	.pipe(less())
        .pipe(rev())
        .pipe(gulp.dest('./www/css/'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('./src/manifest/'));
});

gulp.task('rev_collector', ['rev'], function () {
    return gulp.src(['./src/manifest/**/*.json', './www/index.html'])
        .pipe( rev_collector({
            replaceReved: true,
        }) )
        
        .pipe( gulp.dest('./www/') );
});

function cleaner() {
    return through.obj(function(file, enc, cb){
        rimraf( path.resolve( (file.cwd || process.cwd()), file.path), function (err) {
            if (err) {
                this.emit('error', new gutil.PluginError('Cleanup old files', err));
            }
            this.push(file);
            cb();
        }.bind(this));
    });
}

gulp.task('clean',['rev_collector'], function() {
    gulp.src( ['./www/**/*.*'], {read: false})
        .pipe( revOutdated() ) // leave 2 latest asset file for every file name prefix.
        .pipe( cleaner() );

    return;
});

gulp.task('rev_all', ['rev', 'rev_collector', 'clean']);