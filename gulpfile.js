const gulp   = require('gulp');
const fs = require('fs');
const sketch = require('gulp-sketch');
const toIco = require('to-ico');

gulp.task('sketch', function(){
  return gulp.src('./goc-logo.sketch')
    .pipe(sketch({
      export: 'slices',
      formats: 'png'
    }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('favicon', function() {
  const files = [
    fs.readFileSync('./dist/favicon.png')
  ];

  toIco(files).then(buf => {fs.writeFileSync('./dist/favicon.ico', buf)});
});

gulp.task('default', ['sketch', 'favicon']);