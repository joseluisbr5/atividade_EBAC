
// Importa os módulos necessários
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

// Compilação do SASS
gulp.task('sass', function () {
  return gulp.src('src/scss/**/*.scss') // Ajuste o caminho para seu diretório de SASS
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('dist/css')); // Diretório de destino para o CSS compilado
});

// Compressão de imagens
gulp.task('imagemin', function () {
  return gulp.src('src/images/*') // Ajuste o caminho para as suas imagens
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
});

// Compressão de JavaScript
gulp.task('uglify', function () {
  return gulp.src('src/js/**/*.js') // Ajuste o caminho para seus arquivos JS
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

// Tarefa padrão
gulp.task('default', gulp.parallel('sass', 'imagemin', 'uglify'));
