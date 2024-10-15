const { src, dest, watch } = require('gulp')
const postcss = require('gulp-postcss')
const uglify = require('gulp-uglify')
const dartSass = require('sass')
const rename = require('gulp-rename')
const sass = require('gulp-sass')(dartSass)
// const cssnano = require('cssnano')
const cleanCSS = require('gulp-clean-css');
const pug = require('gulp-pug')

// plugins
const autoprefixer = require('autoprefixer')
const stylelint = require('stylelint')

function css(cb) {
  return src('src/**/*.css')
    .pipe(postcss([autoprefixer(), cssnano({ preset: 'default' })]))
    .pipe(dest('dist/'))
}

function scss(cb) {
  return (
    src('src/scss/**/*.scss')
      // cssnano({ preset: 'default' })
      .pipe(sass().on('error', sass.logError))
      .pipe(postcss([autoprefixer()]))
      .pipe(dest('dist/css'))
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(rename({ extname: '.min.css' }))
      .pipe(dest('dist/css/min'))
  )
}

function js(cb) {
  return src('src/scripts/**/*.js').pipe(dest('dist/scripts'))
}

function views(cb) {
  return src('./src/hyper/**/*.pug').pipe(pug({})).pipe(dest('./dist/'))
}

exports.watchcss = function () {
  watch('src/**/*', css)
}

exports.watch_scss = function () {
  watch('src/**/*.scss', scss)
}

exports.default = function () {
  watch('src/scss/**/*.scss', scss)
  watch('src/scripts/**/*.js', js)
  watch('src/hyper/**/*.{pug,html}', views)
}
