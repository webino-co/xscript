const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
        resolve: {
          extensions: [".ts"],
        },
      },
    ],
  },
  output: {
    clean: true,
    filename: "xscript.min.js",
    path: path.resolve(__dirname, "dist"),
  },
};
