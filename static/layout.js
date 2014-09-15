function write_head(){
    var template_head='<div class="head-content">'+
        '<div class="title-area">'+
            '<img src="http://frozenui.github.io/static/frozen-top.png" alt="frozen" />'+
            '<h1>'+
                '<a href="./">Frozen</a>'+
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
  
    document.write(template_head);
}
function write_foot(){
    var template_foot = '<div class="footer-content">'+
    	'<div>'+
    		'<h3>About us</h3>'+
    		'<p><a href="https://github.com/frozenui">Github</a></p>'+
    		'<p><a href="https://github.com/frozenui/frozenui/issues">Contact us</a></p>'+
    	'</div>'+
    	'<div>'+
    		'<h3>Support</h3>'+
    		'<p><a href="/docs/start.html">Quick start</a></p>'+
    		'<p><a href="http://isux.tencent.com/jobs">Join us</a></p>'+
    	'</div>'+
    	'<div id="footer-us">'+
    		'<img src="http://frozenui.github.io/static/logo.png">'+
    		'<p>© QQ会员前端开发组<br/>All rights reserved.</p>'+
    	'</div>'+
    '</div>';
    document.write(template_foot);
}