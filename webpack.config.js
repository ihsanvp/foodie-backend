const path = require('path');
const nodeExternals = require('webpack-node-externals');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

/** @type {import("webpack").Configuration} */
const config = {
  entry: './src/server.ts',
  target: 'node',
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
    plugins: [
      new TsconfigPathsPlugin({
        extensions: ['.ts', '.js'],
      }),
    ],
  },
  externals: [nodeExternals()],
  externalsPresets: {
    node: true,
  },
};

module.exports = config;
