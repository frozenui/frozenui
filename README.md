
###Frozen UI

Frozen UI是一个开源的简单易用，轻量快捷的移动端UI框架。基于手Q样式规范，选取最常用的组件，做成公用离线包减少请求，升级方式友好，文档完善，目前全面应用在腾讯手Q增值业务中。

css组件包括按钮，列表，表单，通知，提示条，弹出框，选项卡，等级图标，角标，红点，1px解决方案等。

css使用模块化的样式命名和组织规范，使用sass编写css。

js访问 [https://github.com/frozenui/frozenjs](https://github.com/frozenui/frozenjs)

demo访问 [http://frozenui.github.io/demo/](http://frozenui.github.io/demo/)

###支持

android 2.3 +，ios 4.0 + 。

###使用

查看http://frozenui.github.io/

下载地址 http://frozenui.github.io/frozenui.zip

### grunt

[参考](https://github.com/QQVIPTeam/team/issues/5)

首先使用`npm install`下载所有需要的grunt插件，（腾讯内部网络需要特殊配置以及设置代理），推荐使用淘宝的代理
`registry = http://registry.npm.taobao.org `

使用`grunt`会编译代码，然后使用`nico server`开启nico测试，访问[127.0.0.1:8000](127.0.0.1:8000)调试页面

使用`grunt commit --log=logtest` 命令会做好打包压缩部署ftp等操作

也可以使用`grunt`命令打包压缩部署ftp，然后使用nico命令生成站点和git命令提交，需要配置一个.ftppass文件：
{
  "key": {
    "username": "",
    "password": ""
  }
}

版本目录下的css ，css-debug和img目录需要发布到线上，_css-debug_是未压缩的版本，为调试使用

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

查看[http://frozenui.github.io/frozenui/history.html](http://frozenui.github.io/frozenui/history.html)


###License

 MIT License
