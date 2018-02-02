// connect gulp
var gulp = require("gulp");

// connect gulp - plugins
var autoprefixer = require("gulp-autoprefixer"),
    concat = require("gulp-concat"),
    stylus = require("gulp-stylus"),
    cssnano = require("gulp-cssnano"),
    base64 = require("gulp-base64"),
    rename = require("gulp-rename");  // for what?

// copy HTML to dist
gulp.task("html", function() {
    return gulp.src("src/*.html")
        .pipe(gulp.dest("dist"));
});

// assembly && copy css to dist
gulp.task("css", function() {
    var plugins = [
        autoprefixer({browsers: ['last 2 versions']}),
        cssnano];
    return gulp.src("src/styl/*.styl")
        .pipe(concat(styles.styl))
        .pipe(stylus())
        .pipe(postcss(plugins))
        .pipe(gulp.dest("dist/css"));
});

// autoupdate?
gulp.task("watch", function() {
   gulp.watch("src/*.html", ["html"]);
   gulp.watch("src/styl/*.styl", ["css"]);
});

// gulp
gulp.task("default", ["html", "css", "watch"]);



