/**
 * 包管理操作类
 * @author jeakeyliang
 * @version 2.0
 * @date 2015-07-02
 * @class fz
 */
define(function(require, exports, module) {

    (function() {

        if (window.Frozen) {
            return;
        }

        var Frozen = {
            /**
             * tg版本号
             * @type {string}
             */
            version: '2.0.0',
            noop: function() {},
            /**
             * 命令空间管理 eg. Frozen.pkg('fz.Slide:fz.Tab', function(){})
             * @param {string} name
             * @param {object} obj
             */

            pkg: function(name, obj) {
                var target = window,
                    parent = null,
                    that = arguments.callee,
                    index = 0,
                    isMatch = /^\s*(?:(static)\s+)?([\w\.]+)\s*(?:\:\s*([\w\.]+))?\s*$/.test(name) // 匹配类似 static qqvip.cookie : qq.cookie，qqvip.cookie，static qqvip.cookie
                    ,
                    isStatic = RegExp.$1 == 'static',
                    packageNS = RegExp.$2.split('.'),
                    parentNS = RegExp.$3.split('.');

                //构造函数
                var constructor = function() {
                    var mainFn = arguments.callee.prototype.init;
                    if (typeof(mainFn) == 'function' && arguments.callee.caller != that) {
                        mainFn && mainFn.apply(this, arguments);
                    }
                };

                for (var length = packageNS.length - 1; index < length; index++) {
                    if (!(packageNS[index] in target)) {
                        target[packageNS[index]] = {};
                    }
                    target = target[packageNS[index]];
                }
                if (parentNS[0] != '') {
                    parent = window;
                    for (var i = 0, iMax = parentNS.length; i < iMax; i++) {
                        parent = parent[parentNS[i]];
                    }
                }

                if (isStatic && typeof(obj) == 'function') {
                    //是静态命名，进行实例化
                    if (typeof target[packageNS[index]] == "undefined") {
                        if (parent) {
                            constructor.prototype = parent;
                            target[packageNS[index]] = new constructor();
                        } else {
                            target[packageNS[index]] = {};
                        }
                    }
                    obj.call(target[packageNS[index]]);
                } else if (typeof(obj) == 'function') {

                    //不是静态命名，用户自行实例化
                    if (parent) {
                        constructor.prototype = new parent();
                        constructor.prototype.superClass = parent;
                    }
                    target[packageNS[index]] = constructor;
                    target[packageNS[index]].prototype.constructor = constructor;
                    obj.call(target[packageNS[index]].prototype);
                } else {
                    target[name] = obj;
                }
                return this;
            }

        };

        window.Frozen = window.fz = Frozen;

    })();
});