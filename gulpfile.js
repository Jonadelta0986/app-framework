const gulp = require('gulp');
const minify = require('gulp-minify');
const clean = require('gulp-clean');

gulp.task('clean', () => {
	return gulp.src('dist/*.js').pipe(clean());
});

gulp.task('minify', () => {
	return gulp.src('dist/aheeva.js').pipe(minify({ext: '.min.js'})).pipe(gulp.dest('dist'));
});