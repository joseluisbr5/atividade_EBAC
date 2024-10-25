import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import dartSass from 'sass';
import imagemin from 'gulp-imagemin';

const sass = gulpSass(dartSass);

function styles() {
    return gulp.src('src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
}

function images() {
    return gulp.src('src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

export default gulp.parallel(styles, images);

export function watch() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
}
