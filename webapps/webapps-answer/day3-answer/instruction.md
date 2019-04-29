# Babel

## 1) 설치
npm install --save-dev @babel/core @babel/cli @babel/preset-env

preset: pre-determined set of plugins
변환시킬 코드 syntax별 플러그인 설치를 하지 않고, 미리 정의된 플러그인 세팅

## 2) 설정파일 생성
babel.config.js

https://babeljs.io/docs/en/configuration

## 3) 컴파일 하기

package.json에 다음을 추가

  "scripts": {
    "build": "babel src -d dist",
    
$ npm run build


# Webpack

## 1) 설치

$ npm i webpack --save-dev

## 2) 설정파일 생성
webpack.config.js

module.exports = {
    entry: './path/file.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-first-webpack.bundle.js'
    },
    module: {
        rules: [
            { test: /\.txt$/, use: 'raw-loader' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'})
    ]
};

entry는 번들링을 위한 entry point 파일의 위치를 기술한다.
output는 번들링의 결과가 어느 위치에, 어떤 이름으로 저장할지를 지정한다.
loaders는 별도의 로더(패키지)를 통해, entry를 통해 포함되는 원래의 코드에서 다른 형태의 코드로 변환하는 등의 작업을 한다.
plugins은 번들링된 코드의 결과에 대한 추가 작업을 수행한다. 플러그인 종류에 따라 추가작업은 달라지며, 예를 들어 코드의 최적화 등이 여기에 해당된다.

https://webpack.js.org/concepts/

## 3) 실행

package.json에 다음을 추가

  "scripts": {
    "bundle": "webpack",

$ npm run build
