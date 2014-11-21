#关于frozenUI

---

<style>
.nico-insert-code{display:none}
</style>
##frozenUI是什么
<img src="../static/elsa.jpg">

frozenUI是我们团队根据最新的[手Q设计规范]()制作的移动端web框架，包括css基础样式和组件，javascript基础组件和一些动画效果库。

为了方便记忆和增添趣味性，我们为它取了动画片冰雪奇缘的英文名，并把Elsa女王作为我们的卡通代言人，相信大多数看过这部动画的人都会喜欢女王的形象吧。

css使用模块化的样式命名和组织规范，参考了前人的成果：支付宝团队的[alice](http://aliceui.org/)，[bootstrap](http://getbootstrap.com/)等，实现了最简的手Q web组件效果，并不断完善中。

兼容android 2.3 +，ios 4.0 + 。
	
使用`离线包`实现0k网络请求。

[css历史版本修改记录](http://frozenui.github.io/baseui/history.html)

[github主页](https://github.com/frozenui/frozenui)

[github组织](https://github.com/frozenui)

[css仓库](https://github.com/frozenui/baseui)

欢迎提 [issue](https://github.com/frozenui/frozenui/issues) 给我们帮助我们完善frozen。

##css规范

统一使用ui为前缀作为命名空间。


class 名称中只能出现小写字符和破折号（dashe）（不是下划线，也不是驼峰命名法）。破折号应当用于相关 class 的命名（类似于命名空间）（例如`.ui-btn` 和 `.ui-btn-danger`）。

避免过度任意的简写。`.btn` 代表 `button`，但是 `.b` 不能表达任何意思。

class 名称应当尽可能短，并且意义明确，不要使用表现形式（presentational）的名称。

基于最近的父 class 或基本（base） class 作为新 class 的前缀。

`.ui-btn-lg.disabled `

{命名空间}-{模块}-{属性}.{状态}

`.ui-dialog-cnt` 

{命名空间}-{模块}-{子模块}

描述属性的class应该基于当前的class

`.ui-form-item ui-form-item-link`

{命名空间}-{模块}-{属性}.{状态}

常用状态有：`hover`, `current`, `selected`, `disabled`, `focus`, `blur`, `checked`, `success`, `error`，`active` 等。


除了常用状态的class，不能直接使用其他不带前缀的class，如

````html
	<div class="ui-btn primary">确认</div>
````
应该写为

````html
	<div class="ui-btn ui-btn-primary">确认</div>
````
不强制所有class都必须带父class，简单的组件可以直接使用子class，如


````html
	<span class="ui-txt-highlight">ui-txt-highlight</span>
````
	
而不是

````html
	<span class="ui-txt ui-txt-highlight">ui-txt-highlight</span>
````

因为是在移动端使用，dom结构并不会太复杂，因此不建议过多使用class嵌套，可以直接使用标签名的直接使用标签名。
如建议使用

````html
	<ul class="ui-list">
		<li>1</li>
		<li>2</li>
		<li>3</li>
	</ul>
````
	
而不使用

````html
	<ul class="ui-list">
		<li class="ui-list-item">1</li>
		<li class="ui-list-item">2</li>
		<li class="ui-list-item">3</li>
	</ul>
````



| 约定的一些简写      |        | 
| ------------- |:-------------:|
| -s     | -small | 
|-lg  | -large | 
|-l| -left  | 
|-r|-right|
|-t|-top|
|-b|-bottom|


常用模块名有：`cnt(content)`，`hd(header)`，`bd(body)`，`ft(footer)`，`txt(text)`，`img(images/pic)`，`title`，`item`等， 只要词义表达了组件要实现的功能或者要表现出来的的外观就可以了。



##常用功能类

提供常用文本颜色，1px解决方案，不同尺寸的头像，红点和未读数通知等功能类。



