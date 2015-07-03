define(function(require, exports, module) {
    // var $=require('$');
    // require('lib/zepto-touch');
    require('ui/dialog/dialog');

    // 从模版创建
    var dia1 = new fz.dialog({
        title: '温馨提示11111',
        content: '温馨提示内容2222',
        button: ["确认", "取消"],
        autoshow: false,
        trigger: "#btn1",
        events: {
            "action": function(event, index) {
                console.log(index)
            },
            "init": function() {
                console.log("init");
            },
            "aftershow": function() {
                console.log("show");
            },
            "afterhide": function() {
                console.log("hide");
            }
        }
    });
    dia1.on('show',function(){
        console.log("show");
    })

    // 从dom创建
    var dia2 = new fz.dialog({
        container: '.ui-dialog',
        trigger: "#btn2"
    });



})