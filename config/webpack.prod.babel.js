import { resolve } from 'path';
import webpack from 'webpack';
// import UglifyJSPlugin from 'uglifyjs-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  mode: 'production',
  devtool: 'source-map',
  entry: resolve(__dirname, '..', 'src', 'client', 'app.js'),
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, '..', 'build'),
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'env'],
        },
      },
      {
        test: /\.(scss|sass)$/,
        loader: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader', // compiles Sass to CSS
        ],
      },
      {
        test: /\.(jpe?g|png|gif|ico)$/i,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['build']),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    // new UglifyJSPlugin({
    //   sourceMap: true,
    // }),
    new HtmlWebpackPlugin({
      title: 'My App',
      // favicon: '../src/templates/favicon.ico',
      template: resolve(__dirname, '..', 'src', 'templates', 'index.html'),
    }),
  ],
};
