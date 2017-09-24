const debug = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const path = require('path');
const NpmInstallPlugin = require('npm-install-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const PATHS = {
	src: path.join(__dirname, 'src'),
	build: path.join(__dirname, 'public'),
};

module.exports = {
	entry: {
		src: PATHS.src,
		vendor: ['jquery', 'moment'],
	},
	output: {
		path: PATHS.build,
		filename: '[name].js',
	},
	devtool: debug ? 'inline-sourcemap' : null,
	resolve: {
		extensions: ['', '.js', '.jsx'],
	},
	module: {
		eslint: {
			configFile: 'path/.eslintrc',
		},
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loaders: [
					'babel-loader?presets[]=es2015,presets[]=stage-0,presets[]=react,plugins[]=react-html-attrs,plugins[]=transform-class-properties,plugins[]=transform-decorators-legacy',
				],
			},
			{
				test: /\.json$/,
				loader: 'json',
			},
			{
				test: /\.(css|scss|sass)$/,
				loader: ExtractTextPlugin.extract(
					'style', 'css!postcss!sass'
				),
			},
			{
				test: /\.svg/,
				loader: 'svg-url-loader',
			},
		],
	},
	postcss: function Prefixer() {
		return [precss, autoprefixer];
	},
	plugins: debug ? [
		new NpmInstallPlugin({
			save: true, // --save
		}),
		new ExtractTextPlugin('[name].css'),
	] : [
			new NpmInstallPlugin({
				dev: true, // --save-dev
			}),
			new webpack.DefinePlugin({
				'process.env': { NODE_ENV: JSON.stringify('production') },
			}),
			new CopyWebpackPlugin([
				{ from: 'src/img', to: 'img' },
				{ from: 'src/index.html', to: 'index.html' },
				{ from: 'src/json/resume.json', to: 'resume.json' },
				{ from: 'src/meta' },
			]),
			new ExtractTextPlugin('[name].css'),
			new webpack.optimize.DedupePlugin(),
			new webpack.optimize.OccurenceOrderPlugin(),
			new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js', Infinity),
			new webpack.optimize.UglifyJsPlugin({ mangle: true, sourcemap: false, compress: { warnings: false } }),
		],
};
