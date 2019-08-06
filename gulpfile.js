const {
	src,
	dest,
	watch,
	parallel
} = require('gulp');
const concat = require('gulp-concat');
const stripDebug = require('gulp-strip-debug');
const uglify = require('gulp-uglify');
const less = require('gulp-less');
const minifyCSS = require('gulp-csso');
const rename = require('gulp-rename');

function minscripts () {
	return src('js/*.js')
		.pipe(concat('bundle.js'))
		.pipe(stripDebug())
		.pipe(uglify())
		.pipe(dest('./dist/js/'));
}

function buildimages () {
	return src('images/*.{gif,jpg,png,svg}')
		.pipe(dest('./dist/images/'));
}

function buildfonts () {
	return src('fonts/*.{eot,otf,svg,ttf,woff}')
		.pipe(dest('./dist/fonts/'));
}

function lesscss () {
	return src('less/*.less')
		.pipe(less('styles.css'))
		.pipe(dest('./css/'));
}

function mincss () {
	return src('css/*.css')
		.pipe(concat('styles.css'))
		.pipe(dest('./dist/css/'))
		.pipe(minifyCSS())
		.pipe(rename('styles.min.css'))
		.pipe(dest('./dist/css/'));
}

function mwatch () {
	watch('js/*.js', minscripts);
	watch('less/*.less', lesscss);
	watch('css/*.css', mincss);
	watch('images/*.{gif,jpg,png,svg}', buildimages);
	watch('fonts/*.{eot,otf,svg,ttf,woff}', buildfonts);
}

exports.watch = mwatch;
exports.prod = parallel(lesscss, mincss, minscripts, buildimages, buildfonts);
