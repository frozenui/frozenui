define(function(require, exports, module) {
    require('../../ui/overlay/overlay');
    Frozen.pkg('fz.dialog:fz.overlay', function() {
        var _public = this;

        var _private = {};

        var _static = this.constructor;
        // 默认模版
        _static.tpl = '\
            <div class="ui-dialog">\
            <div class="ui-dialog-cnt">\
                <div class="ui-dialog-bd">\
                    <div>\
                    <h4><%=title%></h4>\
                    <div><%=content%></div></div>\
                </div>\
                <div class="ui-dialog-ft ui-btn-group">\
                    <% for (var i = 0; i < button.length; i++) { %>\
                    <% if (i == select) { %>\
                    <button type="button" data-role="button"  class="select" id="dialogButton<%=i%>"><%=button[i]%></button>\
                    <% } else { %>\
                    <button type="button" data-role="button" id="dialogButton<%=i%>"><%=button[i]%></div>\
                    <% } %>\
                    <% } %>\
                </div>\
            </div>\
        </div>';
        // 按钮role，触发action事件
        _static.button = '[data-role="button"]';
        // 默认参数
        _static.option = {
            title: '',
            content: '',
            button: ['确认'],
            select: 0
        }

        _public.init = function(option) {
            var self = this;
            // 直接传入字符串，将字符串设置为content
            if (typeof option == 'string') {
                option = {
                    content: option
                };
            }

            // 使用传入的tpl替换默认tpl
            option.tpl || (option.tpl = _static.tpl);
            option = $.extend({}, _static.option, option);

            self.superClass.call(self, option);
        }

    })

})