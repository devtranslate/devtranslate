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
      filename: isDevelopment ? 'static/js/[name].js' : 'static/js/[name].[contenthash:8].js',
      chunkFilename: isDevelopment ? 'static/js/[name].chunk.js' : 'static/js/[name].[contenthash:8].chunk.js',
      clean: true,
    },
    resolve: {
      extensions: ['.jsx', '.js'],
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            chunks: 'initial',
          },
        },
      },
      runtimeChunk: {
        name: (entrypoint) => `runtime-${entrypoint.name}`,
      },
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: [isProduction ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader'],
        },
      ],
    },
    devtool: isDevelopment ? 'cheap-module-source-map' : false,
    devServer: isDevelopment
      ? {
          port: 3000,
          open: false,
          hot: true,
          historyApiFallback: true,
          contentBase: path.resolve(__dirname, './public'),
        }
      : undefined,
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './public/index.html'),
        inject: true,
        favicon: './public/favicon.ico',
      }),
      isDevelopment && new ReactRefreshWebpackPlugin(),
      isProduction &&
        new MiniCssExtractPlugin({
          filename: 'static/css/[name].[contenthash:8].css',
          chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
        }),
    ].filter(Boolean),
  };
};
