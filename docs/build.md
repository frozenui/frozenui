# 构建模块和样式库

- order: 6
- category: alice

---

> More power comes more responsibility. *「 Spider Man 」2012*

我相信，只是复制几个 Html 结构一定不是你的追求，Alice 可以让你做得更多。本页略长，请坐稳。

---

## 工具准备

本文默认在 Linux\Unix 环境下运行，在开始之前，我们先需要安装几个重要的工具。
若对这些工具的作用不了解，可以先阅读 [工具](/docs/tool.html) 。

支付宝的前端们可以跳过`[工具准备]`这部分，只须安装一个套件集合就能获取所有工具。
（外网的同学不推荐安装 `apm`，套件会默认定制一些支付宝内部的配置，比如源地址 `yuan.alipay.im`）

```
$ npm install apm -g
```

推荐已经安装过 apm 的同学也跑一下，更新到最新的版本。

安装问题参考 apm 的 [文档](https://github.com/spmjs/apm/)。
遇到 `sudo` 的问题请参考[这里](http://aralejs.org/docs/installation.html#%E5%8E%BB%E9%99%A4-sudo)。

### 安装 spm

```
$ npm install spm@2.x -g
```

安装 spm-build、spm-init、spm-deploy、spm-doc 等插件。

```
$ npm install spm-build -g
$ npm install spm-init -g
$ npm install spm-deploy -g
$ npm install spm-doc -g
```

## 开发一个样式模块

我们的页面中总是存在的各式各样的模块化的 DOM 结构，
都可以依据其复用度来把其中一部分代码提炼成样式模块。

### 初始化模块

现在我们要开发一个 box 区块模块。首先建立一个文件夹，并使用 `spm init` 命令进行初始化。

```
$ mkdir box
$ cd box
$ spm init
```

```
Please answer the following:
[?] Project name (box)
[?] your CMD family (alice)
[?] Version (1.0.0)
[?] Description (The best jQuery plugin ever.) The box module.
[?] Project git repository (git://github.com/afc163/box.git)
[?] Project homepage (https://github.com/afc163/box)
[?] Project issues tracker (https://github.com/afc163/box/issues)
[?] Licenses (MIT)
[?] Do you need to make any changes to the above before continuing? (y/N)
```

这时程序会让你输入相关的信息，
填写 family 为 alice（Alice 通用模块） 或 alipay-css（支付宝通用业务模块）或其他，
name 为 box 后，就会生成一个 alice 模块的初始目录结构如下。

```
src/
README.md
HISTORY.md
package.json
```

其中 `src` 目录存放我们的样式源文件，`HISTORY.md` 用于版本的升级记录，
`README.md` 是用来写文档和 DEMO 的地方，`package.json` 则存放模块的基本信息。
我们可以在 `package.json` 中的 spm 字段中的 alias 填写所需的依赖的别名。
这个 box 模块不需要依赖所以不需要填写。

### 写文档和设计 Html 结构

我们先打开 README.md 进行编辑。

    # box

    ---

    带边框和标题的标准区块。

    ---

    ## 演示文档

    <link type="text/css" rel="stylesheet" media="screen" href="src/box.css">

    ### 默认用法

    ````html
    <div class="ui-box">
        <div class="ui-box-head">
            <div class="ui-box-head-border">
                <h3 class="ui-box-head-title">区块标题</h3>
            </div>
        </div>
        <div class="ui-box-container"></div>
    </div>
    ````
可以看到我们在上面写了基本的模块描述，并引入了样式源文件，在最下面设计了 box 模块的 Html 结构。
这和 JS 模块的开发过程是类似的，先设计文档和接口再进行开发，而对于样式模块来说，Html 结构就是样式的接口。

像上面使用四个 ```` 符号来包裹代码是 [nico](http://lab.lepture.com/nico/) 的特性，这样可以把代码片段转换成实际的 DOM 结构，
非常方便调试和文档生成。

### 编码和调试

接下来我们打开 src/box.css 进行编辑，现在就是熟悉的样式编码阶段了。
在这个阶段，我们可以到项目目录运行 `spm doc watch` 来打开 spm doc 的调试功能，
程序启动一个 livereload 服务监听生成的文档页面，我们可以用浏览器打开 http://127.0.0.1:8000 访问文档页面并进行调试。
你会看到类似下图的页面。

![](https://i.alipayobjects.com/e/201303/2Ml1vh9J08.png)

### 构建和发布

开发测试完毕后，我们就可以通过一下目录构建出标准的 Alice 模块文件了。

```
$ spm build
```

这个命令会生成一个 dist 目录，里面存放我们构建出来的样式文件。它会读取 package.json 中 spm 字段下的 output 
字段来输出用户指定的文件。([output 规则](http://docs.spmjs.org/en/package#spm-output))

```
$ spm publish
```

再通过 publish 命令可以把样式模块上传到源中，这样其他模块就可以依赖这个模块了。


### 源码托管和文档部署

最后，建议你将这个目录提交到 github 或 gitlab 中，统一管理你的样式模块。一个版本开发构建完成后，用版本号来打一个 [tag](https://github.com/aliceui/button/tree/1.1.0) 。
还可以利用 [源服务器](https://spmjs.org) 来部署模块的文档页面。

比如要把这个模块的静态文档托管到 spmjs.org 上，开发完毕后然后在模块根目录运行：

```
$ spm doc publish
```

这样可以发布页面到对应的源服务中，默认的地址为 http://{{family}}.spmjs.org/{{name}}。
就可以访问 http://alice.spmjs.org/box 来访问对应的文档页了。

> 注意：要使用 spmjs.org 的文档服务，你需要到网站上注册你自己的用户名作为项目的 `family`。

如果你是`支付宝`的前端，建议在 http://gitlab.alibaba-inc.com 平台建立一个 git 项目用来管理源码。

支付宝的默认源服务为 `http://yuan.alipay.im/`，你一般不需要配置。默认的文档访问地址是 `http://arale.alipay.im/{{family}}/{{name}}` 。

> 注意：spm publish 和 spm doc publish 命令将会发布模块和文档到默认的源，你可以在 `~/.spm/spmrc` 文件中查看配置的默认源是什么。


## 开发某页面的样式

这里你将会知道如何依赖和打包 alice 模块。

假设我们现在收到了一个 [我的支付宝](https://my.alipay.com) 页面的开发需求，
拿到 psd 稿后我们发现这个页面上有很多的 alice 通用模块，同时也有很多的个性化的样式需求。

这时会需要一个我的支付宝的样式模块，命名为 myalipay ，操作步骤和上面的 box 模块类似。
在 Alice 中，一切样式皆模块，所以这个 myalipay 其实和上面的 box 没有本质区别，
只不过它是直接用在页面上的。

> 注意在支付宝内部，family 一般填写对应的`{{系统名}}`，比如 `memberprod`。

生成目录后，我们打开 myalipay/package.json 文件，编辑其中的 spm.alias 字段。假设我们需要
用到 alice.box、alice.nav、alice.button 三个模块。

```js
{
  "name": "myalipay",
  "version": "1.0.0",
  "family": "myalipay",
  ...
  "spm": {
    "alias": {
      "box": "alice/box/1.0.0/box.css",
      "button": "alice/button/1.0.0/button.css",
      "nav": "alice/nav/1.0.0/nav.css"
    },
    output: ["myalipay.css"]
  }
}
```

其中 alias 字段指明了依赖的模块的别名，output 字段指明了需要 src 目录下打包的目标文件，
然后打开 src/myalipay.css ，在文件前面写入

```css
@import url('box');
@import url('button');
@import url('nav');
```

通过这种类似于 Arale 中 `require('')` 的方式，引入了这三个模块。
在调试页面，文档生成工具会自动把所需依赖的外部样式模块引入，比如 https://assets.spmjs.org/alice/button/1.0.0/button.css，
默认的静态文件地址是 `https://assets.spmjs.org`，而在支付宝内部，需要引用的是内网的静态文件源地址：`https://yuan.alipay.im/assets/`，
此时你需要在 package.json 中表明:

```
"keywords": ["alipay"]
```

接下来可以在 src/myalipay.css 的后面继续编写个性化的样式代码。

当然可以引入内部的模块，比如我们在 src 下建一个 user.css 文件，专门用来写和用户有关的样式。
在 myalipay.css 中可以这样引入：

```css
@import url('box');
@import url('button');
@import url('nav');

@import url('./user.css');  /* 引入内部文件 */
```

最后，和上面一样，用 `spm build` 命令打包出文件，你会发现在 dist 目录下多了
两个文件 myalipay.css 和 myalipay-debug.css ，包含了 box、button、nav、user.css 和 myalipay.css 自身的所有代码。
最后把 dist 下的文件部署到线上对应目录就可以了。在支付宝，我们是部署到 `https://a.alipayobjects.com/{{family}}/{{name}}/{{version}}/{{file}}.css` 这样的路径上的。


## 构建团队的样式库

当你构建出了一批样式模块后，你可能需要一个统一的地方展示和管理这些模块（类似这个[页面](http://aliceui.org/stylib/)）。
一个维护简单使用方便的样式库对于个人开发者、团队、业务线都有很大的帮助。

![](https://i.alipayobjects.com/e/201305/GiSxsk3Jt.png)

Alice 的通用样式库是基于支付宝视觉规范的一套模块精选集，数量和质量都会严格控制。
更好的实践是在各小组各产品线参照通用样式库建立自己的样式精选集。（可以避免制造出鱼龙混杂的模块池而导致的无法查找模块的问题。）

Alice 提供了一种简单的方式帮助你在 `spmjs.org` 或 `支付宝内部源` 上搭建自己的样式库。在搭建你的样式库前，请先按照上面的做法构建好一批样式库中需要的 Alice 模块。
接下来搭建的样式库会帮助你集成这些模块。

> 注意，下面还有个支付宝前端专用的搭建教程。

```
$ curl https://raw.github.com/aliceui/stylib/master/bootstrap.sh | sh
```

命令运行后会在当前目录建立一个样式库文件夹 `stylib`，先修改 package.json 中的 family 为你注册维护的。（比如 alice、tong、app 等，否则你将没有权限部署文档）
然后在 package.json 的 spm.alias 字段中写上你要在样式库显示的样式模块。比如：

```js
"spm": {
  alias: {
    "box": "alice/box/1.0.0/box.css",
    "button": "alice/button/1.0.0/button.css",
    "nav": "alice/nav/1.0.0/nav.css"
  }
}
```


然后运行下面的命令就可以将样式库部署到 spmjs.org 提供静态文档托管服务上。
具体的地址是 `https://{{package.json中的family}}/spmjs.org/docs//{{package.json中的name}}` 。

```
$ spm doc publish
```

这个样式库页面会读取 alias 中配置的各模块的文档内容到样式库中，读取的各文档地址是：

```
http(s)://样式库根路径/模块名
```

如果样式库部署到 http://alice.spmjs.org/stylib 的，那么此页面会读取
alice.spmjs.org/box、alice.spmjs.org/button 和 alice.spmjs.org/nav 这三个页面。（请确保这三个页面有内容！）

最后建议将这个库部署到对应的 git 托管环境下，以便后续管理修改。


### 支付宝前端请按以下步骤操作：

```
$ curl https://raw.github.com/aliceui/stylib/alipay/bootstrap.sh | sh
```

命令运行后会在当前目录建立一个样式库文件夹 `stylib`，首先你需要修改 package.json 里面的 family 为自己的 family（比如 app）。

在 package.json 的 spm.alias 字段中写上你要在样式库显示的样式模块。比如：

```js
"keywords": ["alipay"],
"spm": {
  "alias": {
    "box": "app/box/1.0.0/box.css",
    "button": "app/button/1.0.0/button.css",
    "nav": "app/nav/1.0.0/nav.css"
  }
}
```

需要引用内网的静态文件源地址：https://yuan.alipay.im/assets/ ，加上 `keywords` 表明这点即可。

然后运行下面的命令就可以将样式库部署到基础技术组提供的 `yuan.alipay.im` 静态站点服务上。
具体的地址是 `http://arale.alipay.im/{{family}}/stylib` 。比如`http://arale.alipay.im/app/stylib`。

```
$ spm doc publish
```

这个样式库页面会读取 alias 中配置的各模块的文档内容到样式库中，读取的各文档地址是：

```
http://arale.alipay.im/模块family/模块名
```

比如你建立的 Stylib 是部署到 http://arale.alipay.im/app/stylib 的，那么 Stylib 页面会用 Ajax 的方式去读取
arale.alipay.im/app/box、arale.alipay.im/app/button 和 arale.alipay.im/app/nav 这三个页面并取到
对应的示例展示在 Stylib 的页面上。

这样你就拥有了一个样式库地址为 [arale.alipay.im/app/stylib](http://arale.alipay.im/app/stylib) 的业务线样式库。
你可以进一步修改这个仓库中的样式和文档来，然后运行 `spm doc publish` 就能不断优化更新它。

最后建议将这个库部署到对应的 git 托管环境（如 [gitlab](http://gitlab.alibaba-inc.com)）下，以便后续管理修改。

### 注意事项

> 注意1：因为是 Ajax 的方式读取各模块页面，
所以请保证模块文档地址可访问，并且样式库和模块文档是同域的。

> 注意2：Stylib 对各子模块的页面的标准有要求，请严格按照 spm init 后的模板来写你每个样式模块的 Readme.md。

> 注意3，若无法上传文档，试试配置下内部的 spm 源地址。`spm config source.alipay.url http://yuan.alipay.im`

有任何问题，请发 [issue](https://github.com/aliceui/aliceui.org/issues/new) 给我们。
