import { resolve } from 'path';
import { HotModuleReplacementPlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    resolve(__dirname, '..', 'src', 'client', 'app.js'),
  ],
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, '..', 'build'),
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
      },
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
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'My App',
      // favicon: './src/templates/favicon.ico',
      template: resolve(__dirname, '..', 'src', 'templates', 'index.html'),
    }),
  ],
};
