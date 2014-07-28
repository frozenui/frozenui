# 规范和最佳实践

- order: 7
- category: alice

---

> When other men are limited by of laws, remember, Everything is permitted. 
*「 Assassin's Creed: Brotherhood 」*

入乡随俗，有一些规则是必须要遵守的，有一些则是经验总结，欢迎拍砖。
这页文档将介绍使用 Alice 开发样式时需要遵守的一些规则，统一可行的规范能保证团队产出优秀的代码。

---

## 模块组织规范

Alice 的样式模块组织方式追求扁平化的方式，分为三个层级：

1. 基础框架（reset + iconfont + 栅格）

2. 通用模块（符合 Alice 规范的样式模块）

3. 页面样式（继承通用模块）

Alice 推荐采用上述的层次来组织你的样式文件，在基础框架的基础上开发一定数量的通用模块，
在页面样式模块中继承基础框架和通用模块，并进一步开发。

## 模块化命名规范

Alice 的命名规范是 [@小鱼](http://sofish.de/) 提出的用于书写模块化样式的一套类命名规范，目前已经广泛应用在支付宝各页面，更多信息可以查看 [http://www.slideshare.net/sofish/css-8943211](http://www.slideshare.net/sofish/css-8943211) （需翻墙）。

### 什么是模块化的样式

Alice 对于模块化样式的理解是任何模块在页面上都应该像一个盒模型，不和页面的其他元素互相影响。
完美的 Alice 模块应该是一个“口”字型结构。比如 box 模块：

![](https://i.alipayobjects.com/e/201303/2OcipsuaOK.png)

ui-box 模块能够嵌到页面上任何一个位置，box 内部也能够嵌入别的模块（如图中的 ui-list 模块），它们之间不会互相影响。

### 怎样才能写出模块化的样式

一种简单的方式是使用 Alice 的类命名规范，当团队中都能采用这种方式书写样式，就能很好地避免样式冲突。
在模块化和命名上，以一个 Tab 模块为例，分解如下：

![](https://i.alipayobjects.com/e/201303/2OclGkyShZ.jpg)

值得注意的是：

- 模块名是必选的。

    名字要求是表意的，一眼就基本能看出模块是做什么的。

- 模块内部的类名继承于上层的名称。

    比如：

    ```html
    <div class="ui-box">
       <h3 class="ui-box-title"></h3>
       <p class="ui-box-conent"></p>
    </div>
    ```

    不要这样写，很容易造成命名上的冲突。

    ```html
    <div class="ui-box">
       <h3 class="title"></h3>
       <p class="conent"></p>
    </div>
    ```


- 在模块 DOM 结构的最外一层添加状态，而非给每一个内容添加状态。除非内容有独立的状态。

    比如，我们可以这样写：

    ```html
    <div class="ui-box ui-box-hover">
       <h3 class="ui-box-title"></h3>    
       <p class="ui-box-content"></p>
    </div>
    ```

    但不要这样写：

    ```html
    <div class="ui-new">
       <h3 class="ui-box-title ui-box-title-hover"></h3>
       <p class="ui-box-content ui-box-content-hover"></p>
    </div>
    ```


- 充分考虑标签的语义化

    语义化是什么？什么样的写法才是正确的。这里给一个建议，把你将要构建的页面当成一本书。
    是段落的，你就用 P(aragraph)；是标题的，就用 H(eader)；是引用的，就用 Blockquote。
    而不是简单的，块状的东西由块状元素包含，行内的元素用行内的标签包含。
    这里有点要求就是， 去深入了解每个 HTML 标签的用法。

    关于 HTML 的语义化，可以参考：[这样去写你的 HTML](http://sofish.de/1688) 。


### Alice 类命名规范

![](https://i.alipayobjects.com/e/201303/2OchzepKA0.png)

- 模块名

    尽量让人看到名字就能知道是什么模块，比如 ui-tab， ui-nav 这样的命名。（反例：`ui-shit`）
    用 HTML ENTRY 来引用，不要写空标签，应使用 HTML ENTRY 来替代，以达到语义化的要求。
    HTML ENTRY 请参考这个文档：https://docs.google.com/Doc?docid=0AWiI12yCmwaoZGNiemJqOGpfMTVmaHZtOWNkeg
    
- 模块整体状态 = 模块名 + 状态

    `常用状态`有：hover, current, selected, disabled, focus, blur, checked, success, error 等。通常你的命名应该看起来像 .ui-name-hover, .ui-name-error 这样。
    
- 子模块 = 模块名 + 子模块名

    常用模块名有：cnt(content)，hd(header)，text(txt)，img(images/pic)，title，item，cell 等，
    只要词义表达了组件要实现的功能或者要表现出来的的外观就可以了。
    
- 子模块状态 = 模块名 + 子模块名 + 状态

    参照常用状态。

命名注意：
    
- 模块嵌套：大模块可有子模块命名。

    拿支付宝某项目中的的 .ui-nav 为例，如果有多级，可以这样命名：

    ui-nav > ui-subnav(ui-nav的子类) > ui-list(嵌套进去的其他模块)

    ```html
    <ul class="ui-nav">
        <li class="ui-nav-item">
            <a href="#">nav Triggle Link</a>
            <ul class="ui-subnav">
                <li class="ui-subnav-item">
                    <a href="#">subNav Triggle Link</a>
                        <ul class="ui-list">
    ```

- 统一命名风格：

    比如你比较喜欢 ui-tip-container ，另外的一个相同作用的地方，就不要写 ui-message-cnt 了，
    用 `ui-tip-container ui-message-container` 会是更好的选择。

### 命名规范的最后

说了这么多，其实简单就是一句话，用 `-` 来做命名空间上的区隔，最小化两个模块之间的命名冲突。

这种模块化的命名方式会很好地避免样式之间的冲突，特别推荐在团队中使用，
可以参考 [box](http://aliceui.org/box/)、[nav](http://aliceui.org/nav/) 这些按照 Alice 命名规范实现的通用模块。

在 Alice 中，第一个 `ui-` 是作为通用模块的标识，你可以选取其他前缀来分类你的模块。

> 我们一共占用了两个前缀 `ui-`、`fn-`，各业务线可以选取自己的前缀。

## CSS 编码规范

直接参考 Google 的规范吧，懒得写了。

[http://google-styleguide.googlecode.com/svn/trunk/htmlcssguide.xml](http://google-styleguide.googlecode.com/svn/trunk/htmlcssguide.xml)

## 写样式的最佳实践

1. 使用 iconfont 代替雪碧图。

2. 坚持渐进增强策略，大胆使用新的 CSS3 技术，对低级浏览器保持基本的视觉支持。

3. 设计 Html 结构是开发样式模块的核心工作，不要为了视觉效果迁就 Html 结构。

4. 使用 fn-clear 来清除浮动，慎用 `overflow: hidden;` 。

5. 样式模块不要依赖 reset.css ，要有对自身的 reset 代码。

6. 不要去掉虚线框，为可用性考虑。

7. 放弃 IE6 下的透明 png 修补方案。

8. 欢迎补充。


## 常见兼容解决方案

> 合适的、不使用 JS 的、尽量不使用 expression 的、无副作用的方案我们都会放在这里。

1. inline-block

    ```css
    display: inline-block;
    *display: inline;
    *zoom: 1;
    ```

2. 最小高度 min-height

    ```css
    min-height: 200px;
    _height: 200px; / hack for ie6 */
    ```

3. 顺时针翻转 90 度。

    ```css
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1);
    -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";
    transform: rotate(90deg);
    ```

4. 欢迎补充 ...
