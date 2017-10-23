var path = require('path');
var webpack = require('webpack');
// var gutil = require( 'gulp-util' );
var helpers = require( './config/helpers' );

const config = {

	/** 
	 * Report the first error as a hard error instead of tolerating it.
	 * 
	 * @link https://webpack.github.io/docs/configuration.html#bail
	 */
	bail: true,

	/**
	 * This is enabled by default in watch mode.
     *
	 * You can pass false to disable it.
     *
     * You can pass an object to enable it and let webpack use the passed object as cache.
     * This way you can share the cache object between multiple compiler calls.
     * Note: Don't share the cache between calls with different options.
     * 
     * @link https://webpack.github.io/docs/configuration.html#cache
	 */
	cache: true,

	/**
	 * The base directory (absolute path!) for resolving the entry option.
	 * If output.pathinfo is set, the included pathinfo is shortened to this directory.
	 *
	 * Default: process.cwd()
	 *
	 * @link https://webpack.github.io/docs/configuration.html#context
	 */
	// context: __dirname + '/assets/js',

	/**
	 * Choose a developer tool to enhance debugging.
	 *
     * eval - Each module is executed with eval and //@ sourceURL.
     * source-map - A SourceMap is emitted. See also output.sourceMapFilename.
     * hidden-source-map - Same as source-map, but doesn't add a reference comment to the bundle.
     * inline-source-map - A SourceMap is added as DataUrl to the JavaScript file.
     * eval-source-map - Each module is executed with eval and a SourceMap is added as DataUrl to the eval.
     * cheap-source-map - A SourceMap without column-mappings. SourceMaps from loaders are not used.
     * cheap-module-source-map - A SourceMap without column-mappings. SourceMaps from loaders are simplified to a single mapping per line.
	 *
     * Prefixing @, # or #@ will enforce a pragma style. (Defaults to @ in webpack@1 and # in webpack@2; using # is recommended)
	 *
     * Combinations are possible. hidden, inline, eval and pragma style are exclusive.
	 *
     * i. e. cheap-module-inline-source-map, cheap-eval-source-map, #@source-map
     *
     * @link https://webpack.github.io/docs/configuration.html#devtool
	 */
	devtool: 'source-map',

	/**
	 * The entry point for the bundle.
	 *
	 * @link https://webpack.github.io/docs/configuration.html#entry
	 */
	entry: {
		polyfills: [ './assets/js/polyfills.ts' ],
		vendor:    [ './assets/js/vendor.ts' ],
		main:      [ './assets/js/main.ts' ]
	},

	/**
	 * Options affecting the output of the compilation. output options tell Webpack
	 * how to write the compiled files to disk. Note, that while there can be multiple entry points,
	 * only one output configuration is specified.
	 *
	 * If you use any hashing ([hash] or [chunkhash]), make sure to have a consistent ordering of modules. Use the OccurrenceOrderPlugin or recordsPath.
	 *
	 * @link https://webpack.github.io/docs/configuration.html#output
	 */
	output: {
		path: helpers.root( 'dist' ),
		// path: path.join( __dirname, 'dist' ),
		// publicPath: path.join( __dirname, 'dist/' ),
		publicPath: 'http://angular.sdev.com:9090/dist/',
		// publicPath: '/',
		filename: '[name].bundle.js',
		sourceMapFilename: '[name].map',
		chunkFilename: '[name].chunk.js',
		// publicPath: 'dist/'
	},

	/**
	 * Options affecting the normal modules (NormalModuleFactory)
	 *
	 * @link https://webpack.github.io/docs/configuration.html#module
	 */
	// module: {

		/**
		 * An array of automatically applied loaders.
         * 
		 * Each item can have these properties:
		 *
         * test: A condition that must be met
		 * exclude: A condition that must not be met
		 * include: An array of paths or files where the imported files will be transformed by the loader
		 * loader: A string of "!" separated loaders
		 * loaders: An array of loaders as string
		 * 
		 * A condition may be a RegExp (tested against absolute path),
		 * a string containing the absolute path, a function(absPath):
		 * bool, or an array of one of these combined with "and".
		 * 
		 * @link https://webpack.github.io/docs/configuration.html#module-loaders
		 */
	    // loaders: [

	    	/**
	    	 * Differences between ts-loader
	    	 *
	    	 * awesome-typescript-loader loader was created mostly to speed-up compilation in my own projects.
	    	 * Some of them are quite big and I wanted to have full control on how my files are compiled.
	    	 *
	    	 * There are three major points:
	    	 *
	    	 * atl has first-class integration with Babel and enables caching possibilities.
	    	 * This can be useful for those who use Typescript with Babel. When useBabel and useCache flags are enabled,
	    	 * typescript's emit will be transpiled with Babel and cached. So next time if source file (+environment)
	    	 * has the same checksum we can totally skip typescript's and babel's transpiling.
	    	 * This significantly reduces build time in this scenario.
             *
   			 * atl is able to fork type-checker and emitter to a separate process,
   			 * which also speeds-up some development scenarios (e.g. react with react-hot-loader)
   			 * So your webpack compilation will end earlier and you can explore compiled version
   			 * in your browser while your files are typechecked.
	    	 *
	    	 * @link https://www.npmjs.com/package/awesome-typescript-loader
	    	 */
			// { test: /\.ts$/,   loader: 'awesome-typescript-loader' },

			/**
			 * json loader for webpack
			 *
			 * @link https://www.npmjs.com/package/json-loader
			 */
			// { test: /\.json$/, loader: 'json-loader' },

			/**
			 * raw loader for webpack
			 *
			 * @link https://www.npmjs.com/package/raw-loader
			 */
			// { test: /\.html/,  loader: 'raw-loader' },
			// { test: /\.css$/,  loader: 'to-string-loader!css-loader' },
	    // ]
	// },

	/**
	 * Options affecting the normal modules (NormalModuleFactory)
	 *
	 * @link https://webpack.github.io/docs/configuration.html#module
	 */
	module: {

		/**
		 * An array of automatically applied loaders.
         * 
		 * Each item can have these properties:
		 *
         * test: A condition that must be met
		 * exclude: A condition that must not be met
		 * include: An array of paths or files where the imported files will be transformed by the loader
		 * loader: A string of "!" separated loaders
		 * loaders: An array of loaders as string
		 * 
		 * A condition may be a RegExp (tested against absolute path),
		 * a string containing the absolute path, a function(absPath):
		 * bool, or an array of one of these combined with "and".
		 * 
		 * @link https://webpack.github.io/docs/configuration.html#module-loaders
		 */
	    rules: [
    		/*{
    			enforce: 'pre', // tell to webpack we want to run this loader before any other loaders by using the enforce: 'pre' configuration flag
    			test: /\.js$/,
    			loader: "source-map-loader",
    			exclude : /node_modules/
    	    },

    	    {
    			enforce: 'pre', // tell to webpack we want to run this loader before any other loaders by using the enforce: 'pre' configuration flag
    			test: /\.tsx?$/,
    			use: "source-map-loader",
    			exclude : /node_modules/
    	    },*/

	    	/**
	    	 * Differences between ts-loader
	    	 *
	    	 * awesome-typescript-loader loader was created mostly to speed-up compilation in my own projects.
	    	 * Some of them are quite big and I wanted to have full control on how my files are compiled.
	    	 *
	    	 * There are three major points:
	    	 *
	    	 * atl has first-class integration with Babel and enables caching possibilities.
	    	 * This can be useful for those who use Typescript with Babel. When useBabel and useCache flags are enabled,
	    	 * typescript's emit will be transpiled with Babel and cached. So next time if source file (+environment)
	    	 * has the same checksum we can totally skip typescript's and babel's transpiling.
	    	 * This significantly reduces build time in this scenario.
             *
   			 * atl is able to fork type-checker and emitter to a separate process,
   			 * which also speeds-up some development scenarios (e.g. react with react-hot-loader)
   			 * So your webpack compilation will end earlier and you can explore compiled version
   			 * in your browser while your files are typechecked.
	    	 *
	    	 * @link https://www.npmjs.com/package/awesome-typescript-loader
	    	 */
			{
				test: /\.tsx?$/,
				loaders: [
					{
						loader: 'awesome-typescript-loader',
						options: {
							configFileName: path.join( __dirname, 'tsconfig.json' )
						}
					}
		        ]
			},

			/**
			 * json loader for webpack
			 *
			 * json-loader is not required anymore
			 *
			 * When no loader has been configured for a JSON file,
			 * webpack will automatically try to load the JSON file with the json-loader.
			 *
			 * @see https://webpack.js.org/guides/migrating/#json-loader-is-not-required-anymore
			 * @link https://www.npmjs.com/package/json-loader
			 */
			/*{
				test: /\.json$/,
				loader: 'json-loader'
			},*/

			/**
			 * raw loader for webpack
			 *
			 * @link https://www.npmjs.com/package/raw-loader
			 */
			{
				test: /\.html/,
				loader: 'raw-loader'
			},

			/**
			 * css loader support for *.css files (styles directory only)
			 * Loads external css styles into the DOM, supports HMR
			 */
			{
				test: /\.css$/,
				use: [ 'to-string-loader', 'css-loader' ]
			}
	    ]
	},

	// module: {

	// 	rules: [
	// 		{
	// 			test: /\.ts$/,
	// 			use: [
	// 				{
	// 					loader: 'tslint-loader',
	// 					options: {
	// 						configFile: 'tslint.json'
	// 					}
	// 				}
	// 			],
	// 			exclude: [/\.(spec|e2e)\.ts$/]
	// 		},

			/*
			 * css loader support for *.css files (styles directory only)
			 * Loads external css styles into the DOM, supports HMR
			 *
			 */
			// {
			// 	test: /\.css$/,
			// 	use: [ 'css-loader' ]
			// },

			/*
			 * css loader support for *.css files (styles directory only)
			 * Loads external css styles into the DOM, supports HMR
			 *
			 */
			// {
			// 	test: /\.css$/,
			// 	use: [ 'css-loader' ]
			// },

			/*
			 * sass loader support for *.scss files (styles directory only)
			 * Loads external sass styles into the DOM, supports HMR
			 *
			 */
			// {
			//   test: /\.scss$/,
			//   use: ['style-loader', 'css-loader', 'sass-loader'],
			//   include: [helpers.root('src', 'styles')]
			// },

	// 	]

	// }

	/**
	 * Options affecting the resolving of modules.
	 *
	 * @link https://webpack.github.io/docs/configuration.html#resolve
	 */
	resolve: {

		/**
		 * Replace modules with other modules or paths.
		 *
		 * Expects an object with keys being module names. The value is the new path.
		 * It's similar to a replace but a bit more clever. If the key ends with $ only the exact match (without the $) will be replaced.
		 * 
		 * If the value is a relative path it will be relative to the file containing the require.
		 *
		 * Examples: Calling a require from /abc/entry.js with different alias settings.
		 *
		 * @link https://webpack.github.io/docs/configuration.html#resolve-alias
		 */
		/*alias: {
			// Bind version of jquery
			jquery: "jquery.js"

			// Bind version of jquery-ui
			"jquery-ui": "jquery-ui-1.10.3",

			// jquery-ui doesn't contain a index file
			// bind module to the complete module
			"jquery-ui-1.10.3$": "jquery-ui-1.10.3/ui/jquery-ui.js",

			validate: "./assets/js/vendors/jquery.validate.js"
		}*/

		/**
		 * An array of directory names to be resolved to the current directory as well as its ancestors,
		 * and searched for modules. This functions similarly to how node finds "node_modules" directories.
		 * For example, if the value is ["mydir"], webpack will look in "./mydir", "../mydir", "../../mydir", etc.
		 * 
		 * Default: ["node_modules"]
		 *
		 * Note: Passing "../someDir", "app", "." or an absolute path isn't necessary here.
		 * Just use a directory name, not a path. Use only if you expect to have a hierarchy within these folders.
		 * Otherwise you may want to use the resolve.root option instead.
		 *
		 * @link https://webpack.github.io/docs/configuration.html#resolve-modulesdirectories
		 */
		// modulesDirectories: ['node_modules'],
		modules: ['node_modules'],

		/**
		 * An array of extensions that should be used to resolve modules. For example, in order to discover CoffeeScript files,
		 * your array should contain the string ".coffee".
		 *
		 * Default: ["", ".webpack.js", ".web.js", ".js", ".json"]
		 *
		 * @link https://webpack.github.io/docs/configuration.html#resolve-extensions
		 */ 
		// extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.jsx', '.json']
		extensions: ['.ts', '.tsx', '.js', '.jsx']
	},

	/**
	 * Can be used to configure the behaviour of webpack-dev-server when the webpack config is passed to webpack-dev-server CLI.
	 *
	 * @link https://webpack.github.io/docs/configuration.html#devserver
	 */
	devServer: {
		historyApiFallback: true,
		watchOptions: { aggregateTimeout: 300, poll: 1000 },
		/*proxy: {
		  "angular.sdev.com/": "http://localhost:3000"
		}*/
	},

	/**
	 * Include polyfills or mocks for various node stuff
	 * Description: Node configuration
	 *
	 * @link: https://webpack.github.io/docs/configuration.html#node
	 */
	node: {
	    global: true,
	    process: true,
	    Buffer: false,
	    crypto: 'empty',
	    module: false,
	    clearImmediate: false,
	    setImmediate: false,
	    clearTimeout: true,
	    setTimeout: true
	},

	/**
	 * Add additional plugins to the compiler.
	 *
	 * * @link https://webpack.github.io/docs/configuration.html#plugins
	 */
	plugins: [
		/*new webpack.ProvidePlugin({
			// Automtically detect jQuery and $ as free var in modules
			// and inject the jquery library
			// This is required by many jquery plugins
			jQuery: "jquery",
			$: "jquery",
			validator: "validate",
			'$.validator': "validate"
		}),
		new webpack.optimize.CommonsChunkPlugin({
			// (the commons chunk name)
			// The order of this array matters
			names: ["vendor"],

			// filename: "vendor.js"
			// (Give the chunk a different name)

			minChunks: Infinity
			// (with more entries, this ensures that no other module
			//  goes into the vendor chunk)
		})*/
		/*new webpack.optimize.CommonsChunkPlugin( {
			name: 'vendor',
			filename: 'vendor.bundle.js'
		} ),*/
		/*new webpack.LoaderOptionsPlugin( {
			debug: true
		} ),*/
		/*new webpack.HotModuleReplacementPlugin()*/

		// Workaround for angular/angular#11580
	    new webpack.ContextReplacementPlugin(
			// The (\\|\/) piece accounts for path separators in *nix and Windows
			/angular(\\|\/)core(\\|\/)@angular/,
			// path.join( __dirname, 'assets' ), // location of your src
			helpers.root(), // location of your src
			{} // a map of your routes
	    ),

		new webpack.optimize.CommonsChunkPlugin( {
			names: ['polyfills', 'vendor', 'main'].reverse(),
			minChunks: Infinity
		} )
	]
};

// gutil.log( path.join( __dirname, 'dist' ), ' :: this ::');

module.exports = config;
