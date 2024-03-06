const { src, dest, watch, parallel, series } = require('gulp');

const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const browserSync = require('browser-sync').create();
const clean = require('gulp-clean');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const newer = require('gulp-newer');
const fonter = require('gulp-fonter');
const ttf2woff2 = require('gulp-ttf2woff2');

// FONTS===
function fonts() {
    return src('app/fonts/src/*.*')
        .pipe(fonter({
            formats: ['woff', 'ttf']
        }))
        .pipe(src('app/fonts/*.ttf'))
        .pipe(ttf2woff2())
        .pipe(dest('app/fonts'))
}


// IMG====
function images() {
    return src(['app/images/src/*.*', '!app/images/src/*.svg'])
        .pipe(newer('app/images/dist'))
        .pipe(webp())
        .pipe(src('app/images/src/*.*'))
        .pipe(newer('app/images/dist'))
        .pipe(imagemin())
        .pipe(dest('app/images/dist'))
}

// JS======
function scripts() {
    return src([
        'app/js/*.js',
        '!app/js/main.min.js'
     ])
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(dest('app/js'))
        .pipe(browserSync.stream())
}

// SCSS====
function styles() {
    return src('app/scss/style.scss')
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 10 version']
        }))
        .pipe(concat('style.min.css'))
        .pipe(scss({ outputStyle: 'compressed' }))
        .pipe(dest('app/css'))
        .pipe(browserSync.stream())

}
// AUTOPREFIXER====
// Работает со стилями находится в функции styles


// СЛЕЖКА===
function watching() {
    watch(['app/scss/style.scss'], styles)
    watch(['app/images/src'], images)
    watch(['app/js/main.js'], scripts)
    watch(['app/*.html']).on('change', browserSync.reload)
}

//(/**/*) перероет все папки в поисках файла

// BROWSER====
function browsersync() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    })
}

// ОЧИСТКА===
function cleanDist() {
    return src('dist')
        .pipe(clean())
}
// ПЕРЕНОС В ПАПКУ ПРОДАКШН===
function building() {
    return src([
        'app/css/style.min.css',
        'app/css/accordion.min.css',
        'app/css/swiper-bundle.min.css',
        'app/images/dist/*.*',
        'app/fonts/*.*',
        'app/js/main.min.js',
        'app/js/accordion.min.js',
        'app/js/swiper-bundle.min.js',
        'app/phpmailer/**/*',
        'app/**/sendmail.php',
        'app/**/*.html'],
        { base: 'app' })
        .pipe(dest('dist'))
}
// нужно что бы при переносе папка stack не переносилась в dist но пока не работает 


exports.styles = styles;
exports.building = building;
exports.images = images;
exports.fonts = fonts;
exports.scripts = scripts;
exports.watching = watching;
exports.browsersync = browsersync;


exports.build = series(cleanDist, building);
exports.default = parallel(styles, scripts, browsersync, watching);


// НУЖНО УСТАНОВИТ gulp-autoprefixer версии 8 для установки определенной версии прописывается плагин@(8.0.0 версия которая нужна)