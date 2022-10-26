const CopyPlugin = require("copy-webpack-plugin");

const path = require('path');

module.exports = {
  entry: ['./src/content.ts'],
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
    filename: 'content.js',
    path: path.resolve(__dirname, 'dist'),
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