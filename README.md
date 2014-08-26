# 通用样式库

- order: 2
- category: alice

---
test
`````html
<script type="text/template" id="alice-module">
    <div class="alice-module">
        <div class="alice-module-head">
            <h2 class="alice-module-title">
                <a href="#"></a>
            </h2>
            <span class="alice-module-version"></span>
            <p class="alice-module-description"></p>
        </div>
        <img class="alice-loading" src="data:image/gif;base64,R0lGODlhEAALAPQAAP///z2LqeLt8dvp7u7090GNqz2LqV+fuJ/F1IW2ycrf51aatHWswaXJ14i4ys3h6FmctUCMqniuw+vz9eHs8fb5+meku+Tu8vT4+cfd5bbT3tbm7PH2+AAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCwAAACwAAAAAEAALAAAFLSAgjmRpnqSgCuLKAq5AEIM4zDVw03ve27ifDgfkEYe04kDIDC5zrtYKRa2WQgAh+QQJCwAAACwAAAAAEAALAAAFJGBhGAVgnqhpHIeRvsDawqns0qeN5+y967tYLyicBYE7EYkYAgAh+QQJCwAAACwAAAAAEAALAAAFNiAgjothLOOIJAkiGgxjpGKiKMkbz7SN6zIawJcDwIK9W/HISxGBzdHTuBNOmcJVCyoUlk7CEAAh+QQJCwAAACwAAAAAEAALAAAFNSAgjqQIRRFUAo3jNGIkSdHqPI8Tz3V55zuaDacDyIQ+YrBH+hWPzJFzOQQaeavWi7oqnVIhACH5BAkLAAAALAAAAAAQAAsAAAUyICCOZGme1rJY5kRRk7hI0mJSVUXJtF3iOl7tltsBZsNfUegjAY3I5sgFY55KqdX1GgIAIfkECQsAAAAsAAAAABAACwAABTcgII5kaZ4kcV2EqLJipmnZhWGXaOOitm2aXQ4g7P2Ct2ER4AMul00kj5g0Al8tADY2y6C+4FIIACH5BAkLAAAALAAAAAAQAAsAAAUvICCOZGme5ERRk6iy7qpyHCVStA3gNa/7txxwlwv2isSacYUc+l4tADQGQ1mvpBAAIfkECQsAAAAsAAAAABAACwAABS8gII5kaZ7kRFGTqLLuqnIcJVK0DeA1r/u3HHCXC/aKxJpxhRz6Xi0ANAZDWa+kEAA7AAAAAAAAAAAA">
    </div>
</script>

<script type="text/template" id="alice-module-demo">
    <div class="alice-module-demo">
        <h3 class="alice-module-subtitle"></h3>
        <a class="alice-module-sourcecode" href="javascript:;">查看源码</a>
        <div class="alice-module-dom"></div>
        <pre class="alice-module-code"></pre>
    </div>
</script>

<style>
.alice-module {
    border-bottom: 1px solid #eee;    
    padding: 0;
    margin-top: 20px;
    margin-bottom: 50px;
    font:12px/1.5 tahoma,arial,Hiragino Sans GB,"Microsoft Yahei",\5b8b\4f53;
}
.alice-module-head {
    overflow: hidden;
}
.alice-module-title {
    margin: 0;
    font-size: 28px;
    font-family: Trebuchet MS;
    display: inline;
}
.alice-module-title a {
    /*color: #7CAE23;*/
    color: #00a5e0;
    cursor: pointer;
}
.alice-module-link {
    font-size: 14px;
}
.alice-module-version {
    font-size: 12px;
    font-weight: normal;
    margin-left: 0.5em;
    color: #888;
    font-family: Menlo,Monaco,"Courier New",monospace;
}
p.alice-module-description {
    font-size: 14px;
    color: #888;
    margin: 10px 0 20px;
}
.alice-module-demo {
    border: 1px solid #eee;
    border-bottom: none;
    padding: 20px 130px 20px 20px;
    position: relative;
}
.alice-module-demo:hover {
    background: #fdfdfd;
}
.alice-module-dom {
    margin-bottom: 8px;
}
.alice-module-code {
    display: none;
    margin: 0!important;
}
h3.alice-module-subtitle {
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 3px;
    margin: 0;
    color: #777;
    font-size: 12px;
    background: #F8F8F8;
    border-bottom: 1px solid #ddd;
    border-left: 1px solid #ddd;
    display: block;
    font-size: 12px;
    width: 100px;
    padding: 5px 10px;
    opacity: 0.8;
}
.alice-module-sourcecode {
    position: absolute;
    right: 125px;
    top: 0;
    font-size: 12px;
    padding: 5px 10px;
    background: #EFFFE4;
    border-radius: 3px;
    display: none;
    z-index: 99;
    opacity: 0.8;
}

.alice-loading {
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

<div class="alice-modules"></div>

<script type="text/javascript">
seajs.use(['$', 'gallery/underscore/1.4.4/underscore', 'arale/popup/1.1.2/popup'], function($, _, Popup) {

    $('.alice-modules').on('mouseenter', '.alice-module-demo', function() {
        $(this).find('.alice-module-sourcecode').fadeIn(200);
    }).on('mouseleave', '.alice-module-demo', function() {
        $(this).find('.alice-module-sourcecode').fadeOut(200);         
    });

    new Popup({
        trigger: '.alice-module-sourcecode',
        template: '<div class="black">源码在下方</div>',
        delay: -1,
        delegateNode: '.alice-modules'
    });

    $('.alice-modules').on('click', '.alice-module-sourcecode', function() {
        var code = $(this).parent().find('.alice-module-code');
        if (code.is(':hidden')) {
            code.animate({
                opacity: 1,
                height: 'toggle'
            }, 200);
        } else {
            code.animate({
                opacity: 0,
                height: 'toggle'
            }, 200);
        }
    });

    $.getJSON('../package.json', function(data) {
        var alias;
            alias = data.widgets;
        var deps = _.pairs(alias);
        _.each(deps, function(dep) {
            var moduleNode = $($('#alice-module').html());
            moduleNode.find('.alice-module-title a')
                .attr('href', 'docs/' + dep[1])
                .attr('id', 'modules-' + dep[1])
                .html(dep[1]);
            moduleNode.appendTo('.alice-modules');
            var list = substractTitle(moduleNode.find('h2'));

            $.ajax({
                url: 'docs/' + dep[1],
                dataType: 'html',
                success: function(data) {
                    data = $(data);
                    moduleNode.find('.alice-module-description')
                        .html(data.find('.entry-content > p:first-child').html());

                    data.find('.nico-insert-code').each(function(index, item) {
                        var demoNode = $($('#alice-module-demo').html());
                        item = $(item);
                        var subtitle = item.prev().html();
                        if (item.prev()[0].tagName !== 'H3' || !subtitle) {
                            subtitle = '默认';
                        }
                        
                        demoNode.find('.alice-module-subtitle').html(subtitle);
                        demoNode.find('.alice-module-dom').html(item.html());
                        
                        // 直接使用目标页面生成的高亮代码，不再动态渲染
                        var codeHtml = item.next('.highlight').find('pre').html();
                        demoNode.find('.alice-module-code').html(codeHtml);

                        moduleNode.find('.alice-loading').remove();
                        demoNode.appendTo(moduleNode);
                    });

                    // 中文关键词，一般放在 keywords 数组的第一个
                    // 在这里写到左边索引栏中
                    moduleNode.find('.alice-module-version')
                    var keywords = data.find('#sidebar-wrapper .keywords').html();
                    if (keywords) {
                        list.find('i').html(keywords);
                    }
                }
            });
        });
        seajs.use('/static/side', function(side) {
            side.init();        
        });        
    });
    
    function substractTitle(item) {
        $('.side-loading').remove();
        item = item.find('a');
        var list = $($('#list-template').html());
        list.find('a').html(item.html() + list.find('a').html());
        list.find('a').attr('href', '#' + item.attr('id'));
        list.appendTo('.side-area ul');
        return list;
    }

});
</script>
`````
