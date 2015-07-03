define(function(require, exports, module) {
    require('../../base/base/base');
    require('../../base/tpl/tpl');

    Frozen.pkg('fz.overlay:fz.base', function() {
        var _public = this;

        var _private = {};
        var _static = this.constructor;
        // 默认模版
        _static.tpl = '<div></div>';
        // 按钮role，触发action事件
        _static.button = '[data-role="button"]';

        // 默认参数
        _static.option = {
            autoshow: false,
            events: {}
        }
        _public.init = function(option) {
            var self = this;
            // 使用传入的tpl替换默认tpl
            option.tpl || (option.tpl = _static.tpl);

            // 重置option
            self.option = $.extend({}, _static.option, option);
            // 判断是否通过模版创建，传入container则不通过模版创建
            self.isFromTpl = true;

            if (option.container) {
                self.isFromTpl = false;
                self.$container = $(option.container);
            } else {
                self.$container = $(fz.tpl.render(option.tpl, self.option));
            }
            if (option.trigger) {
                self.$trigger = $(option.trigger);
            }
            self.option.events && self.on(self.option.events)
            // 获取按钮
            self.$button = $(self.$container).find(_static.button);
            // 绑定事件
            _private.attach.call(self);
            // 是否初始化时show
            self.option.autoshow && self.show();
            // console.log(self)
            // 触发事件
            self.trigger('init');
        }
        _private.attach = function() {
            var self = this;

            // 点击按钮是触发action事件
            self.$button && self.$button.on("click", function() {
                var index = $(self.$button).index($(this));
                self.trigger("action", index);
                self.hide();
            });

            self.$trigger && self.$trigger.on("click", function() {

                self.show();
            });
        }
        _public._render = function(callback) {
            var self = this;
            self.isFromTpl && (self.$container = self.$container.appendTo("body"));
            setTimeout(function() {
                callback();
            }, 10)
        }

        _public.toggle = function() {
            if (this.$container.hasClass("show")) {
                this.hide();
            } else {
                this.show();
            }
        }
        _public.show = function() {
            var self = this;
            // 如果从模版创建，则将创建的dom append到body上
            self._render(function() {
                self.trigger("beforeshow");
                self.$container.addClass("show");
                if (parseFloat(self.$container.css("-webkit-transition-duration")) > 0) {
                    self.$container.one("webkitTransitionEnd", function() {
                        self.trigger("aftershow");
                    });
                } else {
                    self.trigger("aftershow");
                }

            });

        }
        _public.hide = function() {
            var self = this;
            this.trigger("beforehide");
            self.$container.addClass("hide");

            function hide() {
                self.trigger("afterhide");
                self.$container.removeClass("show");
                self.$container.removeClass("hide");

                // 如果从模版创建，则将dom移除
                self.isFromTpl && self.$container.remove();
            }

            if (parseFloat(self.$container.css("-webkit-transition-duration")) > 0) {
                self.$container.one("webkitTransitionEnd", function() {
                    hide();
                });
            } else {
                hide();
            }
        }

    })
})