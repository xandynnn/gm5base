const {
	src,
	dest,
	watch
} = require('gulp');
const concat = require('gulp-concat');
const stripDebug = require('gulp-strip-debug');
const uglify = require('gulp-uglify');
const less = require('gulp-less');
const minifyCSS = require('gulp-csso');

function minscripts() {
	return src('js/*.js')
		.pipe(concat('bundle.js'))
		.pipe(stripDebug())
		.pipe(uglify())
		.pipe(dest('./js/bundle/'))
		.pipe(browserSync.stream());
}

function lesscss() {
	return src('less/*.less')
		.pipe(less('styles.css'))
		.pipe(dest('./css/'));
}

function mincss() {
	return src('css/*.css')
		.pipe(concat('styles.css'))
		.pipe(dest('./css/bundle/'))
		.pipe(minifyCSS())
		.pipe(dest('./css/bundle/min/'))
		.pipe(browserSync.stream());
}

function mwatch() {
	watch('js/*.js', minscripts);
	watch('less/*.less', lesscss);
	watch('css/*.css', mincss);
}

exports.watch = mwatch;
