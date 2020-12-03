const gulp = require('gulp')
const watch = require('gulp-watch')
const webserver = require('gulp-webserver')

gulp.task('watch', () => {   //watch das tasks.
    watch('app/**/*.html', () => gulp.start('app.html'))
    watch('app/**/*.css', () => gulp.start('app.css'))
    watch('app/**/*.js', () => gulp.start('app.js'))
    watch('assets/**/*.*', () => gulp.start('app.assets'))
})

gulp.task('server', function () {

        gulp.src('public').pipe(webserver({
        livereload: true,
        port: 3000,
        open: true
    }))

})     //cada vez q algo é inserido ou alterado no public, a page atualiza