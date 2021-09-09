const webpack = require('webpack');
module.exports = {
    mode: 'development',
    entry: {
        main: "./js/app.jsx"
    },
    output: {
        path: __dirname + '/static',
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".js", ".jsx", ".css"]
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)?/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
};
