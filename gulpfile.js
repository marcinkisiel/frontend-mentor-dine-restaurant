const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();

function style() {
	return gulp
		.src('./scss/**/*.scss')
		.pipe(sass({ outputStyle: 'compact' }).on('error', sass.logError))
		.pipe(concat('main.css'))
		.pipe(gulp.dest('./css/'))
		.pipe(browserSync.stream());
}

function watch() {
	browserSync.init({
		server: {
			baseDir: './',
		},
		notify: true,
	});
	gulp.watch('./scss/**/*.scss', style);
	gulp.watch('./*.php').on('change', browserSync.reload);
	gulp.watch('./*.html').on('change', browserSync.reload);
	gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;
exports.default = watch;
