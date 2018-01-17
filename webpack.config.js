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
		vendor: ['moment'],
	},
	output: {
		path: PATHS.build,
		filename: '[name].js',
	},
	devtool: debug ? 'inline-sourcemap' : false,
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.scss', '.json'],
	},
	devServer: {
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: [
					'babel-loader?presets[]=es2015,presets[]=stage-0,presets[]=react,plugins[]=react-html-attrs,plugins[]=transform-class-properties,plugins[]=transform-decorators-legacy',
				],
			},
			{
				test: /\.json$/,
				use: 'json-loader',
			},
			{
				test: /\.(css|scss|sass)$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'postcss-loader', 'sass-loader'],
				}),
			},
			{
				test: /\.svg/,
				use: 'svg-url-loader',
			},
		],
	},
	plugins: debug ? [
		new NpmInstallPlugin({
			save: true, // --save
		}),
		new webpack.DefinePlugin({
			'process.env': { NODE_ENV: JSON.stringify('development') },
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
			{ from: 'src/img', to: 'img', ignore: ['*.psd'] },
			{ from: 'src/index.html', to: 'index.html' },
			{ from: 'src/json/resume.json', to: 'resume.json' },
			{ from: 'src/meta' },
		]),
		new ExtractTextPlugin('[name].css'),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js' }),
		new webpack.optimize.UglifyJsPlugin({ mangle: true, sourcemap: false, compress: { warnings: false } }),
	],
};
