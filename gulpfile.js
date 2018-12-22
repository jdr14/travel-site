var gulp = require('gulp');  // import gulp
watch = require('gulp-watch');  // 


// Create the default task
gulp.task('default', function() {
	// Log some text to the command line.
	console.log("You created a Gulp task successfully!");
});  // 1st arg = task name : 2nd arg = what happens when tasks runs

// Create a second task to replicate more real-life example
gulp.task('html', function() {
	console.log("Something useful being done in HTML here (placeholder).");
});

gulp.task('watch', function() {
	// gulp watch has the ability to watch multiple files
    console.log("Starting the gulp-watch task now...");

    watch('./app/index.html', function() {
        gulp.start('html');  // will watch the 'index.html' file for changes
    });  // end watch function
    
    // Create another task and define what to do if any changes happen to any .css files
    watch('./app/assets/styles/**/*.css', function() {
        console.log("Imagine Sass or PostCSS tasks running here.");
    });
});  // end watch task