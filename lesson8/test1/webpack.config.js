const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
  const isProdaction = argv.mode === "production";

  const config = {
    entry: "./src/index.js",
    output: {
      filename: "bundle.js",
    },
    module: {
      rules: [
        {
          test: /\.js$/i,
          use: ["babel-loader"],
        },
        {
          test: /\.s?css$/i,
          use: [
            isProdaction ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.(png|jpg|gif)$/i,
          use: [
            {
              loader: "url-loader",
              options: {
                outputPath: "images",
                limit: 8192,
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
      }),
    ],
    devServer: {
      port: 9000,
      hot: true,
    },
  };

  if (isProdaction) {
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: "[name].css",
      })
    );
  }

  return config;
};
