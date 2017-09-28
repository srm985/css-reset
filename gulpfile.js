'use strict';

const gulp = require('gulp'),
    del = require('del'),
    merge = require('merge-stream'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    sassLint = require('gulp-sass-lint'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano');

gulp.task('clean', () => {
    del.sync('web/*');
});

gulp.task('copy', () => {
    let icons_1 = gulp.src('features/' + arg.feature + '/src/font-icons/css/*.min.css')
        .pipe(gulp.dest('features/' + arg.feature + '/web/font-icons/css')),
        icons_2 = gulp.src('features/' + arg.feature + '/src/font-icons/fonts/*')
        .pipe(gulp.dest('features/' + arg.feature + '/web/font-icons/fonts')),
        plugins = gulp.src('features/' + arg.feature + '/src/plugins/**/*')
        .pipe(gulp.dest('features/' + arg.feature + '/web/plugins'));
    merge(icons_1, icons_2, plugins);
});

gulp.task('build-css', () => {
    return gulp.src('src/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sassLint())
        .pipe(concat('styles.scss'))
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError())
        .pipe(sass())
        .pipe(autoprefixer('last 10 versions'))
        .pipe(cssnano({ 'zindex': false }))
        .pipe(gulp.dest('web/'));
});

gulp.task('build', ['clean', 'build-css']);
