const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js",
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
    ],
  },
};
