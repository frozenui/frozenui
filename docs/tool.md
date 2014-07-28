# 工具

- order: 8
- category: alice

---

> 城里的女人就是白啊! *「 让子弹飞 」2010*

Alice 作为 Arale 的一部分，离不开 Arale 体系下的 spm 和 nico 两大工具，
使用方式也大同小异。另外 Alice 还产出和使用了一些工具来帮助开发。

Alice 目前源文件大多是纯 CSS 代码，但我们不排斥二次编译的 CSS 语言（比如 stylus、less、sass 等），
目前 [alice.select](http://aliceui.org/select) 和 [alice.nav](http://aliceui.org/nav) 这两个模块的源码就是用 stylus 写的。
我们希望有更多业界优秀的工具和语言参与到 Alice 的样式世界中来。

---

## Spm - 包管理

Spm 是 CMD 社区的构建和包管理工具，在 1.6 及以前的版本都是为 JavaScript 服务的。
我们针对样式模块的特点研究出了一套在 CMD 生态圈中如何管理和使用样式的方案，
并在版本 1.7+ 中实现了很多重要功能。相关 issue 可以看下 [#645](https://github.com/spmjs/spm/issues/645)。
您会对 spm 对样式的支持有更多的了解。

目前 [spm2](http://github.com/spmjs/spm2) 已经发布，Alice 已经全面建构在 spm 2.0 版本之上，相关信息请阅读 spm2 的[文档](http://docs.spmjs.org/)。

```
$ spm init        // 初始化模块
$ spm install     // 安装一个已有模块到本地
$ spm doc watch   // 启动本地服务调试文档
$ spm doc publish // 发布文档到源中
$ spm build       // 完成开发，构建模块
$ spm publish     // 将模块发布到源上
$ spm deploy      // 部署到开发机器上
```

常用的命令基本就是这几个，其中[spm build](https://github.com/spmjs/spm-build)、 [spm init](https://github.com/spmjs/spm-init) 和 [spm deploy](https://github.com/spmjs/spm-deploy) 作为 spm 的插件需要额外安装。
更多 spm 的使用方式，请参考前面的开发教程或 Arale 的相关文档。

> 注意：支付宝前端请安装支付宝 spm 套装 [apm](https://github.com/spmjs/apm)，会对开发有更大的定制性帮助。


## Nico - 调试&文档

Nico 是一个 JavaScript 的静态文档生成工具，在 CMD 生态圈中被用于文档构建和 Demo 调试。它在 Alice 中的使用方式和 JS 下如出一辙。
你如果对 Arale 那套东西熟悉的话很容易就能上手。

这是目前前端文档和调试界最出色且简单的工具，没有之一。用了它，你会爱上写文档。

[nico 主页](http://lab.lepture.com/nico/)

在 Arale & Alice 整体方案中我们封装了 nico 作为一个 spm 的插件，安装 [spm-doc](https://github.com/spmjs/spm-doc) 就后可以调用各种文档调试命令了。

## Peaches - 雪碧图

虽然 Alice 中不推荐在通用模块中使用图片背景，但是在业务线的开发中不能避免的会碰到需要图片才能实现的需求。
痛苦的合成雪碧图技术就成了前端必不可少的技能之一，所以我们有了 Peaches 这样的工具来帮助我们。

Peaches 是支付宝前端工程师 @蔡伦 同学开发的，是一个 CSS 雪碧图编译工具。

Peaches 通过分析 CSS 样式规则，提取背景图片，自动合并成雪碧图，
并自动更新背景定位。免去了手动合并图片和定位的麻烦，而且也大大提升后续修改样式的效率。

更多功能请访问 [Peaches](http://peaches.io/) 主页：

[![](https://raw.github.com/slowhost/upload/1362839444253/peaches.png)](http://peaches.io/)

安装 [apm](https://github.com/spmjs/apm) 后，`spm build` 将支持自动合并雪碧图，只需在 `package.json` 中标明即可。

```js
  "spm": {
    "peaches": true
  }
```

使用范例：[afc163/peaches-example](https://github.com/afc163/peaches-example)

## 样式预编译

Alice 默认支持 stylus 和 less 文件的预编译，
使用了 [grunt-contrib-stylus](https://github.com/gruntjs/grunt-contrib-stylus) 和 [grunt-contrib-less](https://github.com/gruntjs/grunt-contrib-less)。
[alice/select](https://github.com/aliceui/select) 模块使用了 stylus 进行开发。

安装 `apm` 后只需执行 `spm build`，我们会帮你编译 styl 和 less 文件，就这么简单。

[less 主页](http://www.lesscss.net/)

[stylus 主页](http://learnboost.github.com/stylus/)

只有在 package.json 里的 `spm.output` 里指定的 `.styl` 和 `.less` 文件（一般写为同名的 `.css` 文件）才会被编译。

## Stylib - 样式库搭建工具

Stylib 是快速构建 [这样](http://aliceui.org/stylib) 的样式库的工具，
在 [<构建团队的样式库>](/docs/build.html#构建团队的样式库) 一文中提到过，具体使用方式参见此文就好。

支付宝的各业务线有搭建自己的样式库需求的，欢迎使用本工具和提出建议。
