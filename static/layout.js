function write_header(){
    var template_header = '<div class="head-content">'+
        '<div class="title-area">'+
            '<h1>'+
                '<a href="/">Frozen</a>'+
            '</h1>'+                 
        '</div>'+
      
      '<div class="nav-area">'+
          '<ol class="main-nav">'+
              '<li><a href="/baseui">CSS</a></li>'+
              '<li><a href="/frozenjs">JavaScript</a></li>'+
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
		'<a href="https://github.com/frozenui">GitHub</a> • '+
        '<a href="http://lab.lepture.com/nico/">nico</a> • '+
        '<a href="https://github.com/frozenui/frozenui/issues">Issues</a> • '+
        '<a href="https://github.com/QQVIPTeam">QQVIP FD Team</a>'
    '</div>';
    document.write(template_footer);
}