const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const ENV = process.env.NODE_ENV;
const isProd = ENV === 'production';
const babelrc = require('./babel');

const PATHS = {
	src: path.resolve('./src'),
	public: path.resolve('./public'),
};

const plugins = [
	new webpack.DefinePlugin({
		'process.env.NODE_ENV': JSON.stringify(ENV),
	}),
	new ExtractTextPlugin({
		filename: '[name].css',
		allChunks: false,
		disable: !isProd,
	}),
];

const prodPlugins = [
	...plugins,
	new CopyWebpackPlugin(
		[
      { from: 'img', to: 'img' },
      { from: 'index.html' },
      { from: 'json/resume.json' },
      { from: 'meta' },
		],
		{
			ignore: ['*.psd'],
			copyUnmodified: true,
		}
  ),
	new webpack.optimize.UglifyJsPlugin({
		sourceMap: true,
		exclude: /node_modules/,
	}),
	new webpack.optimize.CommonsChunkPlugin({
		name: 'vendor',
		minChunks: Infinity,
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
				test: /\.json$/,
				use: 'json-loader',
			},
			{
				test: /\.(css|scss|sass)$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								sourceMap: !isProd,
								modules: false,
								importLoaders: true,
								minimize: isProd,
							},
						},
						{
							loader: 'postcss-loader',
							options: {
								sourceMap: !isProd,
								plugins: () => {
									return [autoprefixer({ browsers: ['> 1%', 'IE >= 10'] })];
								},
							},
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: !isProd,
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
	plugins: isProd ? prodPlugins : plugins,
	devtool: isProd ? false : 'eval',
	devServer: {
		port: 3000,
		host: 'localhost',
		open: true,
		hot: true,
		historyApiFallback: true,
	},
};
