const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/** Settings for various paths */
const settings = {
  entryIndex: './src/index',
  root: path.resolve(__dirname, '..'),
  outPath: path.resolve(__dirname, '..', 'dist'),
  srcDir: path.resolve(__dirname, '..', 'src'),
  indexHtmlFile: path.resolve(__dirname, '..', 'public/index.html'),
  transpiledPath: path.resolve(__dirname, '..', 'transpiled'),
  bundleAnalyzerReportPath: path.resolve(__dirname, '..', 'bundle-info/bundle-analysis-report.html'),
}

module.exports = (env) => {
  const isProd = env === 'production';

  return {
    settings,
    /** Common webpack config */
    config: {
      /** Entry point */
      entry: [
        settings.entryIndex,
      ],
      /** Webpack output */
      output: {
        path: settings.outPath,
        filename: isProd ? '[name].bundle.min.js' : '[name].bundle.js',
      },
      /** Resolve extensions and paths */
      resolve: {
        extensions: ['.js', '.ts', '.tsx'],
        alias: {
          '~common': path.resolve(settings.srcDir, 'common'),
          '~components': path.resolve(settings.srcDir, 'components'),
          '~stores': path.resolve(settings.srcDir, 'stores'),
          '~pages': path.resolve(settings.srcDir, 'pages'),
          '~types': path.resolve(settings.srcDir, 'types'),
          '~img': path.resolve(settings.srcDir, 'img'),
        }
      },
      /** Optimization settings */
      optimization: {
        /** Dead code elimination in minimizers will benefit from this and can remove unused exports. DEFAULT on in production only */
        usedExports: true,
        /** Enable code splitting. Also separate vendor chunk. */
        splitChunks: {
          cacheGroups: {
            /** common chunk for components which are used multiple places */
            common: {
              chunks: 'all',
              /** tells SplitChunksPlugin to only inject module inside common chunk if and only if they are shared between at least 2 chunks */
              minChunks: 2,
              /** tells SplitChunksPlugin to use existing chunk if available instead of creating new one. */
              reuseExistingChunk: true,
              enforce: true,
              maxInitialRequests: 5,
              minSize: 0,
            },
            vendor: {
              test: /node_modules/,
              chunks: 'all',
              name: 'vendor',
              priority: 10,
              enforce: true,
            }
          }
        },
      },
    },
    rules: [
      /** ts(x) files, use babel-loader which uses typescript preset */
      {
        test: /\.tsx?$/,
        include: settings.srcDir,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      /** js(x) files */
      {
        test: /\.jsx?$/,
        include: settings.srcDir,
        exclude: /node_modules/,
        use: [ 'babel-loader', 'source-map-loader' ],
      },
      /** css or sass files */
      {
        test: /\.(css|sass|scss)$/,
        use: [
          /** Loader which extracts css */
          {
            loader: MiniCssExtractPlugin.loader,
          },
          /** To generate typings for css modules */
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              modules: true,
              importLoaders: 2,
              namedExport: true,
              camelCase: true,
              sourceMap: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
      /** Font files */
      {
        test: /\.(ttf|eot|woff2?)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]',
          },
        }],
      },
      /** Images */
      {
        test: /\.(png|jpe?g|gif|svg|webp)/i,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'img/[name].[hash].[ext]',
          },
        }],
      },
    ],
    /** Provide various plugins */
    plugins: [
      /** Extracts css into separate css files, creates a CSS file per JS file which contains CSS */
      new MiniCssExtractPlugin({
        filename: isProd ? '[name].[hash].css' : '[name].css',
        chunkFilename: isProd ? '[id].[hash].css' : '[id].css',
      }),
    ]
  }
};
