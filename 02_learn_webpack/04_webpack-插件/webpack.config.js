const path = require("path");

//插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");

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
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
          // {
          //   loader:'postcss-loader',
          //   options:{
          //     postcssOptions:{
          //       plugins:[
          //         require('autoprefixer')
          //       ]
          //     }
          //   }
          // }
        ],
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
      // {
      //   test:/\.(jpe?g|png|gif|svg)$/,
      //   loader:'file-loader',
      //   options:{
      //     outputPath:'img',
      //     name:'[name]_[hash:6].[ext]'
      //   }
      // },

      // webpack5新的处理方式，以前的url-loader，file-loader使社区在维护的
      // 现在webpack5内置了处理这些模块的功能成为assetModuleType---资源模块类型
      // vue-cli和react等还是webpack4
      // {
      //   test:/\.(jpe?g|png|gif|svg)$/,
      //   type:'asset',
      //   generator:{
      //     filename:'img/[name].[hash:6][ext]'
      //   },
      //   parser:{
      //     dataUrlCondition: {
      //       maxSize: 50 * 1024
      //     }
      //   }
      // },
      // {
      //   test:/\.html$/,
      //   use:['html-loader']
      // },
      {
        test: /\.(eot|ttf|woff2?)$/,
        type: "asset/resource",
        generator: {
          filename: "font/[name].[hash:6][ext]",
        },
      },
      // 下面这种用loader在webpack5中打包字体还是有bug
      // 但是上面这种url-loader打包图片加上type不会出错
      // {
      //   test: /\.(eot|ttf|woff2?)$/,
      //   type:'javascript/auto',
      //   loader:'file-loader',
      //   options:{
      //     name:'font/[name]_[hash:6].[ext]'
      //   }
      // }
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
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./public",
          to: "./",
          globOptions: {
            ignore: ["**/index.html"],
          },
        },
      ],
    }),
  ],
};
