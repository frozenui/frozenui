define(function(require, exports, module) {
    var $=require('$');

    require('../core/fz');
    Frozen.add('fz.Base',function(){
        /**
         * public 作用域
         * @alias fz.Base#
         * @ignore
         */
        var _public = this;
        /**
         * public static作用域
         * @alias fz.Base.
         * @ignore
         */
        var _static = this.constructor;
        /**
         * private static作用域
         * @alias fz.Base~
         * @ignore
         */
        var _self = {};
        /**
         * 构造函数
         */
        _public.constructor = function() {
            // private作用域
            var _private = {};
        };


        /**
         * 绑定事件
         */

        _public.on = function(name, fn) {
            box = $(this);
            return box.on.apply(box, arguments);
        };


        /**
         * 绑定事件
         */
        _public.off = function(name, fn) {
            box = $(this);
            return box.off.apply(box, arguments);
        };

        /**
         * 触发事件
         */
        _public.trigger = function(name, data) {
            var box = $(this);
            return box.triggerHandler.apply(box, arguments);
        };

    })

})