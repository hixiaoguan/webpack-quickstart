# 基于 webpack 的快速 构建前端开发环境 - jonyguan QQ：309678100

## 基于webpack 可以实现 js ,css ,sass ,图片文件 自动打包

## 可以直接用 rem 单位 

 - 需配置设计稿宽度（常见尺寸 WAP页面 640, 750, PC页面 1200, 1920）这个也可以根据设计师提供的设计稿来，不是固定的
 - 打开 src/js/html5-px2rem-new.js 文件，找到 designWidth 设计稿宽度参数 修改为你的设计搞的尺寸，即可
 - 写样式的时候 100px 就写成 1rem , 325px 就写成 3.25rem 宝宝再也不用担心数学不好了 ^^

## 使用说明

    -  npm install       安装依赖

    -  npm run watch     开发过程用这个    开发过程中在src里操作js,scss文件会自动监听，有改动会自动刷新浏览器，效果同步

    -  npm run build     完成后打包用这个   最终打包后的文件都在 dist 目录


## 前端技术博客 https://www.qdit.ren 