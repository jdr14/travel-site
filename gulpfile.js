var gulp = require('gulp'),  // import gulp
watch = require('gulp-watch'),  // import gulp-watch
postcss = require('gulp-postcss'),  // postcss post processor
autoprefixer = require('autoprefixer');
cssvars = require('postcss-simple-vars');  // allows us to use variables in css (not normally valid)
nested = require('postcss-nested');  // allows us to write css nested (also not normally valid)

// Default task is automatically run when nothing else is specified on the command line (i.e. only "gulp" is run)
// To kick off other gulp tasks, specify "gulp <name_of_task>" to kick off that specific task

// Create the default task
gulp.task('default', function() {
	// Log some text to the command line.
	console.log("You created a Gulp task successfully!");
// Create a second task to replicate more real-life example
gulp.task('html', function() {
	console.log("Something useful being done in HTML here (placeholder).");
});

// "sub-task" so to speak which is internally called by the 'watch' task
gulp.task('styles', function() {
	// point to the source css file for gulp.src
	// point to a folder where the new css file will go for gulp.dest
	// Must return here because gulp.src is an 'asynchronous' function (alert gulp that its done)
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssvars, nested, autoprefixer]))  // cssvars allows for use of variables in the .css file
        .pipe(gulp.dest('./app/temp/styles'));  
});

// This will internally call the styles task 
gulp.task('watch', function() {
	// gulp watch has the ability to watch multiple files
    console.log("Starting the gulp-watch task now...");

    watch('./app/index.html', function() {
    	console.log("Starting the html task now...");
        gulp.start('html');  // will watch the 'index.html' file for changes
    });  // end watch function
    
    // Create another task and define what to do if any changes happen to any .css files
    watch('./app/assets/styles/**/*.css', function() {
    	console.log("Starting the styles task now...");
        gulp.start('styles');
    });
});  // end watch task