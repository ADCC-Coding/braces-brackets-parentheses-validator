var webpack = require('webpack');
const path = require('path');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        'app': './index.ts'
    },
    devServer: {
        contentBase: './'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'http://localhost:8080/dist/',
        filename: '[name].js'
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    }
};