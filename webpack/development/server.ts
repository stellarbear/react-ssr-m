import { Configuration } from 'webpack';
const path = require('path');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const base = require('./base.ts');

const config: Configuration = {
    target: 'node',
    entry: './src/server/index.tsx',
    output: {
        path: path.resolve(process.cwd(), 'build', 'server'),
        filename: 'bundle.js'
    },
    externals: [nodeExternals()]
};

const merged = merge(base, config)

module.exports = merged;