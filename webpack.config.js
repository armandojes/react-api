const { resolve } = require('path');
const webpack = require('webpack');

const ENV = process.env.NODE_ENV;

const config = {
  mode: ENV === 'development' ? 'development' : 'production',
  entry: ['regenerator-runtime/runtime', resolve(__dirname, 'source/index.js')],
  output: {
    path: resolve(__dirname, 'build'),
    filename: 'api.js',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: '/(node_modules)/',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      ENV: JSON.stringify(ENV),
    }),
  ],
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      source: resolve(__dirname, 'source'),
    },
  },
  target: 'node',
  watch: ENV === 'development',
};

module.exports = config;
