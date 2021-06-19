const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const DEVELOPMENT_MODE = 'development';
const PRODUCTION_MODE = 'production';

module.exports = (_, { mode }) => {
  const isDevelopment = mode === DEVELOPMENT_MODE;
  const isProduction = mode === PRODUCTION_MODE;

  return {
    entry: path.resolve(__dirname, './src/index'),
    output: {
      path: path.resolve(__dirname, './build'),
      filename: 'static/js/[name].[contenthash:8].js',
      clean: true
    },
    resolve: {
      extensions: ['.jsx', '.js']
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader'
          ]
        }
      ]
    },
    devtool: isDevelopment ? 'cheap-module-source-map' : false,
    devServer: isDevelopment ? { port: 3000, open: false, hot: true } : undefined,
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './public/index.html'),
      }),
      isDevelopment && new ReactRefreshWebpackPlugin(),
      isProduction && new MiniCssExtractPlugin({
        filename: 'static/css/[name].[contenthash:8].css',
        chunkFilename: 'static/css/[name].[contenthash:8].chunk.css'
      })
    ].filter(Boolean),
  }
};