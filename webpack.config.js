const path = require("path");
const nodeExternals = require("webpack-node-externals");

/** @type {import("webpack").Configuration} */
const config = {
  entry: "./src/server.ts",
  target: "node",
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".ts", ".js"],
  },
  externals: [nodeExternals()],
  externalsPresets: {
    node: true,
  },
};

module.exports = config;
