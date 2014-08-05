# 工具

=======
- order: 7
- category: alice

---

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



## Nico - 调试&文档

Nico 是一个 JavaScript 的静态文档生成工具，在 CMD 生态圈中被用于文档构建和 Demo 调试。它在 Alice 中的使用方式和 JS 下如出一辙。
你如果对 Arale 那套东西熟悉的话很容易就能上手。

这是目前前端文档和调试界最出色且简单的工具，没有之一。用了它，你会爱上写文档。

[nico 主页](http://lab.lepture.com/nico/)

在 Arale & Alice 整体方案中我们封装了 nico 作为一个 spm 的插件，安装 [spm-doc](https://github.com/spmjs/spm-doc) 就后可以调用各种文档调试命令了。


