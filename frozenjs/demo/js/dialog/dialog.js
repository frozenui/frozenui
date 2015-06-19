define(function(require, exports, module) {
    require('../Base/base');
    Frozen.add('fz.Dialog:fz.Base',function(){
        var _public = this;

        var _private = {};

        var _static = this.constructor;

        var win = window.top;
        var doc = $(win.document);

        // 查找模板中相应元素的标识
        _private.BODY = 'ui-dialog-bd';
        _private.FOOT = 'ui-dialog-ft';

        // 默认模板
        _private.tpl='<div class="ui-dialog">'+
            '<div class="ui-dialog-cnt">'+
            '<div class="ui-dialog-bd"></div>'+
            '<div class="ui-dialog-ft ui-btn-group">'+
            '</div>'+
            '</div>'+
            '</div>';

        //默认配置
        _static.config={
            title:'',
            content:'',
            button:['确认'],
            select:0,
            allowScroll:false,
            element:'',
            default_dom:'.ui-dialog',
            tpl:_private.tpl,
            className:'show',
            callback:function(){}
        };

        _public.init=function(config){
            this.config = $.extend({}, _static.config, config);
            var self = this;
            var config = self.config;
            self.ele=config.element || config.default_dom;
            self.action=self.ele+'.show';
            self.button=$(self.ele).find('[data-role="button"]');
            if(config.element!=''){
                //模版存在
                self.isFromTpl=false;
                var dom=$(config.element);
                _private.toggle.call(self,dom);

            }else{

                self.isFromTpl=true;
                // 创建结构
                _private.create.call(self);
                // 填充内容
                _private.fill.call(self);

                self.ele=self.dom.box;

                self.button=self.dom.foot.find('button');

            }

            //绑定事件
            _private.attach.call(self);




        };

        //创建结构
        _private.create=function(){
            var body = doc.find('body');
            var self = this;
            var config = self.config;
            self.dom={};
            self.dom.box=$(config.tpl).clone().prependTo(body);
            self.dom.box.addClass(config.className);
            self.dom.body=self.dom.box.find('.' + _private.BODY);
            self.dom.foot=self.dom.box.find('.' + _private.FOOT);
        };

        //填充内容
        _private.fill=function(){
            var self = this;
            var config = self.config;
            _private.fillBody.call(self);
            _private.fillFoot.call(self);

        };

        //填充主体
        _private.fillBody=function(){
            var self = this;
            var config = self.config;
            var html="<div>";
            if(config.title){
                html+='<h4>'+config.title+'</h4>';
            }
            if(config.content){
                html+='<div>'+config.content+'</div>';
            }
            html+='</div>';
            self.dom.body.html(html);
        };

        //添加按钮
        _private.fillFoot=function(){
            var self = this;
            var config = self.config;
            var html="";
            if(config.button){
                for (var i = 0; i < config.button.length; i++){
                    html+='<button type="button" data-role="button" id="dialogButton'+i+'">'+config.button[i]+'</button>';
                }

            }
            self.dom.foot.html(html);
        };
        //绑定事件
        _private.attach=function(){
            var self = this;
            var config = self.config;

            //按钮事件
            var btn=self.button;
            btn.on('tap',function(index){
                var index=$(self.button).index($(this));
                //回调函数
                config.callback(index);
                _private.hide.call(self,self.ele);
            })
        };

        _private.hide=function (element) {
            var self=this;
           var element=$(element);
            //element.trigger($.Event("dialog:hide"));
            element.off("touchmove",_private.stopScroll);
            element.removeClass("show");
            self.isFromTpl&&self.dom.box.remove();
        };

        _private.toggle=function(ele){
            var self=this;
            if(ele){
                if(ele.hasClass("show")){
                    ele.removeClass('show');
                }else{
                    ele.addClass('show');
                }
            }

        };

        _private.stopScroll=function(){
            return false;
        };

        _private.parseTpl=function(source,dist,data){
            var html =template(source, data);
            $(dist).html(html).find('.ui-dialog').addClass('show');
        };
    })

})