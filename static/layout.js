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
              '<li><a href="/baseui">Css</a></li>'+
              '<li><a href="/frozenjs">Javascript</a></li>'+
              '<li><a href="/docs/case.html">Animation case</a></li>'+
              '<li><a href="/docs/start.html">Getting started</a></li>'+
              '<li><a href="/docs/about.html">About</a></li>'+
          '</ol>'+
      '</div>'+
    '</div>';
  
    document.write(template_header);
}
function write_footer(){
    var template_footer = '<div class="footer-content">'+
    	'<div id="footer-us">'+
    		'<p>© QQ会员前端开发组<br/>All rights reserved.</p>'+
    	'</div>'+
    '</div>';
    document.write(template_footer);
}