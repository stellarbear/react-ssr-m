import webpack from 'webpack';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

//https://github.com/webpack-contrib/mini-css-extract-plugin
//https://github.com/TypeStrong/ts-loader/tree/master/examples/fork-ts-checker-webpack-plugin
const config: webpack.Configuration = {
    mode: "development",
    optimization: {
        usedExports: true,
    },
    context: process.cwd(),
    plugins: [
        new ForkTsCheckerWebpackPlugin({
            // eslint: true
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
    ],
    module: {
        rules: [
            {
                test: /.tsx?$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'ts-loader', options: { transpileOnly: true } }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: true,
                            reloadAll: true,
                        },
                    },
                    'css-loader',
                ],
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    devtool: 'inline-source-map',
    devServer: {
        clientLogLevel: 'warning',
        open: true,
        historyApiFallback: true,
        stats: 'errors-only'
    }
};

module.exports = config;