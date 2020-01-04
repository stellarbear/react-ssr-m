import { Configuration } from 'webpack';
const path = require('path');
const merge = require('webpack-merge');
const base = require('./base.ts');

const config: Configuration = {
	target: 'web',
	entry: './src/client/index.tsx',
	output: {
		path: path.resolve(process.cwd(), 'build', 'client'),
		filename: 'bundle.js'
	}
};

const merged = merge(base, config)

module.exports = merged;