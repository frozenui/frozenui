;(function($){
	$.extend($, {
		emptyFunction: function(){},
		preventDefault: function(e){
			e.preventDefault();
		},
		template: (function(){
			var cache = {};

			return function(str, data){
				// Figure out if we're getting a template, or if we need to
				// load the template - and be sure to cache the result.
				var fn = cache[str] || 
				  // Generate a reusable function that will serve as a template
				  // generator (and which will be cached).
				  new Function("obj",
					"var p=[],print=function(){p.push.apply(p,arguments);};" +
					
					// Introduce the data as local variables using with(){}
					"with(obj){p.push('" +
					
					// Convert the template into pure JavaScript
					str
					  .replace(/[\r\t\n]/g, " ")
					  .split("<%").join("\t")
					  .replace(/((^|%>)[^\t]*)'/g, "$1\r")
					  .replace(/\t=(.*?)%>/g, "',$1,'")
					  .split("\t").join("');")
					  .split("%>").join("p.push('")
					  .split("\r").join("\\'")
				  + "');}return p.join('');");
				
				// Provide some basic currying to the user
				return data ? fn( data ) : fn;
			}
		})(),
		insertStyleSheet: function() {
	        var $el = $('<style type="text/css"></style>').appendTo('head');
        	return $el[0].sheet;
    	},
    	debounce: function(func, wait, immediate){
	        var timeout;

	        return function() {
	            var context = this, 
	                args = arguments,
	                callNow = immediate && !timeout;

	            var later = function() {
	                timeout = null;
	                if (!immediate) {
	                    func.apply(context, args);
	                }
	            };

	            clearTimeout(timeout);

	            timeout = setTimeout(later, wait);

	            if (callNow) {
	                func.apply(context, args);
	            }
	        };
	    },
	    setCookie: function(name, value, domain, path, hour) {
			if (hour) {
				var today = new Date();
				var expire = new Date();
				expire.setTime(today.getTime() + 3600000 * hour);
			}
			window.document.cookie = name + "=" + value + "; " + (hour ? ("expires=" + expire.toGMTString() + "; ") : "") + (path ? ("path=" + path + "; ") : "path=/; ") + (domain ? ("domain=" + domain + ";") : ("domain=" + domainPrefix + ";"));
			return true;
		},
	    getCookie: function(name) {
			var r = new RegExp("(?:^|;+|\\s+)" + name + "=([^;]*)");
			var m = window.document.cookie.match(r);
			return (!m ? "" : m[1]);
		},
		deleteCookie: function(name, domain, path) {
			window.document.cookie = name + "=; expires=Mon, 26 Jul 1997 05:00:00 GMT; " + (path ? ("path=" + path + "; ") : "path=/; ") + (domain ? ("domain=" + domain + ";") : ("domain=" + domainPrefix + ";"));
		}
	});

	$.extend($.fn, {
		isInView: function(viewWidth, viewHeight){
			var el = $(this)[0];
			if(!el){
				return false;
			}
			
			var rect = el.getBoundingClientRect();

	        if((rect.left > -rect.width && rect.right < (viewWidth || window.innerWidth) + rect.width) &&
	            (rect.top > -rect.height && rect.bottom < (viewHeight || window.innerHeight) + rect.height)){
	            return true;
	        }else{
	            return false;
	        }
	    }
	});
})(Zepto)