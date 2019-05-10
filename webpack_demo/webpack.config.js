// 基于node, 遵循commonjs规范
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/index.js', // 入口
  output: {
    filename: 'build.js',
    path:path.resolve('./build')  // 必须是绝对路径
  },
  // 开发服务器配置
  devServer: {
    contentBase: './build',
    port: '3000',
    compress: true, // 服务器压缩
    open: true, //自动打开浏览器
  },
  module: {}, //模块配置
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      title: 'webpack_test_app',
      minify: {}
    })
  ], // 插件配置
  mode: 'development', // 模式：开发或者生产
  resolve: {} // 配置解析规则
}
