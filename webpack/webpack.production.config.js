const path = require('path');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const TerserPlugin = require('terser-webpack-plugin');

const baseConfig = require('./base.config')(process.env.NODE_ENV);

module.exports = {
  /** Use source-map devtool for production for better performance and generation of source maps */
  devtool: 'source-map',
  ...baseConfig.config,
  /** Optimize bundle */
  optimization: {
    ...baseConfig.config.optimization,
    minimizer: [
      /** minify js files */
      new TerserPlugin({
        sourceMap: true,
      }),
      /** Optimize and minify css */
      new OptimizeCssAssetsPlugin({}),
    ],
  },
  module: {
    rules: baseConfig.rules,
  },
  plugins: [
    /** Clear dist dir before build */
    new CleanWebpackPlugin([
      baseConfig.settings.outPath,
      path.dirname(baseConfig.settings.bundleAnalyzerReportPath),
    ], {
      root: baseConfig.settings.root,
    }),
    ...baseConfig.plugins,
    /** Injects bundle paths to html and also copies to dist */
    new HtmlWebPackPlugin({
      template: baseConfig.settings.indexHtmlFile,
    }),
    /** Awesome bundle analyzer to analyze build bundle */
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: baseConfig.settings.bundleAnalyzerReportPath,
    }),
  ],
}
