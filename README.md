
###Frozen UI

Frozen UI是一个开源的简单易用，轻量快捷的移动端UI框架。基于手Q样式规范，选取最常用的组件，做成公用离线包减少请求，升级方式友好，文档完善，目前全面应用在腾讯手Q增值业务中。

css组件包括按钮，列表，表单，通知，提示条，弹出框，选项卡，等级图标，角标，红点，1px解决方案等。

css使用模块化的样式命名和组织规范，使用sass编写css。

js访问https://github.com/frozenui/frozenjs

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

分为小版本和大版本，目前grunt的功能还不完善，只支持升小版本，后续会优化

小版本控制发布频率在一月一次，不新增离线包，仅在当前的离线包中增加一个新版本的文件夹

大版本则需新增离线包，修改bid，需要打包一个全新的文件夹。

### 维护

原则是有问题提issue，代码修改提pr，由faycheng合并以及内部发布

###版本修改记录

#### 1.0.0

发布新版本


#### 1.1.0

引用地址[http://i.gtimg.cn/vipstyle/frozenui/1.1.0/css/frozen.css?_bid=256](http://i.gtimg.cn/vipstyle/frozenui/1.1.0/css/frozen.css?_bid=256 )

1. 增加`ui-form`,`ui-checkbox`,`ui-radio`,`ui-switch`

2. 增加搜索框`ui-searchbox`

3. input的样式重置

4. `ui-list-text`的文字长度截断问题，加上p标签

5. 解决`ui-list`点击态问题

6. 解决`ui-btn`和`ui-reddot` 圆角bug

7. `ui-btn-group`修改背景

8. _dom修改_ 现有的`ui-tips`改为`ui-poptips`，dom结构简化，另外新增`ui-tips`，`ui-tooltips`

9. 删减`ui-icon`，非共用图标样式写在对应的组件里

10. _basic.css_ 改成 _frozen.css_，`ui-icon-tag`改成`ui-tag`，并和`ui-select-user`一起移到vip目录下，不再包含在_frozen.css_里


#### 1.2.0（1.1.1只发布了vip.css，废弃）


引用地址: 

[http://i.gtimg.cn/vipstyle/frozenui/1.2.0/css/frozen.css?_bid=306](http://i.gtimg.cn/vipstyle/frozenui/1.2.0/css/frozen.css?_bid=306 )

[http://i.gtimg.cn/vipstyle/frozenui/1.2.0/css/vip.css?_bid=306](http://i.gtimg.cn/vipstyle/frozenui/1.2.0/css/vip.css?_bid=306 )




1. 修改`ui-list`和`ui-form`的箭头图标

2. _dom修改_ 去掉`ui-select-user`, 增加`ui-selector`

3. 增加`ui-icon-qq`

4. selec标签重写

5. 修改`ui-avatar`[有些android2.3的机器不支持 border-radius %单位](https://github.com/frozenui/baseui/issues/9)的问题

6. 修改`ui-btn`的行高不一致的问题

7. 1px左右边框改用与上下边框同样的方法实现

8. _dom修改_ `ui-searchbox`改成`ui-searchbar` ,增加focus时控制内部元素隐藏和显示的代码，减少js需要的操作

9. _dom修改_ `ui-tab`内部增加`ui-tab-nav`，高度的bug修改

10. 修改`ui-form`关闭图标位置不对，另外箭头缺一个像素

11. 修改`ui-reddot`带白边的红点半径不对

12. _dom修改_ 增加平铺按钮组`ui-btn-group-tiled`,`ui-btn-bottom`改成`ui-btn-group-bottom`

13. 增加`ui-badge-corner`，以及`ui-list ui-badge`样式


14. `ui-list`增加列表按压态`ui-list-active`

15. 按钮颜色跟规范对齐

16. tips的图标位置细调


17. 图片使用相对路径，单个组件css发布时去掉basic和vip文件夹，与frozen.css同一目录

18. bid修改为_306_



