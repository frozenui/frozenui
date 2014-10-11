# 开始使用

---

## 例子


<style>
.nico-iframe iframe{height: 400px;}
</style>

````iframe
<!DOCTYPE HTML>
<html>
<head>
	<meta charset="utf-8">
	<meta name="author" content="ISUX">
	<meta name="format-detection" content="telephone=no"/>
	<meta name="viewport" content="width=device-width,user-scalable=no"/>
	<meta name="apple-mobile-web-app-capable" content="yes"/>
	<meta name="apple-mobile-web-app-status-bar-style" content="black"/>
	<title>demo</title>
	<link rel="stylesheet" type="text/css" href="http://i.gtimg.cn/vipstyle/frozenui/1.1.0/css/frozen.css?_bid=256">
	
</head>
<body>
	<div class="wrapper">
		<!-- list1 start -->
		<div  class="ui-searchbox-wrap">
		    <div class="ui-searchbox">
		        <i class="ui-icon-search"></i>
		        <div>搜索号码（2-10位）</div>
		    </div>
		</div>
		<nav class="ui-tab ui-border-b">
		    <ul>
		         <li class="current">热门推荐</li>
		        <li>限时免费</li>
		        <li>全部表情</li>
		    </ul>
		</nav>
		<ul class="ui-list ui-border-b">  
		    <li>
		        <div class="ui-list-thumb ui-avatar-s">
		           <span style="background-image:url(http://icase.tencent.com/vlabs/img/?100*100)"></span>
		        </div>
		        <div class="ui-list-info ui-border-t">
		            <h4>标题标题标题标题标题标题标题标题标题标题标题</h4>
		            <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
		        </div>
		    </li>
		    <li>
		        <div class="ui-list-thumb ui-avatar-s">
		            <span  style="background-image:url(http://icase.tencent.com/vlabs/img/?100*100)"></span>
		        </div>
		        <div class="ui-list-info ui-border-t">
		            <h4>标题标题标题标题标题标题标题标题标题标题标题</h4>
		            <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
		      </div>
		    </li>
		    <li>
		        <div class="ui-list-thumb ui-avatar-s">
		            <span  style="background-image:url(http://icase.tencent.com/vlabs/img/?100*100)"></span>
		        </div>
		        <div class="ui-list-info ui-border-t">
		            <h4>标题标题标题标题标题标题标题标题标题标题标题</h4>
		            <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
		      </div>
		    </li>
		    <li>
		        <div class="ui-list-thumb ui-avatar-s">
		            <span  style="background-image:url(http://icase.tencent.com/vlabs/img/?100*100)"></span>
		        </div>
		        <div class="ui-list-info ui-border-t">
		            <h4>标题标题标题标题标题标题标题标题标题标题标题</h4>
		            <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
		      </div>
		    </li>
		</ul>
		<div class="ui-loading-wrap">
		    <p>加载中</p>
		    <i class="ui-loading"></i>
		</div>
	</div>
</body>
</html>
````

你会看到一个[好友选择的页面](http://frozenui.github.io/test/ui-select-user.html)，引用了[http://i.gtimg.cn/vipstyle/frozenui/1.1.0/css/frozen.css?_bid=256 
](http://i.gtimg.cn/vipstyle/frozenui/1.1.0/css/frozen.css?_bid=256 
)，这是打包了除了会员相关的基础css文件，使用手Q离线包需要加上bid的参数。


如果要使用 [vip等级图标](http://frozenui.github.io/baseui/ui-icon-viplevel) ，[qq等级图标](http://frozenui.github.io/baseui/ui-icon-qqlevel)，[角标](http://frozenui.github.io/baseui/ui-tag)，[好友选择器](http://frozenui.github.io/baseui/ui-select-user)，则需另外引用单独的css如[http://i.gtimg.cn/vipstyle/frozenui/1.1.0/css/vip/ui-tag.css](http://i.gtimg.cn/vipstyle/frozenui/1.1.0/css/vip/ui-tag.css)或打包了这几个组件的[http://i.gtimg.cn/vipstyle/frozenui/1.1.0/css/vip.css](http://i.gtimg.cn/vipstyle/frozenui/1.1.0/css/vip.css)，你也可以选择将css直接打包到你页面的css中。



还有一种引用方式，非手Q的页面可以引用[http://i.gtimg.cn/vipstyle/frozenui/1.1.0/css/global.css](http://i.gtimg.cn/vipstyle/frozenui/1.1.0/css/global.css) 文件，这个css打包了所有模块。

具体模块的代码可以访问[http://frozenui.github.io/baseui/](http://frozenui.github.io/baseui/)


## 如何引用


#### 1. 可以直接使用上面的 css 文件，这里提供一个未压缩的版本。

   [http://i.gtimg.cn/vipstyle/frozenui/1.1.0/css-debug/frozen.css](http://i.gtimg.cn/vipstyle/frozenui/1.1.0/css-debug/frozen.css)

####2.访问我们的github仓库
 [https://github.com/frozenui/baseui](https://github.com/frozenui/baseui)，自行 clone 到本地。


####3. 也可以利用 cdn 和 combo 服务，因为手Q有离线包不建议这样使用。

 ```html
 
    <link media="all" href="http://i.gtimg.cn/c/=/vipstyle/frozenui/1.1.0/css/basic/reset.css,/vipstyle/frozenui/1.1.0/css/basic/ui-notice.css" rel="stylesheet">
    
 ```



