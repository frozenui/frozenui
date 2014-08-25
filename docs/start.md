# 开始使用

- order: 4
- category: alice

---

## 一个简单的例子

<script src="https://gist.github.com/fayching/120062fa6fadfdace1d4.js"></script>


粘贴到页面中你会看到一个好友选择的页面，引用了[http://i.gtimg.cn/vipstyle/frozenui/1.0.0/css/basic.css?_bid=256](http://i.gtimg.cn/vipstyle/frozenui/1.0.0/css/basic.css?_bid=256)，这是打包了除了vip图标的基础css文件，使用手Q离线包需要加上bid的参数。

如果要使用[ui-icon-viplevel](http://frozenui.github.io/docs/ui/ui-icon-viplevel) 和[ui-icon-qqlevel](http://frozenui.github.io/docs/ui/ui-icon-qqlevel)则需另外引用[http://i.gtimg.cn/vipstyle/frozenui/1.0.0/css/vip.css](http://i.gtimg.cn/vipstyle/frozenui/1.0.0/css/vip.css) ,你也可以选择将vip.css打包到你页面的css中。

还有一种引用方式，非手Q的页面可以引用[http://i.gtimg.cn/vipstyle/frozenui/1.0.0/css/global.css](http://i.gtimg.cn/vipstyle/frozenui/1.0.0/css/global.css) 文件，
这个css打包了所有模块。

具体模块的代码可以访问[http://frozenui.github.io/docs/widget.html](http://frozenui.github.io/docs/widget.html)


## 引用和下载


#### 1. 可以直接使用上面的 css 文件，这里提供一个未压缩的版本。

   [http://i.gtimg.cn/vipstyle/frozenui/1.0.0/css-debug/basic.css](http://i.gtimg.cn/vipstyle/frozenui/1.0.0/css-debug/basic.css)

####2.访问我们的github仓库
 [https://github.com/frozenui/baseui](https://github.com/frozenui/baseui)，自行 clone 到本地。


####3. 也可以利用 cdn 和 combo 服务，因为手Q有离线包不建议这样使用。

 ```html
 
    <link media="all" href="http://i.gtimg.cn/c/=/vipstyle/frozenui/1.0.0/css/base/reset.css,/vipstyle/frozenui/1.0.0/css/base/atom.css,/vipstyle/frozenui/1.0.0/css/basic/ui-notice.css" rel="stylesheet">
    
 ```


