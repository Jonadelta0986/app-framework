const gulp = require('gulp');
const clean = require('gulp-clean');
const copy = require('gulp-copy');

gulp.task('clean', () => {
  return gulp.src('dist/*.js').pipe(clean());
});

gulp.task('copy', () => {
  return gulp.src('dist/*.js').pipe(gulp.dest('docs'));
});

gulp.task('copy-types', () => {
  return gulp.src('dist/index.d.ts').pipe(gulp.dest('src'));
});
