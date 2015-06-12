为了方便自动生成文档, 约定如下:

1. docs/*.html 包含以下 html 结构即可自动生成文档:

```
<section id="组件ID">
    <div class="demo-item">
        <p class="demo-desc">组件1描述</p>
        <div class="demo-block">
            <!-- demo1 html-->
        </div>
        <script class="demo-script">
            ;(function (){
                // demo1 JS
            })();
        </script>
    </div>

    <div class="demo-item">
        <p class="demo-desc">组件2描述</p>
        <div class="demo-block">
            <!-- demo2 html-->
        </div>
        <script class="demo-script">
            ;(function (){
                // demo2 JS
            })();
        </script>
    </div>
</section>
```

其中, #组件ID 唯一, .demo-item 可多个
