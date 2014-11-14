# History

---
<style>
.content ol li {
	list-style-type: decimal;
	margin-left: 22px;
	line-height: 30px;
}
</style>

## 1.0.0

发布新版本


## 1.1.0

引用地址[http://i.gtimg.cn/vipstyle/frozenui/1.1.0/css/frozen.css?_bid=256](http://i.gtimg.cn/vipstyle/frozenui/1.1.0/css/frozen.css?_bid=256 )

1. 增加`ui-form`,`ui-checkbox`,`ui-radio`,`ui-switch`

2. 增加搜索框`ui-searchbox`

3. input的样式重置

4. `ui-list-text`的文字长度截断问题，加上p标签

5. 解决`ui-list`点击态问题

6. 解决`ui-btn`和`ui-reddot` 圆角bug

7. `ui-btn-group`修改背景

8. 现有的`ui-tips`改为`ui-poptips`，dom结构简化，另外新增`ui-tips`，`ui-tooltips`

9. 删减`ui-icon`，非共用图标样式写在对应的组件里

10. _basic.css_ 改成 _frozen.css_，`ui-icon-tag`改成`ui-tag`，并和`ui-select-user`一起移到vip目录下，不再包含在_frozen.css_里


## 1.2.0


1. 修改ui-list和ui-form的箭头图标

2. 去掉ui-select-user,增加ui-selector

3. 增加ui-icon-qq

4. selec标签重写

5. 修改ui-avatar[有些android2.3的机器不支持 border-radius %单位](https://github.com/frozenui/baseui/issues/9)的问题

6. 修改ui-btn的行高不一致的问题

7. 1px左右边框改用与上下边框同样的方法实现

8. searchbox 增加focus时控制内部元素隐藏和显示的代码，减少js需要的操作



