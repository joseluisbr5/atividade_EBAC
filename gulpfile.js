// Importações do Gulp e pacotes necessários
import gulp from 'gulp';
import pkg from 'gulp-sass'; // Importa gulp-sass como pacote padrão
import * as sass from 'sass'; // Importa o Dart Sass (Sass moderno)

const gulpSass = pkg(sass); // Passa o Sass para o gulp-sass

import imagemin from 'gulp-imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg'; // Importa o plugin imagemin-mozjpeg
import imageminOptipng from 'imagemin-optipng'; // Importa o plugin imagemin-optipng
import imageminSvgo from 'imagemin-svgo';       // Importa o plugin imagemin-svgo
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import webp from 'gulp-webp';

// Task para processar e minificar o Sass
gulp.task('sass', function() {
    return gulp.src('src/sass/*.scss')
        .pipe(gulpSass({ outputStyle: 'compressed' }).on('error', gulpSass.logError)) 
        .pipe(gulp.dest('dist/css'));
});

// Task para converter imagens para WebP
gulp.task('webp', function() {
    return gulp.src('src/images/*.{png,jpg,jpeg,gif}')
        .pipe(webp({ quality: 85 })) 
        .pipe(gulp.dest('dist/images'));
});

// Task para minificar imagens originais
gulp.task('imagemin-original', function() {
    return gulp.src('src/images/*.{png,jpg,jpeg,gif,svg}')
        .pipe(imagemin([
            imageminMozjpeg({ quality: 75, progressive: true }), 
            imageminOptipng({ optimizationLevel: 5 }),           // Compressão PNG
            imageminSvgo({                                       // Compressão SVG
                plugins: [
                    { removeViewBox: false },
                    { cleanupIDs: false }
                ]
            })
        ]))
        .pipe(gulp.dest('dist/images'))
        .on('data', function(file) {
            console.log('Imagem processada:', file.relative);
        });
});

// Task para minificar e renomear JavaScript
gulp.task('compress-js', function() {
    return gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' })) 
        .pipe(gulp.dest('dist/js'));
});

// Task padrão que executa todas as tasks em paralelo
gulp.task('default', gulp.parallel('sass', 'webp', 'imagemin-original', 'compress-js'));
