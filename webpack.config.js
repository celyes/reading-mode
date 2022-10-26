const CopyPlugin = require("copy-webpack-plugin");

const path = require('path');

module.exports = {
  entry: {
    'popup': './src/popup.ts',
    'content': './src/content.ts',
  },
  watchOptions: {
    aggregateTimeout: 200, 
    poll: 1000,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
  plugins: [
    new CopyPlugin({
        patterns: [
          { from: "src/views", to: "views" },
          { from: "src/manifest.json", to: "manifest.json" }
        ],
    }),
]
};