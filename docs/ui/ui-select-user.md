# ui-select-user

---
###default
````html

	<ul class="ui-select-
		<!-- list1 start -->user">
    		<li class="ui-select-user-item active">
    			<h3 class="ui-border-b"><i class="arrow"></i>最近在玩的好友</h3>
    			<div class="ui-notice-warn"><i class="ui-icon ui-icon-refresh"></i><p>请检查网络</p></div>
    			<ul class="ui-list ui-border-b">
    				<li class="active">
    					<div class="thumb ui-round">
    						<span class="img" style="background-image:url(http://icase.tencent.com/vlabs/img/?100*100)"></span>
    					</div>
    					<div class="info ui-border-b">飞翔的企鹅</div>
    				</li>
    				<li>
    					<div class="thumb ui-round">
    						<span class="img" style="background-image:url(http://icase.tencent.com/vlabs/img/?100*100)"></span>
    					</div>
    					<div class="info ui-border-b">飞翔的企鹅</div>
    				</li>
    				<li>
    					<div class="thumb ui-round">
    						<span class="img" style="background-image:url(http://icase.tencent.com/vlabs/img/?100*100)"></span>
    					</div>
    					<div class="info">飞翔的企鹅</div>
    				</li>
    			</ul>
    	
    		<!-- list1 end -->
    		<!-- list2 start -->	</li>
    		<li class="ui-select-user-item">
    			<h3 class="ui-userselect-top ui-border-b"><i class="arrow"></i>鹅厂工友们</h3>
    			<ul class="ui-list ui-border-b">
    				<li>
    					<div class="thumb ui-round">
    						<span class="img" style="background-image:url(http://icase.tencent.com/vlabs/img/?100*100)"></span>
    					</div>
    					<div class="info ui-border-b">飞翔的企鹅</div>
    				</li>
    				<li>
    					<div class="thumb ui-round">
    						<span class="img" style="background-image:url(http://icase.tencent.com/vlabs/img/?100*100)"></span>
    					</div>
    					<div class="info ui-border-b">飞翔的企鹅</div>
    				</li>
    				<li>
    					<div class="thumb ui-round">
    						<span class="img" style="background-image:url(http://icase.tencent.com/vlabs/img/?100*100)"></span>
    					</div>
    					<div class="info">飞翔的企鹅</div>
    				</li>
    			</ul>
    	
    		<!-- list2 end -->	</li>
    	</ul>
        <section class="ui-notice" style="display: none;">
            <p>加载中...</p>
        </section>
        <section class="ui-notice" style="display: none;">
            <p>加载失败，请点击页面刷新</p>
        </section>
	<section class="ui-loading-wrap" style="display: none;">
            <p>加载中</p>
            <i class="ui-loading"></i>
        </section>
        <section class="ui-dialog ui-dialog-notice show" style="display: none;">
            <div class="dialog-notice-cnt">
              <i class="ui-loading ui-loading-bright"></i>
              <p>加载中...</p>
           </div>
         </section>
	<!--	
	<script src="../js/zepto.min.js"></script>
	<script src="../js/touch.js"></script>
	<script src="http://pub.idqqimg.com/qqmobile/qqapi.js"></script> 

	<script type="text/javascript">
  		$(".ui-select-user h3").click(function(){
    		var group=$(this).closest(".ui-select-user-item");
    		if(!group.hasClass("active")){
      		group.addClass("active")
    	}else{
      		group.removeClass("active");
    	}
  		})
  		$('.ui-dialog button').click(function(){
      		$('.ui-dialog').removeClass('show');
  		})
	</script>
	-->

````		
