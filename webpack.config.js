const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const WebpackBar = require('webpackbar');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

const buildPath = path.resolve(__dirname, 'assets/js/admin/bundle');
const entry_public = {
   header: './src/AdminPanel/Header.js'
}

module.exports = {
   mode: 'development',
   entry: entry_public,
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
      }, {
         test: /\.(gif|png|jpe?g|svg)$/i,
         use: [
            'file-loader',
            {
               loader: 'image-webpack-loader',
               options: {
                  mozjpeg: {
                     progressive: true,
                     quality: 65
                  },
                  optipng: {
                     enabled: true,
                  },
                  pngquant: {
                     quality: '65-90',
                     speed: 4
                  },
                  gifsicle: {
                     interlaced: false,
                  },
                  webp: {
                     quality: 75
                  }
               }
            }
         ]
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
      new WebpackBar(),
      new HardSourceWebpackPlugin({
			cacheDirectory: 'node_modules/.cache/hard-source/[confighash]',
			configHash: function(webpackConfig) {
				return require('node-object-hash')({sort: false}).hash(webpackConfig);
			},
			environmentHash: {
				root: process.cwd(),
				directories: [],
				files: ['package-lock.json', 'yarn.lock']
			},
			info: {
				mode: 'none',
				level: 'debug'
			},
			cachePrune: {
				maxAge: 2 * 24 * 60 * 60 * 1000,
				sizeThreshold: 50 * 1024 * 1024
			}
		}),
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
   devtool: 'cheap-eval-source-map'
}
