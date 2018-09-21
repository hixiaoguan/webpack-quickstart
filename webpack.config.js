const path = require('path');

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
                use: [
                    'file-loader'
                ]
            },
             {
                 test: /\.scss$/,
                 use: [{
                     loader: "style-loader" // 将 JS 字符串生成为 style 节点
                 }, {
                     loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
                 }, {
                     loader: "sass-loader" // 将 Sass 编译成 CSS
                 }]
             }
        ]
    }
};