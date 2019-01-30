const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

gulp.task('styles', () => {
    return gulp.src('./dev/styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer('last 2 versions', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
        .pipe(concat('home.css'))
        .pipe(gulp.dest('./public/styles'))
        .pipe(reload({
            stream: true
        }));
});

gulp.task('scripts', () => {
    return gulp.src('./dev/scripts/main.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('./public/scripts'))
        .pipe(reload({
            stream: true
        }));
});

gulp.task('browser-sync', () => {
    browserSync.init({
        server: '.'
    });
})

gulp.task('watch', () => {
    gulp.watch('./dev/styles/**/*.scss', ['styles']);
    gulp.watch('./dev/scripts/main.js', ['scripts']);
    gulp.watch('*.html', reload);
});


gulp.task('default', ['browser-sync', 'styles', 'scripts', 'watch'])