process.traceDeprecation = true
const path = require(`path`);
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: [ `./src/index.js`, "./public/scss/index.scss"],
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`)
  },
  devServer: {
    contentBase: path.join(__dirname, `public`),
    open: false,
    port: 1337,
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node-modules/,
        use: {
          loader: `babel-loader`,
        },
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          {
            loader: 'css-loader', // translates CSS into CommonJS
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader', // post process the compiled CSS
          'sass-loader' // compiles Sass to CSS, using Node Sass by default
        ]
      }
    ],
  },
  devtool: `source-map`,
  plugins: [
    // new ExtractTextPlugin('./dist/css/style.css') 
    new MiniCssExtractPlugin()
  ]
}