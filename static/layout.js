function write_header(){
    var template_header = '<div class="head-content">'+
        '<div class="title-area">'+
            '<img src="http://frozenui.github.io/static/frozen-top.png" alt="frozen" />'+
            '<h1>'+
                '<a href="/">Frozen</a>'+
            '</h1>'+                 
        '</div>'+
      
      '<div class="nav-area">'+
          '<ol class="main-nav">'+
              '<li><a href="/baseui">css组件库</a></li>'+
              '<li><a href="/docs/javascript.html">js组件库</a></li>'+
              '<li><a href="/docs/case.html">案例秀</a></li>'+
              '<li><a href="/docs/start.html">开始使用</a></li>'+
              '<li><a href="/docs/rule.html">关于Frozen</a></li>'+
          '</ol>'+
      '</div>'+
    '</div>';
  
    document.write(template_header);
}
function write_footer(){
    var template_footer = '<div class="footer-content">'+
    	'<div id="footer-us">'+
    		'<a href="https://github.com/frozenui"><img src="http://frozenui.github.io/static/logo.png"></a>'+
    		'<p>© QQ会员前端开发组<br/>All rights reserved.</p>'+
    	'</div>'+
    '</div>';
    document.write(template_footer);
}