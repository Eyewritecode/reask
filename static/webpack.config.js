const webpack = require("webpack");

/* Add "extract-text-webpack-plugin" 
  https://webpack.js.org/plugins/extract-text-webpack-plugin/#components/sidebar/sidebar.jsx
  
  To be able to use CSS in our application, we have to install a few loaders and plugins, and add them to our Webpack config. This is because Webpack only understands JavaScript.

  Install the following plugins:

      css-loader
      style-loader
      extract-text-webpack-plugin

  The css-loader and the style-loader are required to make Webpack understand CSS. By adding these loaders, Webpack will be able to bundle any CSS we require into our bundle.js. The issue with this, is that the JavaScript and the CSS will not load separately on your page, which can lead to UI components not showing up until your JavaScript has loaded. This isn’t great, as on bad networks our design might load very slowly.

  We can get around this issue by adding the extract-text-webpack-plugin.
*/

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
  entry: __dirname + "/js/index.jsx",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".css"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })      
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/reask/static/dist'
            }  
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
  ],
};

module.exports = config;
