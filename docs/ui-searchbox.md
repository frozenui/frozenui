# ui-searchbox

---

### 初始态

````html
<div  class="ui-searchbox-wrap">
    <div class="ui-searchbox">
        <i class="ui-icon-search"></i>
        <div>搜索号码（2-10位）</div>
    </div>
</div>
````

### 点击态

````html
<div  class="ui-searchbox-wrap">
    <div class="ui-searchbox focus">
        <i class="ui-icon-search"></i>
        <div class="ui-searchbox-input"><input value="" type="tel" placeholder="搜索号码（2-10位）" autocapitalize="off"></div>
        <i class="ui-icon-close"></i>
    </div>
    <button class="ui-searchbox-cancel">取消</button>
</div>
````
### 带按钮

````html
<div  class="ui-searchbox-wrap">
    <div class="ui-searchbox focus">
        <i class="ui-icon-search"></i>
        <div class="ui-searchbox-input"><input value="" type="tel" placeholder="搜索号码（2-10位）" autocapitalize="off"></div>
        <i class="ui-icon-close"></i>
    </div>
    <button class="ui-btn ui-btn-primary">搜索</button>
</div>
````


