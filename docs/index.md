# css组件库


---
<style>
.content-area h4{font-size: inherit;}
.ui-avatar-tiled{display:inline-block;}
.frozen-module {
    border-bottom: 1px solid #eee;    
    padding: 10;
    margin-top: 20px;
    margin-bottom: 50px;
}
.frozen-module-head {
    overflow: hidden;
}
.frozen-module-title {
    margin: 0;
    font-size: 28px;
    font-family: Trebuchet MS;
    display: inline;
}
.frozen-module-title a {
    color: #00a5e0;
    cursor: pointer;
}
.frozen-module-link {
    font-size: 14px;
}
.frozen-module-version {
    font-size: 12px;
    font-weight: normal;
    margin-left: 0.5em;
    color: #888;
    font-family: Menlo,Monaco,"Courier New",monospace;
}
p.frozen-module-description {
    font-size: 14px;
    color: #888;
    margin: 10px 0 20px;
}
.frozen-module-demo {
    position: relative;
}
.frozen-module-demo:hover {
    background: #fdfdfd;
}
.frozen-module-dom {
    margin-bottom: 8px;
    font-size:14px;
    width: 420px;
}
.frozen-module-code {
    margin: 0!important;
}
@media (max-width: 640px){
    .frozen-module-code{
        display:none;
    }
}
h3.frozen-module-subtitle {
    margin: 0;
    color: #333;
    display: block;
    padding: 10px 0;
}
.frozen-module-sourcecode {
    position: absolute;
    right: 5px;
    top: 0;
    font-size: 12px;
    padding: 5px 10px;
    background: #EFFFE4;
    border-radius: 3px;
    display: none;
    z-index: 99;
    opacity: 0.8;
}
.frozen-loading {
    margin-bottom: 20px;
}
.black {
    font-size: 12px;
    padding: 2px;
    border-radius: 2px;
    background: rgba(0, 0, 0, 0.55);
    color: #fff;
}
</style>  

