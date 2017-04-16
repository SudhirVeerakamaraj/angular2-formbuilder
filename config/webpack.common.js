var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');


module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts'
  },

  resolve: {
    extensions: ['.js', '.ts']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          { loader: 'awesome-typescript-loader' },
          { loader: 'angular2-template-loader' }
        ]
      },
      {
        test: /\.html$/,
        // loader: 'html'
        use: [{ loader: 'html-loader' }]
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        use: [
          {
            loader: 'file',
            options: { name: 'assets/[name].[hash].[ext]' }
          }]
        // loader: 'file?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.css$/,
        // exclude: helpers.root('src', 'app'),
        exclude: [helpers.root('src', 'app')],

        // loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?sourceMap',
        })
      },
      {
        test: /\.css$/,
        // include: helpers.root('src', 'app'),
        include: [helpers.root('src', 'app')],
        // loader: 'raw'
        use: [{ loader: 'raw-loader' }]
      },
      {
        test: /\.less$/,
        exclude: [/node_modules/],
        // loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'less-loader'
          ]
        })

      }
    ]
  },

  plugins: [
    // Workaround for angular/angular#11580
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      helpers.root('./src'), // location of your src
      {} // a map of your routes
    ),

    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new ExtractTextPlugin("[name].css")
  ]
};
