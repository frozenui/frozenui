define(function(require, exports, module) {
    var $=require('$');
    require('lib/zepto-touch');
    require('dialog/dialog');

    $("#btn1").tap(function(e){
        var dia=new fz.Dialog({
            title:'温馨提示11111',
            content:'温馨提示内容2222',
            button:["确认","取消"],
            callback:function(index){
                console.log(index);
            }
        });

    })

    $("#btn2").tap(function(){
        var dia=new fz.Dialog({
            element:'.ui-dialog'
        });
    })

})