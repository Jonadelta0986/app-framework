const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts'],
  },
  mode: 'production',
  output: {
    filename: 'aheeva.min.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'window',
  },
};
