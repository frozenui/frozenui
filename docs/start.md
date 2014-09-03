# 开始使用

- order: 5
- category: alice

---

## 一个简单的例子
<link rel="stylesheet" href="http://frozenui.github.io/static/solarized.css">

<style>
.nico-iframe iframe{height: 450px;}
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
	<title>好友选择器</title>
	<link rel="stylesheet" type="text/css" href="http://i.gtimg.cn/vipstyle/frozenui/1.0.0/css/basic.css?_bid=256">
	
</head>
<body>
	<div class="wrapper">
		<!-- list1 start -->
		<ul class="ui-select-user">
			<li class="ui-select-user-item active">
				<h3 class="ui-border-b"><i class="arrow"></i>最近在玩的好友</h3>
				<div class="ui-notice-warn"><i class="ui-icon ui-icon-refresh"></i><p>请检查网络</p></div>
				<ul class="ui-list ui-border-b">
					<li class="active">
						<div class="ui-list-thumb	ui-avatar">
							<span style="background-image:url(http://icase.tencent.com/vlabs/img/?100*100)"></span>
						</div>
						<div class="ui-list-info ui-border-t">飞翔的企鹅</div>
					</li>
					<li>
						<div class="ui-list-thumb ui-avatar">
							<span style="background-image:url(http://icase.tencent.com/vlabs/img/?100*100)"></span>
						</div>
						<div class="ui-list-info ui-border-t">飞翔的企鹅</div>
					</li>
					<li>
						<div class="ui-list-thumb ui-avatar">
							<span	 style="background-image:url(http://icase.tencent.com/vlabs/img/?100*100)"></span>
						</div>
						<div class="ui-list-info ui-border-t">飞翔的企鹅</div>
					</li>
				</ul>
			</li>
			<!-- list1 end -->
			<!-- list2 start -->	
			<li class="ui-select-user-item">
				<h3 class="ui-userselect-top ui-border-b"><i class="arrow"></i>鹅厂工友们</h3>
				<ul class="ui-list ui-border-b">
					<li>
						<div class="ui-list-thumb ui-avatar">
							<span style="background-image:url(http://icase.tencent.com/vlabs/img/?100*100)"></span>
						</div>
						<div class="ui-list-info ui-border-t">飞翔的企鹅</div>
					</li>
					<li>
						<div class="ui-list-thumb ui-avatar">
							<span style="background-image:url(http://icase.tencent.com/vlabs/img/?100*100)"></span>
						</div>
						<div class="ui-list-info ui-border-t">飞翔的企鹅</div>
					</li>
				</ul>
			</li>
			<!-- list2 end -->	
		</ul>
		
	</div>
</body>
</html>
````

你会看到一个[好友选择的页面](http://frozenui.github.io/test/ui-select-user.html)，引用了[http://i.gtimg.cn/vipstyle/frozenui/1.0.0/css/basic.css?_bid=256](http://i.gtimg.cn/vipstyle/frozenui/1.0.0/css/basic.css?_bid=256)，这是打包了除了vip图标的基础css文件，使用手Q离线包需要加上bid的参数。

如果要使用 [`ui-icon-viplevel`](http://frozenui.github.io/docs/ui/ui-icon-viplevel) 和[`ui-icon-qqlevel`](http://frozenui.github.io/docs/ui/ui-icon-qqlevel)则需另外引用[http://i.gtimg.cn/vipstyle/frozenui/1.0.0/css/vip.css](http://i.gtimg.cn/vipstyle/frozenui/1.0.0/css/vip.css) ,你也可以选择将vip.css打包到你页面的css中。

还有一种引用方式，非手Q的页面可以引用[http://i.gtimg.cn/vipstyle/frozenui/1.0.0/css/global.css](http://i.gtimg.cn/vipstyle/frozenui/1.0.0/css/global.css) 文件，
这个css打包了所有模块。

具体模块的代码可以访问[http://frozenui.github.io/baseui/](http://frozenui.github.io/baseui/)


## 引用和下载


#### 1. 可以直接使用上面的 css 文件，这里提供一个未压缩的版本。

   [http://i.gtimg.cn/vipstyle/frozenui/1.0.0/css-debug/basic.css](http://i.gtimg.cn/vipstyle/frozenui/1.0.0/css-debug/basic.css)

####2.访问我们的github仓库
 [https://github.com/frozenui/baseui](https://github.com/frozenui/baseui)，自行 clone 到本地。


####3. 也可以利用 cdn 和 combo 服务，因为手Q有离线包不建议这样使用。

 ```html
 
    <link media="all" href="http://i.gtimg.cn/c/=/vipstyle/frozenui/1.0.0/css/base/reset.css,/vipstyle/frozenui/1.0.0/css/base/atom.css,/vipstyle/frozenui/1.0.0/css/basic/ui-notice.css" rel="stylesheet">
    
 ```


