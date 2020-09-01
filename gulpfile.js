const gulp = require('gulp');
const ejs = require('gulp-ejs');
const rename = require('gulp-rename');
const connect = require('gulp-connect');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const imagemin = require('gulp-imagemin');

sass.compiler = require('node-sass');

function html(done) {
    gulp.src('./src/html/templates/*.ejs')
        .pipe(ejs())
        .pipe(rename(function(path){
            if(path.basename != "index" && path.basename != "offline") {
                path.dirname = path.basename;
                path.basename = "index";
            } 
                path.extname = ".html";
        }))
        .pipe(gulp.dest('./dist'))
        .pipe(connect.reload());
        done()
}

function watchHtml() {
    gulp.watch("./src/html/**/*.ejs", { ignoreInitial: false }, html);
}

function favicon(done) {
    gulp.src('./src/images/favicon/favicon.*')
        .pipe(gulp.dest('./dist'))
        .pipe(connect.reload());
        done()
}

function watchFavicon() {
    gulp.watch('./src/images/favicon/favicon.*', { ignoreInitial: false }, favicon);
}

function maniImg(done) {
    gulp.src('./src/images/manifest/*')
        .pipe(gulp.dest('./dist/assets/images/mani'))
        .pipe(connect.reload());
        done()
}

function watchManiImg() {
    gulp.watch('./src/images/manifest/*', { ignoreInitial: false }, maniImg);
}

function manifest(done) {
    gulp.src('./src/manifest/manifest.webmanifest')
        .pipe(gulp.dest('./dist'))
        .pipe(connect.reload());
        done()
}

function watchManifest() {
    gulp.watch('./src/manifest/manifest.webmanifest', { ignoreInitial: false }, manifest);
}

function scss(done) {
    gulp.src('./src/css/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/assets/css'))
        .pipe(connect.reload());
    done();
}


function watchScss() {
    gulp.watch('./src/css/**/*.scss', { ignoreInitial: false }, scss);
}

function javaScript(done){
    console.log('js kører')
    gulp.src('./src/javascript/**/*.js')
    .pipe(babel({ presets: ['@babel/env']}))
    .pipe(gulp.dest('./dist/assets/javascript'))
    .pipe(connect.reload());
    done();
}

function watchJavaSript() {
    gulp.watch('./src/javascript/**/*.js', { ignoreInitial: false }, javaScript);
}

function serviceWorker(done){
    gulp.src('./src/*.js')
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload());
    done();
}

function watchServiceWorker() {
    gulp.watch('./src/*.js', { ignoreInitial: false }, serviceWorker);
}

/* function json(done) {
    gulp.src('./src/json/*.json')
    .pipe(gulp.dest('./dist/assets/data'))
    ,pipe(connect.reload());
    done();
}

function watchJson() {
    gulp.watch('./src/json/*json', { ignoreInitial: false}, json);
} */

function images(done) {
    gulp.src('./src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/assets/images'))
        .pipe(connect.reload());
    done();
}

function Watchimages() {
    gulp.watch('./src/images/*', { ignoreInitial: false }, images);
}

gulp.task('dev', function(done){
    watchHtml();
    watchFavicon();
    watchManifest();
    watchManiImg();
    watchScss();
    watchJavaSript();
    watchServiceWorker();
    //watchJson();
    Watchimages();
    connect.server({
        livereload: true,
        root: "dist"
    })
    done();
});

gulp.task('build', function(done) {
    html(done);
    scss(done);
    javaScript(done);
    serviceWorker(done);
//    json(done);
    images(done);
    favicon(done);
    manifest(done);
    maniImg(done);
    done(done);
});