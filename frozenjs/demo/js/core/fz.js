define(function(require, exports, module) {

	(function(){
		
		if(window.Frozen) {
			return;
		}

		var Frozen = {
			/**
			 * tg版本号
			 * @type {string}
			 */
			version: '1.1',

			/**
			 * 命令空间管理 eg. Motion.add('mo.Slide:mo.Tab', function(){})
			 * @param {string} name 
			 * @param {object} obj 
			 */

			add: function(name, obj){
				var target = window;
				var me = arguments.callee;
				var parent = null;
				var isMatch = /^([\w\.]+)(?:\:([\w\.]+))?\s*$/.test(name);
				var objNS = RegExp.$1.split('.');
				var parentNS = RegExp.$2.split('.');
				var name = objNS.pop();//Base tab  Slide
				var isClass = /[A-Z]/.test(name.substr(0,1));
				var constructor = function(){
					var mainFn = arguments.callee.prototype.init;
					if (typeof(mainFn) == 'function' && arguments.callee.caller != me) {
						mainFn && mainFn.apply(this, arguments);
					}
				};

				for(var i = 0; i < objNS.length; i++) {
					var p = objNS[i];
					target = target[p] || (target[p] = {});
				}

				if (parentNS[0] != '') {
					parent = window;
					for (var i = 0; i < parentNS.length; i ++) {
						//console.log(parentNS[i]);
						parent = parent[parentNS[i]];
						//console.log(parent);
						if(!parent) {
							parent = null;
							break;
						}
					}
				}
				if(isClass && typeof(obj) == 'function') {
					if(parent) {

						constructor.prototype = new parent();//new mo()  new Base()  new Tab()
						constructor.prototype.superClass = parent;
					} 
					target[name] = constructor;//Slide
					constructor.prototype.constructor = constructor;
					obj.call(target[name].prototype);
				} else {
					target[name] = obj;
				}

			}

		};

		window.Frozen = window.fz = Frozen;

	})();
});