var gulp   = require('gulp');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var yuidoc = require('gulp-yuidoc');
// var jsdoc  = require('gulp-jsdoc');
var zip    = require('gulp-zip');
var info   = require('./package.json');
var connect = require('gulp-connect');
var babel = require('gulp-babel');

var NAME = 'behavior3-'+info.version;

gulp.task('webserver', function() {
  connect.server({
    livereload: true
  });
});

var paths = [
  'tests/es6/**/*.js'
];

gulp.task('scripts', function () {
  return gulp.src(paths)
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});

/*
// babel
gulp.task('watch', function() {
    gulp.watch(paths,['scripts']);
})
*/

var testpaths = [
'./tests/**/*.html',
'./tests/**/*.js',
'./tests/*.js'
];

gulp.task('html', function () {
  gulp.src(testpaths)
    .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch(testpaths,['html']);
})

/**
 * Apply jshint to the source and print results on terminal.
 */
gulp.task('_jshint', function() {
  return gulp.src(['src/b3.js', 'src/**/*.js'])
             .pipe(jshint())
             .pipe(jshint.reporter('jshint-stylish'));
});

/**
 * Concatenate and uglify source.
 */
gulp.task('_minify', function() {
  return gulp.src([
    'src/b3.js', 
    'src/b3.functions.js', 
    'src/core/BehaviorTree.js',
    'src/core/Tick.js',
    'src/core/Blackboard.js',
    'src/core/BaseNode.js',
    'src/core/Action.js',
    'src/core/Composite.js',
    'src/core/Condition.js',
    'src/core/Decorator.js',

    'src/composites/*.js',
    'src/decorators/*.js',
    'src/actions/*.js'
  ])
  .pipe(concat(NAME+'.js'))
  .pipe(gulp.dest('./libs'))
  .pipe(uglify())
  .pipe(rename(NAME+'.min.js'))
  .pipe(gulp.dest('./libs'))
  
});

/**
 * Generate YUIDOCS
 */
gulp.task('_docs', function() {
  var OPTS = {
    'themedir': 'docs/theme',
    'helpers': ['docs/theme/helpers.js'],
  }
  return gulp.src(['src/b3.js', 'src/**/*.js'])
             .pipe(yuidoc(OPTS, OPTS))
             .pipe(gulp.dest('./docs/'+NAME))
             .pipe(zip(NAME+'.docs.zip'))
             .pipe(gulp.dest('./docs/'))
});


//
gulp.task('default', ['webserver', 'watch']);
gulp.task('dev', function() {
  gulp.watch('src/**/*.js', ['_jshint']);
})
gulp.task('babel', ['scripts']);
gulp.task('build', ['_minify', '_docs']);
gulp.task('deploy', function() {})

