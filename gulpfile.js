var gulp = require('gulp');
var browserify = require('browserify');
var source = require("vinyl-source-stream");
var reactify = require('reactify');
var sass = require('gulp-sass');
var babelify = require('babelify');

gulp.task('browserify', function(){
  browserify({
    entries: './src/index.js',
    debug: true
  })
      .transform(babelify)
      .bundle()
      .pipe(source('bundle.js'))
      .pipe(gulp.dest('./dist'));
});

gulp.task('sass', function() {
  gulp.src('src/styles/base.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./dist/styles'));
});

gulp.task('watch', function() {
  gulp.watch('src/styles/**/*.scss',['sass']);
  gulp.watch('src/**/*.js',['browserify']);
});

gulp.task('build', ['browserify', 'sass'])

gulp.task('default', ['build', 'watch']);
