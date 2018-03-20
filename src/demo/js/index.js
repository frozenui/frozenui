(function (doc, win) {
     $('#list td,#list li').click(function(){
        //   if($(this).data('href')&&(!mqq.QQVersion)){
        //       location.href= $(this).data('href');
        //   }
        //   else{
        //       mqq.ui.openUrl({
        //           url: "http://10.64.114.33:8080/html/"+$(this).data('href')+"?_wv=1",
        //           target: 1,
        //           style: 3
        //       });
        //       console.log(mqq.ui.openUrl)
        //   }
          location.href= $(this).data('href');
      });

      $('.ui-header .ui-btn').click(function(){
          location.href= 'index.html';
      });

      $("#btn1").click(function(){
    		$('.ui-actionsheet').addClass('show');
    	});

    	$("#cancel").click(function(){
    		$(".ui-actionsheet").removeClass("show");
    	});

})(document, window);
