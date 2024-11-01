const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

async function styles() {
  return gulp.src('./src/styles/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
}

async function images() {
  const imagemin = await import('gulp-imagemin');
  return gulp.src('./src/images/**/*')
    .pipe(imagemin.default())
    .pipe(gulp.dest('./dist/images'));
}

gulp.task('styles', styles);
gulp.task('images', images);

gulp.task('default', gulp.parallel('styles', 'images'));

gulp.task('watch', function() {
  gulp.watch('./src/styles/*.scss', gulp.parallel('styles'));
});