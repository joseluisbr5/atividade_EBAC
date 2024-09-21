const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const rename = require('gulp-rename'); // Adiciona o plugin rename para renomear arquivos
const sourcemaps = require('gulp-sourcemaps'); // Adiciona o plugin sourcemaps para gerar sourcemaps

// Tarefa para compilar SASS
gulp.task('sass', function() {
  return gulp.src('src/sass/**/*.scss')
    .pipe(sourcemaps.init()) // Inicia o sourcemap
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write()) // Escreve o sourcemap
    .pipe(gulp.dest('dist/css'));
});

// Tarefa para comprimir imagens
gulp.task('imagemin', async function() {
  const imagemin = (await import('gulp-imagemin')).default; // Importação dinâmica do gulp-imagemin

  return gulp.src('src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
});

// Tarefa para comprimir e renomear JavaScript
gulp.task('compress-js', function() {
  return gulp.src('src/js/**/*.js')
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' })) // Adiciona o sufixo .min aos arquivos comprimidos
    .pipe(gulp.dest('dist/js'));
});

// Tarefa padrão que executa todas as tarefas em paralelo
gulp.task('default', gulp.parallel('sass', 'imagemin', 'compress-js'));
