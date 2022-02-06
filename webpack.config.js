const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      title: "Battleship",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: "asset/resource",
      },
      // {
      //   test: /\.js$/i,
      //   enforce: "pre",
      //   use: ["source-map-loader"],
      // },
    ],
    //   loaders: [
    //   { exclude: ["node_modules"], loader: "babel", test: /\.jsx?$/ },
    //   { loader: "style-loader!css-loader", test: /\.css$/ },
    //   { loader: "url-loader", test: /\.gif$/ },
    //   { loader: "file-loader", test: /\.(ttf|eot|svg)$/ },
    // ],
  },
  resolve: {
    alias: {
      config$: "./configs/app-config.js",
      // react: "./vendor/react-master",
    },
    extensions: ["", "js", "jsx"],
    modules: [
      "node_modules",
      "bower_components",
      "shared",
      "/shared/vendor/modules",
    ],
  },
};
