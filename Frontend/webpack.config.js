// webpack.config.js
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  // other webpack config
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: { transpileOnly: true }, // skip type-checking
      },
    ],
  },
  plugins: [new ForkTsCheckerWebpackPlugin()],
};
