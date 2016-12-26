"use strict";

const gulp = require('gulp'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass'),
    dir = {
        src: 'src',
        dist: 'public',
        nm: 'node_modules'
    },
    files = {
        CSS: [
            `${dir.dist}/css/style.css`
        ]
    },
    opts = {
        pug: {
            pretty: true,
            locals: {
                title: 'Index - Flexbox',
                files: files
            }
        },
        sass: {
            outputStyle: 'compressed'
        }
    };

gulp.task('pug', () => {
    gulp
        .src(`${dir.src}/pug/*.pug`)
        .pipe(pug(opts.pug))
        .pipe(gulp.dest(dir.dist));
});

gulp.task('sass', () => {
    gulp.
        src(`${dir.src}/scss/**/*.scss`)
        .pipe(sass(opts.sass))
        .pipe(gulp.dest(`${dir.dist}/css`));
});