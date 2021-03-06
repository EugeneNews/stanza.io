const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const Pkg = require('./package.json');


module.exports = {
    entry: './src/index.js',

    output: {
        filename: 'stanzaio.bundle.js',
        library: 'XMPP',
        libraryTarget: 'window',
        path: path.resolve('build')
    },

    module: {
        rules: [
            {
                test: /index\.js/,
                loader: 'string-replace-loader',
                options: {
                    search: '__STANZAIO_VERSION__',
                    replace: Pkg.version
                }
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: Pkg.babel
            }
        ]
    },

    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            reportFilename: 'bundle-stats.html',
            defaultSizes: 'gzip'
        })
    ]
};