Frozen提供的UI组件是目前QQ会员前端开发组所用的通用样式库。遵循[手Q样式规范](http://isux.oa.com/guide/mqq/vd#545)，基本样式使用离线包的方式减少请求，并提供快速接入的方案。

查看[历史版本修改记录](http://frozenui.github.io/frozenui/history.html),查看[css规范](http://frozenui.github.io/frozenui/cssguide.html)

查看手机上的效果[demo](http://frozenui.github.io/demo/index.html)

####最新引用方式

1.可以直接使用下面的 css 文件，注意1.2.0之后的bid改为_306_:
````
 <link media="all" href="http://i.gtimg.cn/vipstyle/frozenui/1.2.0/css/frozen.css?_bid=306" rel="stylesheet">
  <link media="all" href="http://i.gtimg.cn/vipstyle/frozenui/1.2.0/css/vip.css?_bid=306" rel="stylesheet">
````
前者是打包了除了会员相关的基础css文件，后者包括vip等级图标 ，qq等级图标，角标，好友选择器等会员相关的css组件，使用手Q离线包需要加上bid的参数。
将两个css打包到一起的css地址是http://i.gtimg.cn/vipstyle/frozenui/1.2.0/css/global.css， 手Q中不提供离线包。
调试时可使用未压缩版，把css目录换成css-debug，如http://i.gtimg.cn/vipstyle/frozenui/1.2.0/css-debug/frozen.css

2.针对非手Q用户可以使用cdn 和 combo 服务按需加载
````
 <link media="all" href="http://i.gtimg.cn/c/=/vipstyle/frozenui/1.2.0/css/reset.css,/vipstyle/frozenui/1.2.0/css/ui-notice.css" rel="stylesheet">
````
3.直接下载

另外提供下载地址：[http://frozenui.github.io/frozenui/static/frozenui-1.2.0.zip](http://frozenui.github.io/frozenui/static/frozenui-1.2.0.zip)

4.访问我们的github仓库
[https://github.com/frozenui/frozenui](https://github.com/frozenui/frozenui)，自行 clone 到本地。 
        <script id="list-tpl" type="text/x-handlebars-template"> 
            {{#each list}}
            <li {{#unless child}} data-id="{{name}}" {{/unless}}>
                <a href="#modules-{{name}}" >{{title}}</a>
                {{#if child}}
                <ul class="nav">
                {{#each child}}
                    <li data-id="{{name}}"><a href="#modules-{{name}}">{{name}}</a></li>
                {{/each}}
                </ul>
                {{/if}}
            </li>
            {{/each}}
        </script>
         <script type="text/template" id="frozen-module">
            <div class="frozen-module">
                <div class="frozen-module-head">
                    <h2 class="frozen-module-title">
                        <a href="#"></a>
                    </h2>
                </div>
            </div>
        </script>
        <script type="text/template" id="frozen-module-demo">
            <div class="frozen-module-demo">
                <h3 class="frozen-module-subtitle"></h3>
                <div class="frozen-module-dom"></div>
                <pre class="frozen-module-code"></pre>
            </div>
        </script>
        <div class="frozen-modules"></div>
<script type="text/javascript">
    
    seajs.use(['$','handlebars','/static/side','gallery/underscore/1.6.0/underscore'], function($,Handlebars, Side, _) {
        //用jquery获取模板
        var tpl   =  $("#list-tpl").html();
        //预编译模板
        var template = Handlebars.compile(tpl);
        //模拟json数据
        var context = { 
            list:[
                {
                    name: "ui-btn",
                    title: "按钮 button",
                    child:[
                        {
                            name: "ui-btn"
                        },
                        {
                            name: "ui-btn-lg" 
                        },
                        {
                            name: "ui-btn-group" 
                        }
                    ]
                },
                {
                    name: "atom",
                    title: "辅助类 atom"
                },
                {
                    name: "ui-searchbar",
                    title: "搜索框 searchbar"
                },
                {
                    name: "ui-tab",
                    title: "选项卡 tab"
                },
                {
                    name: "ui-slider",
                    title: "图片轮播 slider"
                },
                {
                    name:"ui-list",
                    title: "列表 list"
                },
                {
                    name:"ui-form",
                    title: "表单项 form",
                    child: [
                        {
                            name: "ui-form"
                        },
                        {
                            name: "ui-checkbox" 
                        },
                        {
                            name: "ui-switch" 
                        },
                        {
                            name: "ui-radio"
                        }
                    ]
                },
                {
                    name:"ui-table",
                    title: "表格 table"
                },
                {
                    name:"ui-dialog",
                    title: "弹窗 dialog"
                },
                {
                    name:"ui-notice",
                    title: "通知 notice"
                },
                {
                    name:"ui-tips",
                    title: "提示 tips",
                    child: [
                        {
                            name: "ui-tips"
                        },
                        {
                            name: "ui-poptips" 
                        },
                        {
                            name: "ui-tooltips" 
                        }
                    ]
                },
                {
                    name:"ui-loading",
                    title: "加载中 loading"
                },
                {
                    name:"ui-grid",
                    title: "网格 grid"
                },
                {
                    name:"ui-tag",
                    title: "会员业务 icon角标等",
                    child: [
                        {
                            name: "ui-tag"
                        },
                        {
                            name: "ui-icon-qq" 
                        },
                        {
                            name: "ui-icon-viplevel" 
                        },
                        {
                            name: "ui-icon-qqlevel" 
                        }
                    ]
                }
            ]
        };
        //匹配json内容
        $('.side-area').html(template(context));
           
        var deps = $('.side-area li[data-id]');
        _.each(deps, function(dep) {
            var moduleNode = $($('#frozen-module').html());
            moduleNode.find('.frozen-module-title a')
                .attr('href', $(dep).data('id'))
                .attr('id', 'modules-' + $(dep).data('id'))
                .html($(dep).data('id'));
            moduleNode.appendTo('.frozen-modules');
            $.ajax({
                url:  $(dep).data('id'),
                dataType: 'html',
                success: function(data) {
                    data = $(data);
                    moduleNode.find('.frozen-module-description')
                        .html(data.find('.entry-content > p:first-child').html());
                    data.find('.nico-insert-code').each(function(index, item) {
                        var demoNode = $($('#frozen-module-demo').html());
                        item = $(item);
                        var subtitle = item.prev().html();
                        if (item.prev()[0].tagName !== 'H3' || !subtitle) {
                            subtitle = '默认';
                        }
                        demoNode.find('.frozen-module-subtitle').html(subtitle);
                        demoNode.find('.frozen-module-dom').html(item.html());
                        
                        // 直接使用目标页面生成的高亮代码，不再动态渲染
                        var codeHtml = item.next('.highlight').find('pre').html();
                        demoNode.find('.frozen-module-code').html(codeHtml);

                        moduleNode.find('.frozen-loading').remove();
                        demoNode.appendTo(moduleNode);
                    });
                }
            });
        }); 
        Side.init();
    });
    
</script>