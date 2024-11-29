const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');

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

function scripts() {
  return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
}

gulp.task('scripts', scripts);
gulp.task('styles', styles);
gulp.task('images', images);

gulp.task('default', gulp.parallel('scripts', 'styles', 'images'));

gulp.task('watch', function() {
  gulp.watch('./src/scripts/*.js', gulp.series('scripts'));
  gulp.watch('./src/styles/*.scss', gulp.series('styles'));
  gulp.watch('./src/images/**/*', gulp.series('images'));
});