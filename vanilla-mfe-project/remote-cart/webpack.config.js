const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/index.js", 
  mode: "development",
  devServer: {
    port: 3001, 
  },
  output: {
    publicPath: "auto", 
  },
  // --- THE FIX IS HERE ---
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        type: "javascript/esm", // Forces Webpack to accept import/export without complaining
      },
    ],
  },
  // -----------------------
  plugins: [
    new ModuleFederationPlugin({
      name: "remoteCart", 
      filename: "remoteEntry.js", 
      exposes: {
        "./Cart": "./src/cart.js", 
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};