const path = require("path");

//插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

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
      // {
      //   test: /\.(eot|ttf|woff2?)$/,
      //   type:'asset/resource',
      //   generator:{
      //     filename:'font/[name].[hash:6][ext]'
      //   }
      // },
      {
        test: /\.(eot|ttf|woff2?)$/,
        type: "javascript/auto",
        loader: "file-loader",
        options: {
          name: "font/[name]_[hash:6].[ext]",
        },
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
};
