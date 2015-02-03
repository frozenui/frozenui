# History

---

<style>
.content ol li {
	list-style-type: decimal;
	margin-left: 22px;
	line-height: 30px;
}
</style>

##版本管理

版本格式：主版本号.次版本号.修订号，版本号递增规则：

主版本号：整体改版

次版本号：功能性新增，bug修复

修订号：bug或新功能的调试版本，只作为开发版本，不做正式发布

当前版本在第一个使用的业务发布后不再修改，新增版本会新增一个离线包。

_业务上使用时升级版本需要通知到开发，以及是否有dom修改，会不会影响到js_

##1.0.0

发布新版本

#### 引用地址：

[http://i.gtimg.cn/vipstyle/frozenui/1.0.0/css/basic.css?_bid=256](http://i.gtimg.cn/vipstyle/frozenui/1.1.0/css/basic.css?_bid=256 )

##1.1.0

#### 引用地址：

[http://i.gtimg.cn/vipstyle/frozenui/1.1.0/css/frozen.css?_bid=256](http://i.gtimg.cn/vipstyle/frozenui/1.1.0/css/frozen.css?_bid=256 )

[http://i.gtimg.cn/vipstyle/frozenui/1.1.0/css/vip.css?_bid=256](http://i.gtimg.cn/vipstyle/frozenui/1.1.0/css/vip.css?_bid=256 )

#### 修改内容

1. 增加`ui-form`,`ui-checkbox`,`ui-radio`,`ui-switch`

2. 增加搜索框`ui-searchbox`

3. input的样式重置

4. `ui-list-text`的文字长度截断问题，加上p标签

5. 解决`ui-list`点击态问题

6. 解决`ui-btn`和`ui-reddot` 圆角bug

7. `ui-btn-group`修改背景

8. 删减`ui-icon`，非共用图标样式写在对应的组件里

9. _dom修改_ 现有的`ui-tips`改为`ui-poptips`，dom结构简化，另外新增`ui-tips`，`ui-tooltips`

10. _basic.css_ 改成 _frozen.css_，`ui-icon-tag`改成`ui-tag`，并和`ui-select-user`一起移到vip目录下，不再包含在_frozen.css_里


## 1.2.0


#### 引用地址

[http://i.gtimg.cn/vipstyle/frozenui/1.2.0/css/frozen.css?_bid=306](http://i.gtimg.cn/vipstyle/frozenui/1.2.0/css/frozen.css?_bid=306 )

[http://i.gtimg.cn/vipstyle/frozenui/1.2.0/css/global.css?_bid=306](http://i.gtimg.cn/vipstyle/frozenui/1.2.0/css/global.css?_bid=306 )

[http://i.gtimg.cn/vipstyle/frozenui/1.2.0/css/vip.css?_bid=306](http://i.gtimg.cn/vipstyle/frozenui/1.2.0/css/vip.css?_bid=306 )

_1.2.0之后的版本的离线包中不再提供单独的vip.css_

#### 修改内容

1. 修改`ui-list`和`ui-form`的箭头图标

2. 增加`ui-icon-qq`

3. selec标签重写

4. 修改`ui-avatar`[有些android2.3的机器不支持 border-radius %单位](https://github.com/frozenui/baseui/issues/9)的问题

5. 修改`ui-btn`的行高不一致的问题

6. 1px左右边框改用与上下边框同样的方法实现

7. 修改`ui-form`关闭图标位置不对，另外箭头缺一个像素

8. 修改`ui-reddot`带白边的红点半径不对

9. 增加`ui-badge-corner`，以及`ui-list ui-badge`样式

10. 图片使用相对路径，单个组件css去掉basic和vip目录，与frozen.css同一目录

11. 按钮颜色跟规范对齐

12. tips的图标位置细调

13. bid修改为_306_，global.css也放到离线包里

14. _dom修改_ 去掉`ui-select-user`，增加`ui-selector`

15. _dom修改_ `ui-searchbox`改成`ui-searchbar` ，增加focus时控制内部元素隐藏和显示的代码，减少js需要的操作

16. _dom修改_ 原来的`ui-tab`替换成`ui-tab-nav`，外层再使用`ui-tab`，并增加`ui-tab-content`，高度的bug修改

	改为

	````
	<div class="ui-tab">
	    <ul class="ui-tab-nav ui-border-b">
	        <li class="current">热门推荐</li>
	        <li>全部表情</li>
	        <li>表情</li>
	    </ul>
	    <ul class="ui-tab-content" style="width:300%">
	        <li>内容</li>
	        <li></li>
	        <li></li>
	    </ul>
	</div>
	````

17. _dom修改_ `ui-btn-bottom`改成`ui-btn-group-bottom`，增加平铺按钮组`ui-btn-group-tiled`

##1.2.1

#### 引用地址

http://i.gtimg.cn/vipstyle/frozenui/1.2.1/css/frozen.css?_bid=306

http://i.gtimg.cn/vipstyle/frozenui/1.2.1/css/global.css?_bid=306

#### 修改内容

1. 修改`ui-tab`的样式，修复了两条线没贴在一起的问题
2. 修改`ui-slider`的样式，主要是圆点的样式，提供padding-top解决图片未加载时高度不定的解决方案
3. 修改`ui-list`中active时线在中间的问题，并_去掉文字截断_，增加普通图片链接列表
4. 增加`ui-nowrap`和`ui-nowrap-multi`辅助类控制文字截断
5. 修改`ui-badge`红点的大小
6. 增加`ui-badge-num`和`ui-badge-cornernum`数字提醒
7. 增加`ui-arrowlink`带箭头的链接辅助类
8. 增加`ui-grid-halve`两列和`ui-grid-trisect`三列图片布局，提供padding-top解决图片未加载时高度不定的解决方案
9. 增加`ui-btn-s`小按钮和`ui-btn-progress`百分比按钮
10. `ui-avatar`独立成单独css
11. 增加进度条`ui-progress`
12. 独立`ui-tooltips-vip`会员栏，放在vip目录
13. _dom修改_，增加`ui-btn-vip`，会员栏中的按钮，放在vip目录，会员栏的结构相应需要修改：

	````
	<div class="ui-tooltips ui-tooltips-vip">
	    <div class="ui-tooltips-cnt">
	        <i class="ui-icon-yearsvip"></i>
	        <span>超级会员专享酷炫个性名片！</span>
	        <button class="ui-btn ui-btn-primary">续费</button>
	    </div>
	</div>
	````
	
	改为
	
	````
	<div class="ui-tooltips-vip">
	    <div class="ui-tooltips-cnt">
	        <i class="ui-icon-yearsvip"></i>
	        <span>超级会员专享酷炫个性名片！</span>
	        <button class="ui-btn-vip">续费</button>
	    </div>
	</div>
	````

14. _dom修改_，修改铭牌`ui-tag`的选中态`ui-tag-selected`的位置，修改铭牌的结构使铭牌位置从文字右边改到图片右下角，例：

	````
	<li class="ui-tag-svip">
		<div class="ui-grid-halve-img">
		   <span style="background-image:url(http://placehold.sinaapp.com//?190*284)"></span>
		</div>
		<h4>高尔夫 <span>2.3M</span></h4>
	</li>
	````
	
	改为
	
	````
	<li>
		<div class="ui-grid-halve-img ui-tag-vip">
		   <span style="background-image:url(http://placehold.sinaapp.com//?190*284)"></span>
		</div>
		<h4>高尔夫 <span>2.3M</span></h4>
	</li>
	````

注意只换css不修改dom结构铭牌会有_错位_的问题

另增加星影`ui-tag-xy`,活动`ui-tag-act`,限免`ui-tag-limit`，限量`ui-tag-last`等铭牌。

PS：有按需打包到页面的需求可以使用combo：

````
<link media="all" href="http://i.gtimg.cn/c/=/vipstyle/frozenui/1.2.1/css/reset.css,/vipstyle/frozenui/1.2.1/css/ui-notice.css" rel="stylesheet">
````
