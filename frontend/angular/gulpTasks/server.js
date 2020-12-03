const gulp = require('gulp')
const watch = require('gulp-watch')
const webserver = require('gulp-webserver')
const lreload = require('gulp-livereload')


gulp.task('watch', () => {   //watch das tasks.
        watch('app/**/*.html', gulp.series('app.html')),
        watch('app/**/*.css', gulp.series('app.css')),
        watch('app/**/*.js', gulp.series('app.js')),
        watch('assets/**/*.*', gulp.series('app.assets'))
})

gulp.task('server', function (done) {
        gulp.src('public').pipe(webserver({
        port: 3000,
        open: true,
        livereload: true
    }))
        done();
})     //cada vez q algo é inserido ou alterado no public, a page atualiza