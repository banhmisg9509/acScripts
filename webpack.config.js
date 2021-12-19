const path = require('path');
const ShebangPlugin = require('webpack-shebang-plugin');

module.exports = {
  mode: 'production',
  devtool: 'eval',
  target: 'node',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    clean: true,
  },
  plugins: [new ShebangPlugin()],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { targets: { node: 14 } }]],
          },
        },
      },
      {
        test: /\.txt$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },
};
