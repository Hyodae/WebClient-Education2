module.exports = {
    presets: [
        [
            "@babel/preset-env", {
                targets: {
                    browsers: [
                        "last 2 versions",
                        "ie >= 9",
                        "iOS >= 8"
                    ]
                },
                // usage로 지정하는 경우, 코드에서 import "@babel/polyfill"할 필요 없다.
                // async/await 사용시는 필요
                // https://babeljs.io/docs/en/babel-preset-env#usebuiltins
                useBuiltIns: "usage",
            }
        ],
        [
            // https://babeljs.io/docs/en/babel-preset-react#options
            "@babel/preset-react", {
                "throwIfNamespace": false // defaults to true
            }
        ]
    ]
};