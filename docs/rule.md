#关于frozen

- order: 6
- category: alice

---

> When other men are limited by of laws, remember, Everything is permitted. 
*「 Assassin's Creed: Brotherhood 」*

入乡随俗，有一些规则是必须要遵守的，有一些则是经验总结，欢迎拍砖。
这页文档将介绍使用 Alice 开发样式时需要遵守的一些规则，统一可行的规范能保证团队产出优秀的代码。

---

##命名规范

class 名称中只能出现小写字符和破折号（dashe）（不是下划线，也不是驼峰命名法）。破折号应当用于相关 class 的命名（类似于命名空间）（例如，.btn 和 .btn-danger）。

避免过度任意的简写。.btn 代表 button，但是 .s 不能表达任何意思。

class 名称应当尽可能短，并且意义明确。

使用有意义的名称。使用有组织的或目的明确的名称，不要使用表现形式（presentational）的名称。

基于最近的父 class 或基本（base） class 作为新 class 的前缀。

使用 .js-* class 来标识行为（与样式相对），并且不要将这些 class 包含到 CSS 文件中。
模块内部的类名继承于上层的名称。

.ui-dialog-lg.disabled   

{命名空间}-{模块}-{实例}-{实例属性}.{状态}

常用状态有：hover, current, selected, disabled, focus, blur, checked, success, error 等。

.ui-dialog-cnt   (对应： 命名空间-模块-子模块)

常用模块名有：cnt(content)，hd(header)，bd(body)，ft(footer)，text(txt)，img(images/pic)，ico(icon)，title，item，cell 等， 只要词义表达了组件要实现的功能或者要表现出来的的外观就可以了。

##常用功能类

常用文本颜色 //todo: 黑色是默认颜色，是否根据功能命名

ui-border-top，ui-border-btm，ui-border-left，ui-border-right，ui-border-tb分别是上，下，左，右以及上下两条线的1px解决方案。

ui-center 垂直上下居中，需要重置高度

ui-round 圆角头像
//todo：现有各自头像大小

##如何使用

只需用spm doc watch生成站点和实时更新预览，生成的_site传到frozenui.github.io即可 

