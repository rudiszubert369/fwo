var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var input='sass/**/*.scss';
var output = 'css/';
var sourcemaps = require('gulp-sourcemaps');
var sassOptions = {
  outputStyle: 'expanded'
};

gulp.task('sass', function(){
  return gulp
  .src(input)
  .pipe(sourcemaps.init())
  .pipe(sass(sassOptions).on('error', sass.logError))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(output))
});

gulp.task('watch', function() {
  gulp.watch(input, ['sass',])

});
