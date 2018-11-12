const path                  = require('path');
const webpack               = require('webpack');
const HtmlWebpackPlugin     = require('html-webpack-plugin');
const ManifestPlugin        = require('webpack-manifest-plugin');
const _                     = require('lodash');
const readdirRecursiveSync  = require('recursive-readdir-sync');


module.exports = function(env,argv)
{
	let indexTemplate = 'src/index.html';

	let wcfg = 
	{
		entry: "./src/js/index.tsx",
		output:
		{
			path		: path.join(__dirname,'..','..','public'),
			publicPath	: '/',
			filename	: "js/bundle.js",
		},
		module:
		{
			rules :
			[
		   		{ test: /\.tsx?$/,	loader: "awesome-typescript-loader" },
		   		{ test: /\.js$/,	loader: "source-map-loader",		enforce: "pre"  },
				{
					test: /\.scss$/,
					use: 
					[
						{ loader: "style-loader"},
						{ loader: "css-loader"}, 
						{ loader: "resolve-url-loader",options:{debug:true}}, 
						{ loader: "sass-loader", options: { includePaths: [path.join(__dirname, 'src/sass')]} }
					]
				},
				{
					test: /\.css$/,
					use: 
					[ 
						'style-loader',
						'css-loader',
					]
				},
				{
					test: /\.(png|woff|woff2|eot|ttf|svg)$/,
					use: ['url-loader?limit=100000']
				}
		   	]
		},
		resolve:
		{
			// Add '.ts' and '.tsx' as resolvable extensions.
			extensions: [".ts", ".tsx", ".js", ".json"]
		},
		devServer:
		{
			//contentBase: path.join(__dirname, 'dist'),
			compress: true,
			host:'localhost',
			port: 9000,
			historyApiFallback : true,
			headers:
			{
				'Access-Control-Allow-Origin'		: 'https://www.beershop.xyz',
				'Access-Control-Allow-Credentials'	: 'true',
				'Access-Control-Max-Age'			: '3600',
				'Access-Control-Allow-Headers'		: 'Content-Type, Authorization, x-id, Content-Length, X-Requested-With',
				'Access-Control-Allow-Methods'		: 'GET, POST, PUT, DELETE, OPTIONS'
			},
			proxy:
			{
				'/api': 
				{
					target : 'https://www.beershop.xyz',
					secure : false,
				}
			}
		},
		plugins:
		[
			// allows for live reload
			new webpack.HotModuleReplacementPlugin(),

			// generate index.html as lodash template
			new HtmlWebpackPlugin(
			{
				template : indexTemplate,
				filename : 'index.html',
				//apihost : apihost,
			}
			),

			// generate a manifest of packages files
			new ManifestPlugin({ fileName : 'assets.json', }),

		]


	};
	/*
		output: {

		filename: "bundle.js",
			  path: __dirname + "../../public/js"
		   },

		   // Enable sourcemaps for debugging webpack's output.
	devtool: "source-map",

			 resolve: {
				 // Add '.ts' and '.tsx' as resolvable extensions.
	extensions: [".ts", ".tsx", ".js", ".json"]
			 },

	module: {
	rules: [
			   // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
		   { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

		   // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
		   { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
		   ]
			},

			// When importing a module whose path matches one of the following, just
			// assume a corresponding global variable exists and use that instead.
			// This is important because it allows us to avoid bundling all of our
			// dependencies, which allows browsers to cache those libraries between builds.
	externals: {
		//		   "react": "React",
		//		   "react-dom": "ReactDOM"
			   }
	};
*/
	return wcfg;
}
