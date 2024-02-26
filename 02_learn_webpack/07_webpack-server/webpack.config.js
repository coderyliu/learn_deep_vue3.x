const path = require("path");

//插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader/dist/index");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "build"),
    filename: "js/bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        type: "javascript/auto",
        use: {
          loader: "url-loader",
          options: {
            limit: 28 * 1024,
            name: "img/[name]_[hash:6].[ext]",
            esModule: false,
          },
        },
      },
      {
        test: /\.(eot|ttf|woff2?)$/,
        type: "asset/resource",
        generator: {
          filename: "font/[name].[hash:6][ext]",
        },
      },
      {
        test: /\.m?js$/,
        loader: "babel-loader",
        options: {
          presets: [["@babel/preset-env"]],
        },
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./public/index.html"),
      title: "webpack基础",
    }),
    new DefinePlugin({
      BASE_URL: "'./'",
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    }),
    new CopyWebpackPlugin({
      patterns: [{
        from: './public',
        to: './',
        globOptions: {
          ignore: [
            '**/index.html'
          ]
        }
      }]
    }),
    new VueLoaderPlugin(),
  ],
  // 设置模式
  // development 开发阶段, 会设置development
  // production 准备打包上线的时候, 设置production
  mode: "development",
  devtool: "eval-source-map",
  // watch:true,
  devServer: {
    // webpack5不支持contentBase,支持static
    // contentBase:'./abc',
    static: {
      directory: path.join(__dirname, "abc"),
    },
    hot: true,
    // host:'0.0.0.0',
    port: 8888,
    // open:true,
    compress: true,
    proxy: {
      api: {
        target: "http://127.0.0.1:5000",
        secure: false,
        changeOrigin: true,
      },
    },
  },
  resolve: {
    extensions: [".wasm", ".mjs", ".js", ".json", ".vue", ".ts"],
    alias: {
      "@": path.join(__dirname, "./src/js"),
    },
  },
};
