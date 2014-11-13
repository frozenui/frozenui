# ui-tag



---

###角标



````html
<style>
.img-list{overflow:hidden;}
.img-list li{
	position:relative;
	width: 240px;
    height: 100px;
	float: left;
	margin-bottom: 10px;
	margin-right: 10px;
    border: 1px #dcdcdc solid;
}
.img-list li span{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    background-repeat: no-repeat;
    background-size: 100% auto;
}
</style>
<ul class="img-list">

    <li>
        <span style="background-image:url(http://i.gtimg.cn/vipstyle/frozenui/1.0.0/img/default.png)"></span>
        <div class="name ui-tag-svip">ui-tag-svip</div>
    </li>
    <li>
        <span style="background-image:url(http://i.gtimg.cn/vipstyle/frozenui/1.0.0/img/default.png)"></span>
        <div class="name ui-tag-vip">ui-tag-vip</div>
    </li>
    <li>
        <span style="background-image:url(http://i.gtimg.cn/vipstyle/frozenui/1.0.0/img/default.png)"></span>
        <div class="name ui-tag-free">ui-tag-free</div>
    </li>
    <li>
        <span style="background-image:url(http://i.gtimg.cn/vipstyle/frozenui/1.0.0/img/default.png)"></span>
        <div class="name ui-tag-freelimit">ui-tag-freelimit</div>
    </li>
    <li>
        <span style="background-image:url(http://i.gtimg.cn/vipstyle/frozenui/1.0.0/img/default.png)" class="ui-tag-hot"></span>
        <div class="name">ui-tag-hot</div>
    </li>
    <li>
        <span style="background-image:url(http://i.gtimg.cn/vipstyle/frozenui/1.0.0/img/default.png)" class="ui-tag-new"></span>
        <div class="name">ui-tag-new</div>
    </li>
    <li class="ui-tag-selected">
        <span style="background-image:url(http://i.gtimg.cn/vipstyle/frozenui/1.0.0/img/default.png)" class="ui-tag-new"></span>
        <div class="name">ui-tag-selected ui-tag-new</div>
    </li>
    <li class="ui-tag-selected">
        <span style="background-image:url(http://i.gtimg.cn/vipstyle/frozenui/1.0.0/img/default.png)"></span>
        <div class="name ui-tag-vip">ui-tag-selected ui-tag-vip</div>
    </li>
</ul>
		
````

