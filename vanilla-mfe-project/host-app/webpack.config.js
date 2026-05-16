const HtmlWebpackPlugin = require("html-webpack-plugin");
    const { ModuleFederationPlugin } = require("webpack").container;

    module.exports = {
      entry: "./src/index.js",
      mode: "development",
      devServer: {
        port: 3000, // The Host runs on port 3000
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            type: "javascript/esm", // Native ES Modules, just like the remote app
          },
        ],
      },
      plugins: [
        new ModuleFederationPlugin({
          name: "hostApp",
          // The magic connection: We define where to fetch the remote code
          remotes: {
            remoteCart: "remoteCart@http://localhost:3001/remoteEntry.js",
          },
        }),
        new HtmlWebpackPlugin({
          template: "./public/index.html",
        }),
      ],
    };