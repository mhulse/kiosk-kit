var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var bower = require('main-bower-files');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
	
	gulp.src('files/styles/scss/main.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({
			outputStyle: 'compressed',
			precision: 14,
		})
		.on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('files/styles/css'));
	
});

gulp.task('sass:watch', function () {
	gulp.watch('files/styles/scss/**/*.scss', [ 'sass', ]);
});

gulp.task('bower', function() {
	
	gulp.src(bower(), {
		base: 'bower_components' // Required!
	})
		.pipe(gulp.dest('files/plugins'));
	
});

gulp.task('default', [ 'sass:watch', ]);
