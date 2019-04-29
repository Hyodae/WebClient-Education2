const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = function(env, arg) {
    const distPath = path.join(__dirname, "dist");

    return {
        entry: "./src/index.js",
        output: {
            path: distPath,
            filename: "webapp.bundle.js",
            publicPath: "dist"
        },
        module: {
          rules: [
            {
              test: /\.m?jsx?$/,
              exclude: /(node_modules)/,
              use: {
                loader: "babel-loader",
                options: {
                  presets: ["@babel/preset-env", "@babel/preset-react"]
                }
              }
            }
          ]
        },
        resolve: {
          extensions: [".js", ".jsx"],
        },
        devtool: "cheap-module-source-map",
        mode: arg.mode || "none",
        plugins: [
            new HtmlWebPackPlugin({
              title: "My ReactApp",
              template: "./src/index.html",
              filename: path.join(__dirname, "index.html")
            })
        ]
    };
};