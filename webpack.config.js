/*
 * Copyright 2020 大明二代
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* eslint-disable @typescript-eslint/no-var-requires */
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
		modules: ['node_modules', 'src'],
		plugins: [new TsConfigPathsPlugin()]
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
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader'
			}
		]
	},
	externals: [nodeExternals()]
};
