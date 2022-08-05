const path=require('path')

const HtmlWebpackPlugin=require('html-webpack-plugin')
const {CleanWebpackPlugin}=require('clean-webpack-plugin')
const VueLoaderPlugin=require('vue-loader/dist/index')

module.exports={
  entry:'./src/main.js',
  output:{
    path:path.join(__dirname,'bundle'),
    filename:'js/bundle.js'
  },
  module:{
    rules:[
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      },
      {
        test:/\.less$/,
        use:['style-loader','css-loader','less-loader']
      },
      {
        test:/\.(jpe?g|png|gif|svg)$/,
        loader:'url-loader',
        type:'javascript/auto',
        options:{
          limit:1024*20,
          name:'img/[name]_[hash:6].[ext]',
          esModule:false
        }
      },
      {
        test:/\.(ttf|eot|woff2?)$/,
        type:'asset/resource',
        generator:{
          filename:'font/[name].[hash:6][ext]'
        }
      },
      {
        test:/\.vue$/,
        loader:'vue-loader'
      },
      {
        test:/\.js$/,
        loader:'babel-loader',
        options:{
          preset:[
            ['@babel/preset-env']
          ]
        },
        exclude: /node_modules/
      }
    ]
  },
  plugin:[
    new HtmlWebpackPlugin({
      template:path.join(__dirname,'./src/index.html'),
      title:'review webpack'
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin()
  ],
  mode:'development',
  devtool:'source-map',
  devServer:{
    static:{
      directory:path.join(__dirname,'abc')
    },
    hot:true,
    port:8888,
    proxy:{
      'api':{
        target:'http://127.0.0.1:5000',
        secure:false,
        changeOrigin:true
      }
    }
  },
  resolve:{
    extensions:['.wasm','.mjs','.js','.json','.vue','.ts'],
    alias:{
      '@':path.join(__dirname,'./src/js')
    }
  }
}