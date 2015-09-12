var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function() {
	
	gulp.src('files/styles/scss/main.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({
			outputStyle: 'compact'
		})
			.on('error', sass.logError))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('files/styles/css'));
	
});

gulp.task('sass:watch', function () {
	gulp.watch('files/styles/scss/**/*.scss', ['sass']);
});

gulp.task('default', ['sass:watch']);
