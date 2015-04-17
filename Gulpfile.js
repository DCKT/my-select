var gulp   = require('gulp'),
babelify   = require('babelify'),
source     = require('vinyl-source-stream'),
babel      = require('gulp-babel'),
concat = require('gulp-concat'),
browserify = require('browserify');


gulp.task('build', function () {
  return gulp.src('./lib/selectES6.js')
  .pipe(babel())
  .pipe(concat('select.js'))
  .pipe(gulp.dest('./lib'));
})

gulp.task('test', function () {
   browserify({
    entries: './test/app.js',
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('./test'));
})

gulp.task('default', ['build', 'test']);