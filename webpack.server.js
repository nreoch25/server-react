const path = require("path");
const merge = require("webpack-merge");
const nodeExternals = require("webpack-node-externals");
const baseConfig = require("./webpack.base.js");

const config = {
  // Inform webpack that we're building a bundle
  // for nodeJS, rather than for the browser
  target: "node",
  // Tell webpack the root file for server application
  entry: "./src/index.js",
  // Tell webpack where to put the output file
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },
  externals: [nodeExternals()]
};

module.exports = merge(baseConfig, config);
