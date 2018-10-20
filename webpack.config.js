const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  context: path.join(__dirname, "src"),
  entry: [
    "./Main.jsx"
  ],
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "/"
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    hot: true,
    historyApiFallback: true,
    inline: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  resolve: {
    modules: [
      path.join(__dirname, "node_modules")
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "/public/index.html"),
      files: {
        css: ["style.css"],
        js: ["bundle.js"]
      }
    })
  ]
};
