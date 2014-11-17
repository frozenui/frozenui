### sass

写css代码用sass，win系统下需安装ruby

### nico 

需要安装[nico](http://lab.lepture.com/nico/zh/)生成文档以及调试，`nico build `命令生成文档，`nico server `命令调试


### grunt

[参考](https://github.com/QQVIPTeam/team/issues/5)

使用`grunt docs`会编译代码以及开启nico测试，访问[127.0.0.1:8000](127.0.0.1:8000)调试页面

使用`grunt commit --log=logtest` 命令会做好打包压缩部署ftp等操作, 以及生成_site站点,git 提交

也可以使用`grunt`命令打包压缩部署ftp，然后使用nico命令生成站点和git命令提交

css ，css-debug和img目录是需要发布到线上，_css-debug_是未压缩的版本，为调试使用

i.gtimg.cn.zip需要发布到离线包


### git

使用nico生成好的文档会在_site目录，提交当前目录到https://github.com/frozenui/baseui.git

_site目录下的内容提交到gh-pages分支，参考https://github.com/frozenui/baseui/issues/

页面会显示在frozen的css组件菜单项中http://frozenui.github.io/baseui/


### 版本管理

分为小版本和大版本，目前grunt的功能还不完善，只支持升小版本，后续会优化

小版本控制发布频率在一月一次，不新增离线包，仅在当前的离线包中增加一个新版本的文件夹

大版本则需新增离线包，修改bid，需要打包一个全新的文件夹。

### 维护

原则是有问题提issue，代码修改提pr，由faycheng合并以及内部发布

下载地址 http://frozenui.github.io/baseui/static/frozenui.zip
