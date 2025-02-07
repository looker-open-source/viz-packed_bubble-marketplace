var path = require("path");

const TerserPlugin = require('terser-webpack-plugin');

var webpackConfig = {
  mode: "production",
  entry: {
    packed_bubble: "./src/bubble_chart/bubble_chart_container.js",
  },
  devServer: {
    contentBase: "./dist",
  },
  output: {
    filename: "packed_bubble.js",
    path: path.join(path.resolve(__dirname), "/dist"),
    library: "[name]",
    libraryTarget: "umd",
  },
  resolve: {
    extensions: [".js"],
    modules: [path.join(__dirname, "../src"), "node_modules"],
  },
  plugins: [new TerserPlugin()],
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: [{loader: "babel-loader"}] },
      { test: /\.css$/, use: [{loader: "to-string-loader"}, {loader: "css-loader"}] },
      { test: /\.(woff|woff2|ttf|otf)$/, use: [{loader: "url-loader"}] },
    ],
  },
  stats: {},
};

module.exports = webpackConfig;
