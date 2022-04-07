const path = require('path')

//插件
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
  DefinePlugin
} = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'js/bundle.js'
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        type: 'javascript/auto',
        use: {
          loader: 'url-loader',
          options: {
            limit: 28 * 1024,
            name: 'img/[name]_[hash:6].[ext]',
            esModule: false
          }
        }
      },
      {
        test: /\.(eot|ttf|woff2?)$/,
        type: 'asset/resource',
        generator: {
          filename: 'font/[name].[hash:6][ext]'
        }
      },
      {
        test:/\.m?js$/,
        loader:'babel-loader',
        options:{
          presets:[
            ['@babel/preset-env']
          ]
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public/index.html'),
      title: 'webpack基础'
    }),
    new DefinePlugin({
      BASE_URL: "'./'"
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
    })
  ],
  // 设置模式
  // development 开发阶段, 会设置development
  // production 准备打包上线的时候, 设置production
  mode: 'development',
  devtool: 'eval-source-map'
}