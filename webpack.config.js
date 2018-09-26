const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode:'production',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: path.join(__dirname, 'src/json'),
            to: path.join(__dirname, 'dist/json')
        }]),
        new HtmlWebpackPlugin({
            template: "./src/index.html", //模板来源文件
            //filename:"index.html",  //生成的模板文件的名字
            minify: {//压缩 去除引号、注释、空属性、空格
                removeAttributeQuotes: true,//去除引号
                removeComments: true,//去除注释
                removeEmptyAttributes: true,//去除空属性
                collapseWhitespace: true//去除空格
            },
            inject:true,
            hash:true
        })
    ],
    module: {
         rules: [
            {
                test: /\.css$/,
                 use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{loader: 'file-loader',
                    options:{
                        limit: 4096,
                        name: 'images/[name].[hash].[ext]',
                        publicPath:'./'
                    }
                }]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader' // 将 JS 字符串生成为 style 节点
                }, {
                    loader: 'css-loader' // 将 CSS 转化成 CommonJS 模块
                }, {
                    loader: 'sass-loader' // 将 Sass 编译成 CSS
                }]
            },
            {
                test:/\.(htm|html)$/i,
                use: 'html-withimg-loader'
            }
        ]
    }
};