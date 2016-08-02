const debug = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const path = require('path');
const NpmInstallPlugin = require('npm-install-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const precss = require('precss');

const PATHS = {
  src: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build'),
};

module.exports = {
  entry: {
    src: PATHS.src,
  },
  output: {
    path: PATHS.build,
    filename: '[name].js',
  },
  devtool: debug ? 'inline-sourcemap' : null,
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
        test: /\.(scss|sass)$/,
        loader: ExtractTextPlugin.extract(
          'style', 'css!postcss!sass'
        ),
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
    //new HtmlWebpackPlugin({
    //  title: 'Webpack demo',
    //  inject: 'body',
    //}),
  ] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
