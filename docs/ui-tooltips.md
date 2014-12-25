# ui-tips 

---
### 警示
````html
<div class="ui-tooltips ui-tooltips-warn">
    <div class="ui-tooltips-cnt ui-tooltips-cnt-link ui-border-b">
        <i></i>当前网路不可用，请检查你的网路设置。
    </div>
</div>
````
### 带箭头
````html
<div class="ui-tooltips ui-tooltips-guide">
    <div class="ui-tooltips-cnt ui-tooltips-cnt-link ui-border-b">
        <i></i>新手引导、功能引导
    </div>
</div>
````
### 带按钮
````html
<div class="ui-tooltips ui-tooltips-guide">
    <div class="ui-tooltips-cnt ui-border-b">
        新手引导、功能引导
        <button class="ui-btn">加入</button>
    </div>
</div>
````
### 状态
````html
<div class="ui-tooltips ui-tooltips-state">
    <div class="ui-tooltips-cnt ui-tooltips-cnt-link ui-border-b">
        状态
    </div>
</div>
````
### 带按钮
````html
<div class="ui-tooltips ui-tooltips-state">
    <div class="ui-tooltips-cnt ui-border-b">
        状态
        <button class="ui-btn ui-btn-primary">加入</button>
    </div>
</div>
````
### 个性装扮

````html
<style>
/* 1.2.1计划中，目前使用需要加以下代码 */
.ui-tooltips-vip .ui-tooltips-cnt {
    background-color: rgba(248, 248, 248, 0.95);
    color: #000;
    line-height: 46px;
    height: 46px;
}
</style>
<div class="ui-tooltips ui-tooltips-vip">
    <div class="ui-tooltips-cnt">
        <i class="ui-icon-vip"></i>
        <span>QQ会员xxxx</span>
        <button class="ui-btn ui-btn-primary">开通</button>
    </div>
</div>
<p></p>
````