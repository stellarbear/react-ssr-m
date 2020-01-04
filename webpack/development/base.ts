import { Configuration } from 'webpack';
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const config: Configuration = {
	mode: "development",
	stats: {
		modules: false,
	},
	optimization: {
		usedExports: true,
	},
	context: process.cwd(),
	plugins: [
		new ForkTsCheckerWebpackPlugin({
			// eslint: true
		})
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