const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const ENV = process.env.NODE_ENV || 'development';
const babelrc = require('./babel');

const PATHS = {
	src: path.resolve(__dirname, 'src'),
	public: path.resolve(__dirname, 'public'),
};

const plugins = [
	new webpack.DefinePlugin({
		'process.env.NODE_ENV': JSON.stringify(ENV),
	}),
	new ExtractTextPlugin({
		filename: '[name].css',
		allChunks: false,
		disable: ENV !== 'production',
	}),
];

const prodPlugins = [
	...plugins,
	new CopyWebpackPlugin([
		{ from: 'img', to: 'img' },
		{ from: 'meta' },
		{ from: 'static' },
		{ from: 'index.html' },
		{ from: 'json/resume.json' },
	], {
		ignore: ['*.psd'],
		copyUnmodified: true,
	}),
];

module.exports = {
	context: PATHS.src,
	entry: {
		src: './index.js',
		vendor: ['react', 'moment', 'lodash', 'firebase'],
	},
	output: {
		path: PATHS.public,
		filename: '[name].js',
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.scss', '.json'],
		modules: [path.resolve('node_modules'), 'node_modules'],
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: babelrc(ENV),
				},
			},
			{
				test: /\.(jpe?g|png|gif|webm)$/,
				use: 'file-loader',
			},
			{
				test: /\.(css|scss|sass)$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								sourceMap: true,
								modules: false,
								importLoaders: true,
							},
						},
						{
							loader: 'postcss-loader',
							options: {
								ident: 'postcss',
								sourceMap: 'inline',
								plugins: () => {
									return [autoprefixer({ browsers: ['> 1%', 'IE >= 10'] })];
								},
							},
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true,
								includePaths: [PATHS.src],
							},
						},
					],
				}),
			},
			{
				test: /\.svg/,
				use: 'svg-url-loader',
			},
		],
	},
	plugins: ENV === 'production' ? prodPlugins : plugins,
	devtool: ENV === 'production' ? 'source-map' : 'eval',
	devServer: {
		port: 3000,
		host: 'localhost',
		historyApiFallback: true,
	},
};
