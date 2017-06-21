const path = require("path");
const webpack = require("webpack");
const resolve = require('path').resolve;
const BundleTracker = require("webpack-bundle-tracker");

module.exports = {
  entry: "./assets/js/index",
  output: {
    path: path.resolve(__dirname, "./assets/webpack_bundles/"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        query: { presets: ["react"] }
      }
    ]
  },
  resolve: {
    alias: {
      // From mapbox-gl-js README. Required for non-browserify bundlers (e.g. webpack):
      'mapbox-gl$': resolve('./node_modules/mapbox-gl/dist/mapbox-gl.js')
    }
  },
  plugins: [new BundleTracker({ filename: "./webpack-stats.json" })]
};
