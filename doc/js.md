js规范
===
1. 基本规范  
http://alloyteam.github.io/CodeGuide/#javascript

2. 注释规范  
http://yuri4ever.github.io/jsdoc/

3. ui组件规范  
  - 组件统一采用`core.js`里面的`defineComponent(name, object, superClass)`方法来定义  
    `name`是组件名，`object`是组件的原型，`superClass`是组件的父类，默认是Component基类
    
  - 基类`Component`定义了一些组件的常用方法

  - 组件定以后会挂到`$.fn`上
