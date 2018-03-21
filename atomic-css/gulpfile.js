const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sassdoc = require('sassdoc');

gulp.task('default', function () {
    return gulp.src([
            '!node_modules/**',
            './src/**/index.scss'
        ])
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('sassdoc', function () {

  const options = {
    dest: 'docs',
    verbose: true,
    display: {
      access: ['public', 'private'],
      alias: true,
      watermark: true,
    }
  };

  return gulp.src(['src/**/*.scss', '!src/helpers/*.scss'])
    .pipe(sassdoc(options));
});