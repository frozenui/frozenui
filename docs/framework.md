# 基础框架

---

> Louis, I think this is the beginning of a beautiful friendship.
*「 Casablanca 」1942*

---

<link rel="stylesheet" href="http://assets.spmjs.org/alice/grid/1.0.0/grid.css" />
<link rel="stylesheet" href="http://assets.spmjs.org/alice/animate/1.0.0/animate.css" />

## Base 重设

base.css 是 Alice 的浏览器重设样式。

它扫除了浏览器默认样式的基本兼容性问题，像建筑的地基一样，让开发者在平地上放心的建造大楼。
Alice 的 base.css 是结合支付宝开发经验，借鉴 [normalize.css](http://necolas.github.com/normalize.css/) 等业界优秀模块，并加上一些常用 className 而产出的一套重设样式。

> [砸场子：No CSS Reset](http://snook.ca/archives/html_and_css/no_css_reset/)

> 实际上，Alice 也是 No CSS Reset 的拥趸，所有的通用模块都不依赖于 base.css 进行开发，它们会有自己的 reset 代码，这样它们在任何页面的表现都会 OK。
> 在 Alice 中，base.css 的更大作用是让第一线的页面开发者轻松些。

### 字体

`alice.base` 采用了 12 像素，1.5 的行高，并且兼容 Mac 和 Window 的字体配置，非常适合国内的网站样式。

```css
body,button,input,select,textarea {
    font:12px/1.5 tahoma,arial,"Hiragino Sans GB",\5b8b\4f53;
}
```

### 常用功能类

- `fn-clear` 清除浮动

- `fn-hide` 隐藏元素

- `fn-left` `fn-right` 左右浮动

- `fn-text-overflow` 文字单行溢出省略号

    <div class="fn-text-overflow" style="width:100px">文字很长很长很长</div>

- `fn-linear` 简单渐变

- `fn-linear-light` 浅色的简单渐变

- `fn-rmb` 金额样式 <span class="fn-rmb">￥23.67</span>

- `fn-webkit-adjust` 用于修复 webkit 下小于 10px 的中文字体

我们使用 `fn-` 前缀表示一些常用的工具类名，灵活使用这些类会大大提高样式开发效率，请点击 [演示页面](http://aliceui.org/base) 和 [代码](https://github.com/aliceui/base/blob/master/src/base.css) 查看详情。


## Rei - iconfont

Rei（读音为“丽”）是支付宝的 iconfont 集，是一种把图标放入自定义字体中，然后使用字体图标来替代普通图标的技术。同时，Rei 也是动漫女神。

![](https://i.alipayobjects.com/e/201303/2P2JVsHeCC.jpg)

字体图标具有良好的兼容性，矢量，规范，减少图片请求，适应性强等特点，大量先进的网站（包括 github 等）正在使用这种技术。
Alice 全面使用了 iconfont 技术，使得所有的通用样式模块都不会产生图片请求，并且也获得了良好的兼容性和通用性。

```html
<i class="iconfont" title="灯泡">&#x00E3;</i>
```

Rei 目前涵盖了网站常用各类图标约 70 多个，兼容包括 `ie6/7/8` 在内的各主流浏览器，你可以自由的在页面中使用它。

<style>
.iconset {
    padding: 15px;
    background: #FBFBFB;
    border: 1px solid #eee;
    border-radius: 4px;
}
.icon {
    display: inline-block;
    *display: inline;
    *zoom: 1;
    height: 22px;
    width: 156px;
    color: #888;
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 5px;
}
.icon .iconfont {
    margin-right: 10px;
    font-size: 18px;
    width: 20px;
    display: inline-block;
    *display: inline;
    *zoom: 1;
    position: relative;
    top: 2px;
}
</style>

<!-- 这段代码用来获取下面的字体 HTML 集合
<script src="http://site.alipay.im/rei/js/data.js"></script>
<script>
var array = [],
    html = '';
array = array.concat(iconData['产品/品牌ICON']);
array = array.concat(iconData['通用ICON']);
array.forEach(function(item) {
    html += '<div class="icon"><i class="iconfont" title="' + item[0] +
               '">' + item[1] + '</i> ' + item[0] + '</div>\n';
});
console.log(html);
</script>

或者直接访问：

http://jsfiddle.net/FdE3c/show
-->

<div class="iconset fn-clear">
<div class="icon"><i class="iconfont" title="盾牌-阳">&#xF000;</i> 盾牌-阳</div>
<div class="icon"><i class="iconfont" title="代付">&#xF004;</i> 代付</div>
<div class="icon"><i class="iconfont" title="预付卡">&#xF005;</i> 预付卡</div>
<div class="icon"><i class="iconfont" title="信用支付">&#xF006;</i> 信用支付</div>
<div class="icon"><i class="iconfont" title="集分宝">&#xF007;</i> 集分宝</div>
<div class="icon"><i class="iconfont" title="集分宝反色">&#xF008;</i> 集分宝反色</div>
<div class="icon"><i class="iconfont" title="基金">&#xF009;</i> 基金</div>
<div class="icon"><i class="iconfont" title="账户通">&#xF00A;</i> 账户通</div>
<div class="icon"><i class="iconfont" title="红包">&#xF00B;</i> 红包</div>
<div class="icon"><i class="iconfont" title="银行卡">&#xF00C;</i> 银行卡</div>
<div class="icon"><i class="iconfont" title="更多">&#xF00D;</i> 更多</div>
<div class="icon"><i class="iconfont" title="常见问题">&#xF00E;</i> 常见问题</div>
<div class="icon"><i class="iconfont" title="自助服务">&#xF010;</i> 自助服务</div>
<div class="icon"><i class="iconfont" title="回收站">&#xF011;</i> 回收站</div>
<div class="icon"><i class="iconfont" title="玩转支付宝">&#xF012;</i> 玩转支付宝</div>
<div class="icon"><i class="iconfont" title="优惠劵">&#xF013;</i> 优惠劵</div>
<div class="icon"><i class="iconfont" title="购物袋">&#xF018;</i> 购物袋</div>
<div class="icon"><i class="iconfont" title="支付宝卡">&#xF019;</i> 支付宝卡</div>
<div class="icon"><i class="iconfont" title="天猫">&#xF01A;</i> 天猫</div>
<div class="icon"><i class="iconfont" title="支小宝">&#xF01B;</i> 支小宝</div>
<div class="icon"><i class="iconfont" title="日历/日期">&#xF01C;</i> 日历/日期</div>
<div class="icon"><i class="iconfont" title="喜欢">&#xF01D;</i> 喜欢</div>
<div class="icon"><i class="iconfont" title="收藏">&#xF01E;</i> 收藏</div>
<div class="icon"><i class="iconfont" title="设置">&#xF021;</i> 设置</div>
<div class="icon"><i class="iconfont" title="播放">&#xF022;</i> 播放</div>
<div class="icon"><i class="iconfont" title="添加-圆">&#xF023;</i> 添加-圆</div>
<div class="icon"><i class="iconfont" title="添加-方">&#xF024;</i> 添加-方</div>
<div class="icon"><i class="iconfont" title="添加-无框">&#xF025;</i> 添加-无框</div>
<div class="icon"><i class="iconfont" title="声音">&#xF026;</i> 声音</div>
<div class="icon"><i class="iconfont" title="右向">&#xF027;</i> 右向</div>
<div class="icon"><i class="iconfont" title="关闭/错误">&#xF028;</i> 关闭/错误</div>
<div class="icon"><i class="iconfont" title="选择/对勾">&#xF029;</i> 选择/对勾</div>
<div class="icon"><i class="iconfont" title="查询/搜索">&#xF02A;</i> 查询/搜索</div>
<div class="icon"><i class="iconfont" title="安卓系统">&#xF02B;</i> 安卓系统</div>
<div class="icon"><i class="iconfont" title="苹果系统">&#xF02C;</i> 苹果系统</div>
<div class="icon"><i class="iconfont" title="windows Phone">&#xF02D;</i> windows Phone</div>
<div class="icon"><i class="iconfont" title="显示器">&#xF02E;</i> 显示器</div>
<div class="icon"><i class="iconfont" title="菱形">&#xF02F;</i> 菱形</div>
<div class="icon"><i class="iconfont" title="视频">&#xF030;</i> 视频</div>
<div class="icon"><i class="iconfont" title="建议/对话">&#xF031;</i> 建议/对话</div>
<div class="icon"><i class="iconfont" title="联系邮箱">&#xF032;</i> 联系邮箱</div>
<div class="icon"><i class="iconfont" title="手机">&#xF033;</i> 手机</div>
<div class="icon"><i class="iconfont" title="首页">&#xF034;</i> 首页</div>
<div class="icon"><i class="iconfont" title="单箭头左">&#xF035;</i> 单箭头左</div>
<div class="icon"><i class="iconfont" title="单箭头右">&#xF036;</i> 单箭头右</div>
<div class="icon"><i class="iconfont" title="双箭头左">&#xF037;</i> 双箭头左</div>
<div class="icon"><i class="iconfont" title="双箭头右">&#xF038;</i> 双箭头右</div>
<div class="icon"><i class="iconfont" title="左三角形">&#xF039;</i> 左三角形</div>
<div class="icon"><i class="iconfont" title="右三角形">&#xF03A;</i> 右三角形</div>
<div class="icon"><i class="iconfont" title="上三角形">&#xF03B;</i> 上三角形</div>
<div class="icon"><i class="iconfont" title="下三角形">&#xF03C;</i> 下三角形</div>
<div class="icon"><i class="iconfont" title="旺旺">&#xF03D;</i> 旺旺</div>
<div class="icon"><i class="iconfont" title="用户">&#xF03E;</i> 用户</div>
<div class="icon"><i class="iconfont" title="返回">&#xF040;</i> 返回</div>
<div class="icon"><i class="iconfont" title="图片">&#xF041;</i> 图片</div>
<div class="icon"><i class="iconfont" title="正方形">&#xF042;</i> 正方形</div>
<div class="icon"><i class="iconfont" title="账单">&#xF043;</i> 账单</div>
<div class="icon"><i class="iconfont" title="全部账单">&#xF044;</i> 全部账单</div>
<div class="icon"><i class="iconfont" title="出错">&#xF045;</i> 出错</div>
<div class="icon"><i class="iconfont" title="提示">&#xF046;</i> 提示</div>
<div class="icon"><i class="iconfont" title="警告">&#xF047;</i> 警告</div>
<div class="icon"><i class="iconfont" title="阻止">&#xF048;</i> 阻止</div>
<div class="icon"><i class="iconfont" title="成功">&#xF049;</i> 成功</div>
<div class="icon"><i class="iconfont" title="疑问">&#xF04A;</i> 疑问</div>
<div class="icon"><i class="iconfont" title="等待">&#xF04B;</i> 等待</div>
<div class="icon"><i class="iconfont" title="详情">&#xF04C;</i> 详情</div>
<div class="icon"><i class="iconfont" title="切换">&#xF04D;</i> 切换</div>
<div class="icon"><i class="iconfont" title="统计">&#xF04E;</i> 统计</div>
<div class="icon"><i class="iconfont" title="下载">&#xF04F;</i> 下载</div>
<div class="icon"><i class="iconfont" title="礼盒">&#xF050;</i> 礼盒</div>
<div class="icon"><i class="iconfont" title="备注">&#xF051;</i> 备注</div>
<div class="icon"><i class="iconfont" title="添加联系人">&#xF052;</i> 添加联系人</div>
<div class="icon"><i class="iconfont" title="申请还款">&#xF053;</i> 申请还款</div>
<div class="icon"><i class="iconfont" title="信用卡管理">&#xF054;</i> 信用卡管理</div>
<div class="icon"><i class="iconfont" title="记录">&#xF055;</i> 记录</div>
<div class="icon"><i class="iconfont" title="提醒">&#xF056;</i> 提醒</div>
<div class="icon"><i class="iconfont" title="地图">&#xF057;</i> 地图</div>
<div class="icon"><i class="iconfont" title="加载中">&#xF058;</i> 加载中</div>
</div>

支付宝员工请直接访问 [site.alipay.im/rei/](http://site.alipay.im/rei/) 来获取字体代码。

外网用户强烈推荐访问 [阿里巴巴矢量图标库](http://iconfont.cn) 的公共服务来定制需要的字体图标。

## Grid 栅格

Alice 的布局是 990px 定宽 25 栅格，这是依托于支付宝实际需求的栅格系统，
在 [我的支付宝](https://my.alipay.com/) 有应用。具体使用方式请见文档：[aliceui.org/grid](http://aliceui.org/grid) 。

![](https://i.alipayobjects.com/e/201303/2KLao4hPu8.png)


## CSS3 Animate

Alice 引入了一个优秀的 CSS3 [动画库](http://aliceui.org/animate) 。

你可以通过简单的增减类名的方式在你的项目中实现数十种动画效果。比如：

> 以下动画效果在支持css3 animate的高级浏览器中有效。

<style>
.animate-demo {
    width: 80px;
    height: 80px;
    background: #42B8F7;
    line-height: 80px;
    text-align: center;
    color: #fff;
    display: inline-block;
}
#test2 {
    background: #5FC161;
}
</style>

````html
<div id="test1" class="animate-demo">点击我</div>
<div id="test2" class="animate-demo">点击我</div>

<script>
seajs.use(['$'], function($) {
    $('#test1').click(function() {
        $(this).addClass('animated bounceOutLeft');
    });
    $('#test2').click(function() {
        $(this).addClass('animated rotateInUpRight');
    });
});
</script>
````

所有的动画效果请点击 [daneden.me/animate](http://daneden.me/animate/) 查看。
