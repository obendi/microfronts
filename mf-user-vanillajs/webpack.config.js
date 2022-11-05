const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bendi-mf-user.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'system',
    publicPath: '',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public')
    },
    compress: true,
    port: 7000,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
      "Access-Control-Allow-Headers": "content-type"
    }
  }
};