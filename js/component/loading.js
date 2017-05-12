/**
 * User: jeakeyliang
 * Date: 14-11-07
 * Time: 下午9:20
 */

!function($){

	// 默认模板
	var _loadingTpl='<div class="ui-loading-block show">'+
		    '<div class="ui-loading-cnt">'+
		      '<i class="ui-loading-bright"></i>'+
		      '<p><%=content%></p>'+
		   '</div>'+
		 '</div>';
	
	// 默认参数
	var defaults={
		content:'加载中...'
	}
	// 构造函数
	var Loading   = function (el,option,isFromTpl) {
		var self=this;
		this.element=$(el);
		this._isFromTpl=isFromTpl;
		this.option=$.extend(defaults,option);
		this.show();
	}
	Loading.prototype={
		show:function(){
			var e=$.Event('loading:show');
			this.element.trigger(e);
			this.element.show();
			
		},
		hide :function () {
			var e=$.Event('loading:hide');
			this.element.trigger(e);
			this.element.remove();
		}
	}
	function Plugin(option) {

		return $.adaptObject(this, defaults, option,_loadingTpl,Loading,"loading");
	}
	$.fn.loading=$.loading= Plugin;
}(window.Zepto)
	

