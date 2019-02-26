const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const baseConfig = require('./base.config')(process.env.NODE_ENV);

module.exports = {
  /** Super fast code generation */
  devtool: 'eval',
  ...baseConfig.config,
  /** webpack-dev-server config */
  devServer: {
    contentBase: baseConfig.settings.outPath,
    /** enable hot reload */
    hot: true,
  },
  module: {
    rules: baseConfig.rules,
  },
  plugins: [
    /** Injects bundle entries into html template */
    new HtmlWebPackPlugin({
      template: baseConfig.settings.indexHtmlFile,
    }),
    ...baseConfig.plugins,
    /** Hot module replacement plugin to enable reload of only changed modules */
    new webpack.HotModuleReplacementPlugin(),
  ],
}
