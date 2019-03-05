const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = [
  {
    devtool: 'none',
    entry: {
      index: './src/index.js'
    },
    output: {
      filename: 'dev.bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    optimization: {
      usedExports: true
    }
  },
  {
    devtool: 'none',
    entry: {
      index: './src/index.js'
    },
    output: {
      filename: 'prod.bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    mode: 'production',
    optimization: {
      usedExports: true
    }
  },
  {
    devtool: 'none',
    entry: {
      index: './src/index.js'
    },
    output: {
      filename: 'prod-readable.bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    mode: 'production',
    optimization: {
      usedExports: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            mangle: false,
            compress: {
              inline: false,
              keep_classnames: true,
              keep_fnames: true
            }
          }
        })
      ]
    }
  }
];