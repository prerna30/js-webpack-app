module.exports = {
  mode: "development",
  devtool: "source-map",
  devServer: {
    static: "./public",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
