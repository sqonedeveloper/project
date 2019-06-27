const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

const buildPath = path.resolve(__dirname, 'assets/js/public/bundle');
const entry_public = {
   header: './src/PublicPanel/Header.js',
   home: './src/PublicPanel/Home.js',
   login: './src/PublicPanel/Login.js',
   profile: './src/PublicPanel/Profile.js',
   forms: './src/PublicPanel/Forms.js',
   view: './src/PublicPanel/View.js',
   finish: './src/PublicPanel/Finish.js'
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
        // optipng.enabled: false will disable optipng
        optipng: {
          enabled: false,
        },
        pngquant: {
          quality: '65-90',
          speed: 4
        },
        gifsicle: {
          interlaced: false,
        },
        // the webp option will enable WEBP
        webp: {
          quality: 75
        }
      }
             },
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
