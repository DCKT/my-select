var gulp       = require('gulp');
var babelify   = require('babelify');
var source     = require('vinyl-source-stream');
var babel      = require('gulp-babel');
var concat     = require('gulp-concat');
var uglify     = require('gulp-uglify');
var connect    = require('gulp-connect');
var browserify = require('browserify');

gulp.task('server', function() {
  connect.server({
    root: './demo/',
    port: 1337,
  });
});

gulp.task('build', function() {
  return gulp.src('./lib/new.js')
  .pipe(babel())
  .pipe(uglify())
  .pipe(concat('select.js'))
  .pipe(gulp.dest('./lib'));
});

gulp.task('demo', function() {
  browserify({
    entries: './demo/app.js',
    debug: true,
  })
  .transform(babelify)
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('./demo'));
});

gulp.task('watch', function() {
  gulp.watch(['./lib/*.js', '!./lib/select.js'], ['build', 'demo']);
});

gulp.task('default', ['build', 'server', 'demo', 'watch']);
