'use strict';

const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');

const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
	mode: process.env.NODE_ENV === 'production' ? 'production' : 'none',
	entry: {
		server: './server.ts'
	},
	target: 'node',
	output: {
		filename: '[name].js',
		libraryTarget: 'commonjs2'
	},
	optimization: {
		nodeEnv: false
	},
	resolve: {
		extensions: ['.ts', '.js'],
		modules: [
			'node_modules',
			'src'
		],
		plugins: [
			new TsConfigPathsPlugin()
		]
	},
	plugins: [
		new webpack.LoaderOptionsPlugin({
			options: {
				test: /\.ts$/,
				ts: {
					compiler: 'typescript',
					configFileName: 'tsconfig.json'
				},
				tslint: {
					emitErrors: true,
					failOnHint: true
				}
			}
		})
	],
	devtool: 'source-map',
	module: {
		rules: [{
			test: /\.ts$/,
			loaders: 'awesome-typescript-loader'
		}]
	},
	externals: [nodeExternals()]
};
