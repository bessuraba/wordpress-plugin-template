const config = require('./gulp.config');

const gulp = require('gulp');
const sass = require('gulp-sass');

const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const concat = require('gulp-concat');
const lineec = require('gulp-line-ending-corrector');
const filter = require( 'gulp-filter' );
const mmq = require( 'gulp-merge-media-queries' );
const rename = require('gulp-rename');
const minifycss = require('gulp-uglifycss');
const clean = require('gulp-clean');
const zip = require('gulp-zip');

const errorHandler = r => {
	notify.onError( '\n\n❌  ===> ERROR: <%= error.message %>\n' )( r );
};

const browserSync = require( 'browser-sync' ).create();

const browsersync = done => {
	browserSync.init({
		proxy: config.browsersync.projectURL,
		open: config.browsersync.browserAutoOpen,
		injectChanges: config.browsersync.injectChanges,
		watchEvents: [ 'change', 'add', 'unlink', 'addDir', 'unlinkDir' ]
	});
	done();
};

// Helper function to allow browser reload with Gulp 4.
const reload = done => {
	browserSync.reload();
	done();
};

gulp.task('admin-css', () => {
    const task = gulp
        .src(config.admin.css.src, { passthrough: true })
        .pipe(plumber(errorHandler))
        .pipe(
            sass({
                errLogToConsole: config.admin.css.errLogToConsole,
                outputStyle: config.admin.css.outputStyle,
                precision: config.admin.css.precision
            })
        )
        .on('error', sass.logError)
        .pipe(concat(config.admin.css.outputName))
        .pipe(lineec())
        .pipe(gulp.dest(config.admin.css.destination))
        .pipe(filter('**/*.css')) // Filtering stream to only css files.
        .pipe(mmq({ log: true })) // Merge Media Queries only for .min.css version.
        .pipe( browserSync.stream() ) // Reloads style.css if that is enqueued.
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss({ maxLineLen: 10 }))
        .pipe(lineec())
        .pipe(gulp.dest(config.admin.css.destination))
        .pipe(notify({ message: '\n\n✅  ===> admin styles — completed!\n', onLast: true }));
    if (process.env.NODE_ENV === 'development') {
        task
            .pipe(filter( '**/*.css' )) // Filtering stream to only css files.
            .pipe(browserSync.stream()); // Reloads style.min.css if that is enqueued.
    }
    return task;
});

gulp.task('public-css', () => {
    const task = gulp
        .src(config.public.css.src, { passthrough: true })
        .pipe(plumber(errorHandler))
        .pipe(
            sass({
                errLogToConsole: config.public.css.errLogToConsole,
                outputStyle: config.public.css.outputStyle,
                precision: config.public.css.precision
            })
        )
        .on('error', sass.logError)
        .pipe(concat(config.public.css.outputName))
        .pipe(lineec())
        .pipe(gulp.dest(config.public.css.destination))
        .pipe(filter('**/*.css')) // Filtering stream to only css files.
        .pipe(mmq({ log: true })) // Merge Media Queries only for .min.css version.
        .pipe( browserSync.stream() ) // Reloads style.css if that is enqueued.
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss({ maxLineLen: 10 }))
        .pipe(lineec())
        .pipe(gulp.dest(config.public.css.destination))
        .pipe(notify({ message: '\n\n✅  ===> public styles — completed!\n', onLast: true }));
    if (process.env.NODE_ENV === 'development') {
        task
            .pipe(filter( '**/*.css' )) // Filtering stream to only css files.
            .pipe(browserSync.stream()); // Reloads style.min.css if that is enqueued.
    }
    return task;
});

gulp.task('package', gulp.series(
    () => {
        return gulp
            .src( config.package.destination, { read: false, allowEmpty: true } )
            .pipe(clean())
            .pipe( notify({ message: '\n\n✅  ===> cleaning packaged — completed!\n', onLast: true }) );
    },
    gulp.parallel('admin-css', 'public-css'),
    () => {
        return gulp
            .src( config.package.src, { base: './' } )
            .pipe( gulp.dest( config.package.destination + '/' + config.package.name ) )
            .pipe( notify({ message: '\n\n✅  ===> moving plugin files — completed!\n', onLast: true }) );
    },
    () => {
        return gulp.src( config.package.destination + '/' + config.package.name + '/**/*' )
            .pipe(zip( config.package.name + '.zip' ))
            .pipe(gulp.dest( config.package.destination ))
            .pipe( notify({ message: '\n\n✅  ===> archiving files — completed!\n', onLast: true }) );
    }
))

gulp.task('default', gulp.series('admin-css', 'public-css', browsersync, () => {
    gulp.watch(config.watch.css, gulp.series('admin-css', 'public-css', reload));
}));