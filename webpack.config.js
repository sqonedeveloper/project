const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

const buildPath = path.resolve(__dirname, 'assets/cetak/bundle');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: path.resolve(buildPath),
		filename: '[name].bundle.js'
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: "babel-loader"
			}
		}, {
			test: /\.html$/,
			exclude: /node_modules/,
			use: {
				loader: "html-loader"
			}
		}]
	},
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				extractComments: true,
				parallel: true
			})
		],
		splitChunks: {
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
					name: 'vendor',
					chunks: 'all'
				}
			}
		}
	},
	plugins: [
		new webpack.optimize.ModuleConcatenationPlugin(),
		new HtmlWebPackPlugin({
			template: path.resolve(__dirname, './src/index.html'),
			excludeChunks: ['base'],
			minify: {
				collapseWhitespace: true,
				collapseInlineTagWhitespace: true,
				removeComments: true,
				removeRedundantAttributes: true
			}
		}),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new ScriptExtHtmlWebpackPlugin({
			defaultAttribute: 'defer'
		})
	],
	performance: {
		hints: false
	},
	devServer: {
		quiet: true,
		host: 'localhost',
		watchContentBase: true,
		compress: true,
		port: 8080
	},
	devtool: 'cheap-source-map',
	watch: true,
	watchOptions: {
		aggregateTimeout: 300,
		poll: 1000
	}
}
