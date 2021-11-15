module.exports = {
  module: {
    rules: [
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: "file-loader?name=assets/[name].[ext]",
      },
      {
        test: /\.md$/,
        loader: "raw-loader",
      },
    ],
  },
};
