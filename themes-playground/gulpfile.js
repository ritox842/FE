const rename = require("gulp-rename");
const sass = require('postcss-node-sass');
const postcss = require('gulp-postcss');
const gulp = require('gulp');
const themify = require('./core/dato-themes');

gulp.task('default', () => {
  return gulp.src('./src/index.themes.scss')
    .pipe(postcss([
      sass(),
      themify()
    ]))
    .pipe(rename("bundle.css"))
    .pipe(gulp.dest('dist'));
});