var gulp = require( 'gulp' );
var gutil = require( 'gulp-util' );
var webpack = require( 'webpack' );
var webpackDevServer = require( 'webpack-dev-server' );
var webpackConfig = require( './webpack.config.js' );
// var browserSync = require('browser-sync').create();

// The development server (the recommended option for development)
gulp.task("default", ["webpack-dev-server"]);

// Build and watch cycle (another option for development)
// Advantage: No server required, can run app from filesystem
// Disadvantage: Requests are not blocked until bundle is available,
//               can serve an old app on refresh
gulp.task("build-dev", ["webpack:build-dev"], function() {
	gulp.watch(["assets/**/*"], ["webpack:build-dev"]);

	// browserSync.init({
 //        proxy: 'angular.sdev.com'
 //    });
});

// Production build
gulp.task("build", ["webpack:build"]);

gulp.task("webpack:build", function(callback) {
	// modify some webpack config options
	var myConfig = Object.create(webpackConfig);
	myConfig.plugins = myConfig.plugins.concat(
		new webpack.DefinePlugin({
			"process.env": {
				// This has effect on the react lib size
				"NODE_ENV": JSON.stringify("production")
			}
		}),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin()
	);

	// run webpack
	webpack(myConfig, function(err, stats) {
		if(err) throw new gutil.PluginError("webpack:build", err);
		gutil.log("[webpack:build]", stats.toString({
			colors: true
		}));
		callback();
	});
});

// modify some webpack config options
var myDevConfig = Object.create(webpackConfig);
myDevConfig.devtool = "source-map";
// myDevConfig.debug = true;

// gutil.log(myDevConfig);

// create a single instance of the compiler to allow caching
var devCompiler = webpack(myDevConfig);

gulp.task("webpack:build-dev", function(callback) {
	// run webpack
	devCompiler.run(function(err, stats) {
		if(err) throw new gutil.PluginError("webpack:build-dev", err);
		gutil.log("[webpack:build-dev]", stats.toString({
			colors: true
		}));
		callback();
	});
});

/*gulp.task( 'webpack', function() {

	// run webpack
	webpack( {
		// configuration
	}, function( err, stats ) {
		if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
	} );
} );*/

gulp.task("webpack-dev-server", function(callback) {
	// modify some webpack config options
	var myConfig = Object.create(webpackConfig);
	myConfig.devtool = "eval";
	// myConfig.debug = true;

	myConfig.entry.main.unshift( 'webpack-dev-server/client?http://angular.sdev.com:9090/' );

	// Start a webpack-dev-server
	new webpackDevServer(webpack(myConfig), {
		// hot: true,
		publicPath: myConfig.output.publicPath,
		stats: {
			colors: true
		}
	}).listen(9090, "angular.sdev.com", function(err) {
		if(err) throw new gutil.PluginError("webpack-dev-server", err);
		gutil.log("[webpack-dev-server]", "http://angular.sdev.com:9090");
	});
});