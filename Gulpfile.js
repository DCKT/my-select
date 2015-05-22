var gulp   = require('gulp'),
babelify   = require('babelify'),
source     = require('vinyl-source-stream'),
babel      = require('gulp-babel'),
concat     = require('gulp-concat'),
uglify     = require('gulp-uglify'),
browserify = require('browserify');


gulp.task('build', function() {
  return gulp.src('./lib/select.es6.js')
  .pipe(babel())
  .pipe(uglify())
  .pipe(concat('select.js'))
  .pipe(gulp.dest('./lib'));
})

gulp.task('demo', function() {
  browserify({
    entries: './demo/app.js',
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('./demo'));
})

gulp.task('watch', function() {
  gulp.watch('lib/select.es6.js', ['build', 'demo']);
});

gulp.task('default', ['build', 'demo', 'watch']);
