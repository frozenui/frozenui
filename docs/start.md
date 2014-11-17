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
	<link rel="stylesheet" type="text/css" href="http://i.gtimg.cn/vipstyle/frozenui/1.2.0/css/frozen.css?_bid=256">
	
</head>
<body>
	<div class="wrapper">
		<!-- list1 start -->
		<div class="ui-tab">
		    <ul class="ui-tab-nav ui-border-b">
		        <li class="current">热门推荐</li>
		        <li>全部表情</li>
		        <li>表情</li>
		    </ul>
		    <ul class="ui-tab-content">
		        <li>
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
		        </li>
		        <li></li>
		        <li></li>
		    </ul>
		</div>
	</div>
</body>
</html>
````

你会看到一个[demo页面](http://frozenui.github.io/test/demo.html)，引用了[http://i.gtimg.cn/vipstyle/frozenui/1.2.0/css/frozen.css?_bid=256 
](http://i.gtimg.cn/vipstyle/frozenui/1.1.0/css/frozen.css?_bid=256 
)，这是打包了除了会员相关的基础css文件，使用手Q离线包需要加上bid的参数。


如果要使用 [vip等级图标](http://frozenui.github.io/baseui/ui-icon-viplevel) ，[qq等级图标](http://frozenui.github.io/baseui/ui-icon-qqlevel)，[角标](http://frozenui.github.io/baseui/ui-tag)，[好友选择器](http://frozenui.github.io/baseui/ui-selector)，则需另外引用打包了这几个组件的[http://i.gtimg.cn/vipstyle/frozenui/1.2.0/css/vip.css?_bid=256](http://i.gtimg.cn/vipstyle/frozenui/1.2.0/css/vip.css?_bid=256)。


还有一种引用方式，非手Q的页面可以引用[http://i.gtimg.cn/vipstyle/frozenui/1.2.0/css/global.css](http://i.gtimg.cn/vipstyle/frozenui/1.2.0/css/global.css) 文件，这个css打包了所有模块。

具体模块的代码可以访问[http://frozenui.github.io/baseui/](http://frozenui.github.io/baseui/)


## 如何引用


#### 1. 可以直接使用上面的 css 文件，这里提供一个未压缩的版本。

   [http://i.gtimg.cn/vipstyle/frozenui/1.2.0/css-debug/frozen.css](http://i.gtimg.cn/vipstyle/frozenui/1.2.0/css-debug/frozen.css)

####2.访问我们的github仓库
 [https://github.com/frozenui/baseui](https://github.com/frozenui/baseui)，自行 clone 到本地。


####3. 下载地址

另外提供下载地址，主要供非腾讯公司用户使用：[http://frozenui.github.io/baseui/static/frozenui.zip](http://frozenui.github.io/baseui/static/frozenui.zip)

