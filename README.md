
###Frozen UI

Frozen UI是一个开源的简单易用，轻量快捷的移动端UI框架。基于手Q样式规范，选取最常用的组件，做成公用离线包减少请求，升级方式友好，文档完善，目前全面应用在腾讯手Q增值业务中。

css组件包括按钮，列表，表单，通知，提示条，弹出框，选项卡，等级图标，角标，红点，1px解决方案等。

css使用模块化的样式命名和组织规范，使用sass编写css。
###支持

android 2.3 +，ios 4.0 + 。

###使用

查看http://frozenui.github.io/

下载地址 http://frozenui.github.io/baseui/static/frozenui.zip

### grunt

[参考](https://github.com/QQVIPTeam/team/issues/5)

使用`grunt docs`会编译代码以及开启nico测试，访问[127.0.0.1:8000](127.0.0.1:8000)调试页面

使用`grunt commit --log=logtest` 命令会做好打包压缩部署ftp等操作, 以及生成_site站点,git 提交

也可以使用`grunt`命令打包压缩部署ftp，然后使用nico命令生成站点和git命令提交

css ，css-debug和img目录是需要发布到线上，_css-debug_是未压缩的版本，为调试使用

i.gtimg.cn.zip需要发布到离线包


### 版本管理

版本格式：主版本号.次版本号.修订号，版本号递增规则：

主版本号：整体改版

次版本号：功能性新增，bug修复

修订号：bug或新功能的调试版本，只作为开发版本，不做正式发布

当前版本在第一个使用的业务发布后不再修改，新增版本会新增一个离线包。

_业务上使用时升级版本需要通知到开发，以及是否有dom修改，会不会影响到js_

### 维护

原则是有问题提issue，代码修改提pr，由faycheng合并以及内部发布

###版本修改记录

##1.0.0

发布新版本
引用地址：

[http://i.gtimg.cn/vipstyle/frozenui/1.0.0/css/basic.css?_bid=256](http://i.gtimg.cn/vipstyle/frozenui/1.1.0/css/basic.css?_bid=256 )

##1.1.0

引用地址：

[http://i.gtimg.cn/vipstyle/frozenui/1.1.0/css/frozen.css?_bid=256](http://i.gtimg.cn/vipstyle/frozenui/1.1.0/css/frozen.css?_bid=256 )

[http://i.gtimg.cn/vipstyle/frozenui/1.1.0/css/vip.css?_bid=256](http://i.gtimg.cn/vipstyle/frozenui/1.1.0/css/vip.css?_bid=256 )

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


引用地址: 

[http://i.gtimg.cn/vipstyle/frozenui/1.2.0/css/frozen.css?_bid=306](http://i.gtimg.cn/vipstyle/frozenui/1.2.0/css/frozen.css?_bid=306 )

[http://i.gtimg.cn/vipstyle/frozenui/1.2.0/css/global.css?_bid=306](http://i.gtimg.cn/vipstyle/frozenui/1.2.0/css/global.css?_bid=306 )

[http://i.gtimg.cn/vipstyle/frozenui/1.2.0/css/vip.css?_bid=306](http://i.gtimg.cn/vipstyle/frozenui/1.2.0/css/vip.css?_bid=306 )

_1.2.0之后的版本的离线包中不再提供单独的vip.css_

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

17. _dom修改_ `ui-btn-bottom`改成`ui-btn-group-bottom`，增加平铺按钮组`ui-btn-group-tiled`

