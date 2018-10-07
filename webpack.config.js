const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const nodeModules = path.resolve(__dirname, 'node_modules');
const pathToReact = path.resolve(nodeModules, 'react/cjs/react.production.min.js');
const pathToReactDOM = path.resolve(nodeModules, 'react-dom/cjs/react-dom.production.min.js');
const pathToReactRouter = path.resolve(nodeModules, 'react-router');
const pathToReactRouterDom = path.resolve(nodeModules, 'react-router-dom');

const PRODUCTION = (process.env.NODE_ENV === 'production');
const mode = PRODUCTION ? 'production' : 'development';
const entry = PRODUCTION ? [path.resolve(__dirname, 'app/main.js')]
    : [
        path.resolve(__dirname, 'app/main.js'),
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:5566',
    ];
const plugins = PRODUCTION ? [] : [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'src/index.html'),
    filename: 'index.html',
    inject: 'body',
}), new webpack.HotModuleReplacementPlugin()];

const config = {
    mode,
    entry,
    resolve: {
        alias: {
            react: pathToReact,
            'react-dom': pathToReactDOM,
            'react-router': pathToReactRouter,
            'react-router-dom': pathToReactRouterDom,
        },
        extensions: ['.js', '.jsx'],
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'main.bundle.js',
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['env', 'react'],
            },
        }, {
            test: /\.scss$/,
            loader: 'style-loader?sourceMap!css-loader?sourceMap!sass-loader?sourceMap',
        }],
    },
    plugins,
    devServer: {
        hot: true,
        contentBase: path.resolve(__dirname, 'src'),
        publicPath: '/build',
        stats: { colors: true },
    },
};

module.exports = config;
