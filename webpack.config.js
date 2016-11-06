var path = require("path");

module.exports = {
  //context: __dirname,
  entry: "./dist/ui.js",
  output: {
    //path: path.join(__dirname, "dist/static"),
    path: "./dist/ui",
    filename: "bundle.js"
  },
  devtool: 'source-map',
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  }
}
