/**
 * User: jeakeyliang
 * Date: 14-08-22
 * Time: 下午9:20
 */
define(function(require, exports, module) {
    Frozen.pkg('static fz.tpl', function() {
        var _public = this,
            _private = {};
        _private.cache = {};

        _public.render = function(str, data, env) {
            // 判断str参数，如str为script标签的id，则取该标签的innerHTML，再递归调用自身
            // 如str为HTML文本，则分析文本并构造渲染函数
            var fn = !/[^\w\-\.:]/.test(str) ? _private.cache[str] = _private.cache[str] || this.get(document.getElementById(str).innerHTML) : function(data, env) {
                var i, variable = [],
                    value = []; // variable数组存放变量名，对应data结构的成员变量；value数组存放各变量的值
                for (i in data) {
                    variable.push(i);
                    value.push(data[i]);
                }
                return (new Function(variable, fn.code))
                    .apply(env || data, value); // 此处的new Function是由下面fn.code产生的渲染函数；执行后即返回渲染结果HTML
            };

            fn.code = fn.code || "var $parts=[]; $parts.push('" + str
                .replace(/\\/g, '\\\\') // 处理模板中的\转义
            .replace(/[\r\t\n]/g, " ") // 去掉换行符和tab符，将模板合并为一行
            .split("<%").join("\t") // 将模板左标签<%替换为tab，起到分割作用
            .replace(/(^|%>)[^\t]*/g, function(str) {
                return str.replace(/'/g, "\\'");
            }) // 将模板中文本部分的单引号替换为\'
            .replace(/\t=(.*?)%>/g, "',$1,'") // 将模板中<%= %>的直接数据引用（无逻辑代码）与两侧的文本用'和,隔开，同时去掉了左标签产生的tab符
            .split("\t").join("');") // 将tab符（上面替换左标签产生）替换为'); 由于上一步已经把<%=产生的tab符去掉，因此这里实际替换的只有逻辑代码的左标签
            .split("%>").join("$parts.push('") // 把剩下的右标签%>（逻辑代码的）替换为"$parts.push('"
            + "'); return $parts.join('');"; // 最后得到的就是一段JS代码，保留模板中的逻辑，并依次把模板中的常量和变量压入$parts数组

            return data ? fn(data, env) : fn; // 如果传入了数据，则直接返回渲染结果HTML文本，否则返回一个渲染函数
        }
    })

})