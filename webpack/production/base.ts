import { Configuration } from 'webpack';
const TerserJSPlugin = require('terser-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const config: Configuration = {
	mode: "production",
	context: process.cwd(),
	optimization: {
		minimizer: [new TerserJSPlugin({})],
	},
	performance: {
		hints: false,
		maxEntrypointSize: 300000,
		maxAssetSize: 300000
	},
	stats: 'minimal',
	plugins: [
		new ForkTsCheckerWebpackPlugin({
			// eslint: true
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
		]
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"]
	}
};

module.exports = config;