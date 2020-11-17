
const PLUGIN_NAME = 'wordpress-plugin-template';

module.exports = {
	BROWSERS_LIST: [
		'last 2 version',
		'> 1%',
		'ie >= 11',
		'last 1 Android versions',
		'last 1 ChromeAndroid versions',
		'last 2 Chrome versions',
		'last 2 Firefox versions',
		'last 2 Safari versions',
		'last 2 iOS versions',
		'last 2 Edge versions',
		'last 2 Opera versions'
	],
	browsersync: {
		projectURL: 'localhost:8000', // Local project URL of your already running WordPress site. Could be something like wpgulp.local or localhost:3000 depending upon your local WordPress setup.
		productURL: './', // Theme/Plugin URL. Leave it like it is, since our gulpfile.js lives in the root folder.
		browserAutoOpen: false,
		injectChanges: true,
	},
	admin: {
		css: {
			src: './admin/css/**/*.scss',
			outputStyle: 'compact', // ['compact', 'compressed', 'nested', 'expanded']
			errLogToConsole: true,
			precision: 10,
			outputName: 'admin-' + PLUGIN_NAME + '.css',
			destination: './admin/css/'
		},
		js: {
			src: './admin/js/src/**/*.js',
			destination: './admin/js/',
			outputName: 'admin-' + PLUGIN_NAME
		}
	},
	public: {
		css: {
			src: './public/css/**/*.scss',
			outputStyle: 'compact', // ['compact', 'compressed', 'nested', 'expanded']
			errLogToConsole: true,
			precision: 10,
			outputName: 'public-' + PLUGIN_NAME + '.css',
			destination: './public/css/'
		},
		js: {
			src: './public/js/src/**/*.js',
			destination: './public/js/',
			outputName: 'public-' + PLUGIN_NAME
		}
	},
	watch: {
		css: './**/*.scss',
		js: [
			'./admin/js/src/**/*.js',
			'./public/js/src/**/*.js'
		]
	},
	package: {
		src: [
			'./**/*.php',
			//'./assets/images/*.svg',
			// './assets/images/*.png',
			// './assets/images/*.jpg',
			// './assets/fonts/*',
			'./admin/css/admin-' + PLUGIN_NAME + '.min.css',
			'./public/css/public-' + PLUGIN_NAME + '.min.css',
			'./admin/js/admin-' + PLUGIN_NAME + '.min.js',
			'./public/js/public-' + PLUGIN_NAME + '.min.js',
		],
		destination: './packaged',
		name: PLUGIN_NAME
	}
};