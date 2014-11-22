# css组件
---
<div class="side-area">
        <ul>
          <li><a href="#modules-ui-btn">按钮 button</a>
            <ul class="nav">
              <li data-id="ui-btn"><a href="#modules-ui-btn">ui-btn</a></li>
              <li data-id="ui-btn-lg"><a href="#modules-ui-btn-lg" >ui-btn-lg</a></li>
              <li data-id="ui-btn-group"><a href="#modules-ui-btn-group" >ui-btn-group</a></li>
            </ul>
          </li>
          <li data-id="atom"><a href="#modules-atom">辅助类 atom</a></li>
          <li  data-id="ui-searchbar"><a href="#modules-ui-searchbar">搜索框 searchbar</a></li>
          <li data-id="ui-tab"><a href="#modules-ui-tab">选项卡 tab</a></li>
          <li data-id="ui-list"><a href="#modules-ui-list" >列表 list</a></li>
          <li><a href="#modules-ui-form">表单项 form</a>
            <ul class="nav">
              <li data-id="ui-form"><a href="#modules-ui-form" >ui-form</a></li>
              <li data-id="ui-checkbox"><a href="#modules-ui-checkbox" >ui-checkbox</a></li>
              <li data-id="ui-switch"><a href="#modules-ui-switch">ui-switch</a></li>
              <li data-id="ui-radio"><a href="#modules-ui-radio">ui-radio</a></li>
            </ul>
          </li>
          <li data-id="ui-table"><a href="#modules-ui-table">表格 table</a></li>
          <li  data-id="ui-dialog"><a href="#modules-ui-dialog">弹窗 dialog</a></li>
          <li data-id="ui-notice"><a href="#modules-ui-notice">通知 notice</a></li>
          <li><a href="#modules-ui-tips">提示 tips</a>
            <ul class="nav">
              <li data-id="ui-tips"><a href="#modules-ui-tips">ui-tips</a></li>
              <li data-id="ui-poptips"><a href="#modules-ui-poptips" >ui-poptips</a></li>
              <li data-id="ui-tooltips"><a href="#modules-ui-tooltips">ui-tooltips</a></li>
            </ul>
          </li>
          <li data-id="ui-loading"><a href="#modules-ui-loading">加载中 loading</a></li>
          <li><a href="#modules-ui-tag">会员业务 icon等</a>
            <ul class="nav">
              <li data-id="ui-tag"><a href="#modules-ui-tag">ui-tag</a></li>
              <li data-id="ui-selector"><a href="#modules-ui-selector">ui-selector</a></li>
              <li data-id="ui-icon-qq"><a href="#modules-ui-icon-qq" >ui-icon-qq</a></li>
              <li data-id="ui-icon-viplevel"><a href="#modules-ui-icon-viplevel">ui-icon-viplevel</a></li>
              <li data-id="ui-icon-qqlevel"><a href="#modules-ui-icon-qqlevel" >ui-icon-qqlevel</a></li>
            </ul>
          </li>
        </ul>
    </div>          
    <script type="text/template" id="list-template">
        <li><a href="#"></a></li>
    </script>
    <div class="content-area">
        <h1>css组件库</h1>
        <div class="content">      
        <p>Frozen提供的UI组件是目前QQ会员前端开发组所用的通用样式库。遵循[手Q样式规范](http://isux.oa.com/guide/mqq/vd#545)，基本样式使用离线包的方式减少请求，并提供快速接入的方案。</p>
        <p>查看[历史版本修改记录](http://frozenui.github.io/frozenui/history.html) ,查看[css规范](http://frozenui.github.io/frozenui/cssguide.html)</p>，引用方式参看[http://frozenui.github.io/start.html#正确使用css的方式](http://frozenui.github.io/start.html#正确使用css的方式).
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
        <style>
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
            /*color: #7CAE23;*/
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
        <div class="frozen-modules"></div>
      </div>
    </div>
    </div>
<script type="text/javascript">
seajs.use(['$', 'gallery/underscore/1.6.0/underscore', 'arale/popup/1.1.6/popup'], function($, _, Popup) {
    var deps = $('.side-area li[data-id]');
    _.each(deps, function(dep) {
        var moduleNode = $($('#frozen-module').html());
        moduleNode.find('.frozen-module-title a')
            .attr('href', $(dep).data('id'))
            .attr('id', 'modules-' + $(dep).data('id'))
            .html($(dep).data('id'));
        moduleNode.appendTo('.frozen-modules');
        var list = substractTitle(moduleNode.find('h2'));
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

                // 中文关键词，一般放在 keywords 数组的第一个
                // 在这里写到左边索引栏中
                moduleNode.find('.frozen-module-version')
                var keywords = data.find('#sidebar-wrapper .keywords').html();
                if (keywords) {
                    list.find('i').html(keywords);
                }
            }
        });
    });
    seajs.use('/static/side', function(Side) {
        Side.init();        
    });     
    function substractTitle(item) {
        item = item.find('a');
        var list = $($('#list-template').html());
        list.find('a').html(item.html() + list.find('a').html());
        list.find('a').attr('href', '#' + item.attr('id'));
        //list.appendTo('.side-area ul');
        return list;
    }
});
</script>
