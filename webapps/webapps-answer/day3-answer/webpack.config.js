var path = require("path");

/*
     @TODO webpack config 설정을 작성하세요.
     1) 기본 webpack 설정
     - entry는 index.js
     - output은 dist 폴더에 webapp.bundle.js 파일로 출력하라.

     2) babel-loader를 설정

     3) webpack-dev-server를 설정

     4) 개발/배포 버전 번들링 설정 (package.json에 명령어 추가)
*/

module.exports = function(env, arg) {
    var distPath = path.join(__dirname, "dist");

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
              test: /\.m?js$/,
              exclude: /(node_modules)/,
              use: {
                loader: "babel-loader",
                options: {
                  presets: ['@babel/preset-env']
                }
              }
            }
          ]
        },
        devtool: "cheap-module-source-map",
        mode: arg.mode || "none",
        devServer: {
            //contentBase: distPath,
            ///compress: true,
            port: 9000
        },
        /*plugins: [
            new HtmlWebpackPlugin({template: './src/index.html'})
        ]*/
    };
};