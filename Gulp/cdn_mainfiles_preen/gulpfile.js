var gulp 		   = require('gulp'),
	googlecdn 	   = require('gulp-google-cdn'),
	mainBowerFiles = require('main-bower-files');

// google-cdn libs
gulp.task('googlecdn', function () {
    return gulp.src('index.html')
        .pipe(googlecdn(require('./bower.json')))
        .pipe(gulp.dest('dist'));
});


// mainJS, main CSS

gulp.task('mainJS', function() {
    return gulp.src(mainBowerFiles('**/*.js'))
    .pipe(gulp.dest('dist/js')) 
});

gulp.task('mainCSS', function() {
    return gulp.src(mainBowerFiles('**/*.css'))
    .pipe(gulp.dest('dist/css')) 
});


// mainJS, main CSS

// gulp.task('mainJS', function() {
//     return gulp.src(mainBowerFiles('**/*.js', {
//     "overrides" : {
//     	"bootstrap" : {
//     		"main" : [
//     			"./dist/js/bootstrap.min.js"
//     		]
//     	}
//     }
//     }))
//         .pipe(gulp.dest('dist/mainfiles')) 
// });


// gulp.task('mainCSS', function() {
//     return gulp.src(mainBowerFiles({
//     "overrides" : {
//     	"bootstrap" : {
//     		"main" : [
//     			"./dist/css/bootstrap.min.css",
//     			"./dist/css/bootstrap-theme.min.css"
//     		]
//     	}
//     }}))
//         .pipe(gulp.dest('dist/mainfiles')) 
// });
