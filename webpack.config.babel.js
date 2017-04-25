import path from 'path';
import webpack from 'webpack';

const clientConfig = {
    context: path.join(__dirname, "react"),
    devtool: "inline-sourcemap",
    entry: "./js/client.js",
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    babelrc: false,
                    presets: ['react', 'latest', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
                }
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.txt$/,
                loader: 'raw-loader'
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            },
            {
                test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
                loader: 'file-loader',
                query: {
                    name: '[path][name].[ext]?[hash:8]'
                }
            },
            {
                test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    name: '[path][name].[ext]?[hash:8]',
                    limit: 10000
                }
            }
        ]
    },
    target: 'web',
    output: {
        path: path.join(__dirname, "public"),
        filename: "client.min.js"
    },
    plugins: [],
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },
    resolve: {
        root: path.resolve(__dirname, 'react'),
        modulesDirectories: ['node_modules'],
        extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.json']
    },
};

export default [clientConfig];