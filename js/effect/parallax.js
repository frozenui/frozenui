/**
 * @author  : hahnzhu
 * @version : 0.2
 * @date    : 2014-09-17
 * @repository: https://github.com/hahnzhu/parallax.js
 */

if (typeof Zepto === 'undefined') { throw new Error('Parallax.js\'s script requires Zepto') }

!function($) {

    'use strict';

    var startPos,           // 开始触摸点(X/Y坐标)
        endPos,             // 结束触摸点(X/Y坐标)
        stage,              // 用于标识 onStart/onMove/onEnd 流程的第几阶段，解决 onEnd 重复调用
        offset,             // 偏移距离
        direction,          // 翻页方向

        curPage,            // page 当前页
        pageCount,          // page 数量
        pageWidth,          // page 宽度
        pageHeight,         // page 高度

        $pages,             // page 外部 wrapper
        $pageArr,           // page 列表
        $animateDom,        // 所有设置 [data-animate] 的动画元素

        options,            // 最终配置项

        touchDown = false,  // 手指已按下 (取消触摸移动时 transition 过渡)
        movePrevent = true; // 阻止滑动 (动画过程中手指按下不可阻止)



    // 定义实例方法 (jQuery Object Methods)
    // ==============================

    $.fn.parallax = function(opts) {
        options = $.extend({}, $.fn.parallax.defaults, opts);

        return this.each(function() {
            $pages = $(this);
            $pageArr = $pages.find('.page');

            init();     // 执行初始化操作
        })
    }


    // 定义配置选项
    // ==============================

    $.fn.parallax.defaults = {

        direction: 'vertical',  // 滚动方向, "horizontal/vertical"
        swipeAnim: 'default',   // 滚动动画，"default/cover"
        drag: true,             // 是否有拖拽效果
        loading: false,         // 是否需要加载页
        indicator: false,       // 是否要有指示导航
        arrow: false,           // 是否要有箭头
        onchange: function(){}, // 回调函数
        orientationchange: function(){} // 屏幕翻转

    };



    function init() {
        
        // 优先显示加载图
        if (options.loading) {
            $('.wrapper').append('<div class="parallax-loading"><i class="ui-loading ui-loading-white"></i></div>');
        } else {
            // 允许触摸滑动
            movePrevent = false;
        }

        curPage     = 0;
        direction   = 'stay';
        pageCount   = $pageArr.length;              // 获取 page 数量
        pageWidth   = $(window).width();            // 获取手机屏幕宽度
        pageHeight  = $(window).height();           // 获取手机屏幕高度
        $animateDom = $('[data-animation]');        // 获取动画元素节点

        for (var i=0; i<pageCount; i++) {          // 批量添加 data-id
            $($pageArr[i]).attr('data-id', i+1);
        }

        $pages.addClass(options.direction)      // 添加 direction 类
                .addClass(options.swipeAnim);   // 添加 swipeAnim 类

        $pageArr.css({                          // 初始化 page 宽高
            'width': pageWidth + 'px',
            'height': pageHeight + 'px'
        });

        options.direction === 'horizontal' ?     // 设置 wrapper 宽高
            $pages.css('width', pageWidth * $pageArr.length) :
            $pages.css('height', pageHeight * $pageArr.length);


        if (options.swipeAnim === 'cover') {        // 重置 page 的宽高(因为这两个效果与 default 实现方式截然不同)
            $pages.css({
                'width': pageWidth,
                'height': pageHeight
            });
            $pageArr[0].style.display = 'block'; // 不能通过 css 来定义，不然在 Android 和 iOS 下会有 bug
        }


        if (!options.loading) {
            $($pageArr[curPage]).addClass('current');
            options.onchange(curPage, $pageArr[curPage], direction);
            animShow();
        }

    }



    // 手指第一次按下时调用
    // 提供的接口：
    //  1. 初始位置 startPos
    // ==============================

    function onStart(e) {

        if (movePrevent === true) {
            event.preventDefault();
            return false;
        }
        
        touchDown = true;   // 手指已按下

        options.direction === 'horizontal' ? startPos = e.pageX : startPos = e.pageY;

        if (options.swipeAnim === 'default') {
            $pages.addClass('drag');    // 阻止过渡效果

            offset = $pages.css("-webkit-transform")
                        .replace("matrix(", "")
                        .replace(")", "")
                        .split(",");

            options.direction === 'horizontal' ?
                offset = parseInt(offset[4]) :
                offset = parseInt(offset[5]);
        }

        if ((options.swipeAnim === 'cover' && options.drag)) {
            $pageArr.addClass('drag');
        }

        stage = 1;
    }


    // 移动过程中调用（手指没有放开）
    // 提供的接口：
    //  1. 实时变化的 endPos
    //  2. 添加方向类 forward/backward
    // ==============================

    function onMove(e) {

        if(movePrevent === true || touchDown === false){
            event.preventDefault();
            return false;
        }
        event.preventDefault();
        options.direction === 'horizontal' ? endPos = e.pageX : endPos = e.pageY;

        addDirecClass();    // 添加方向类

        if (options.drag && !isHeadOrTail()) { // 拖拽时调用
            dragToMove();
        }
        stage = 2;
    }




    // 手指放开后调用
    // 提供的接口：
    //  1. 获得最后的坐标信息 endPos
    //
    // 执行的操作：
    //  1、将页面归位（前后一页或者原位）
    //  2、为 indicator 添加 current 类
    // ==============================

    function onEnd(e) {

        if (movePrevent === true || stage !== 2){
            // event.preventDefault();
            // return false;
        } else {
            touchDown = false;
            options.direction === 'horizontal' ? endPos = e.pageX : endPos = e.pageY;


            if (options.swipeAnim === 'default' && !isHeadOrTail()) {
                $pages.removeClass('drag');

                if (Math.abs(endPos-startPos) <= 50) {
                    animatePage(curPage);
                    direction = 'stay';
                }
                else if (endPos >= startPos) {
                    animatePage(curPage-1);
                    direction = 'backward';
                }
                else if (endPos < startPos) {
                    animatePage(curPage+1);
                    direction = 'forward';
                }
            }



            else if (options.swipeAnim === 'cover' && !isHeadOrTail()){

                if (Math.abs(endPos-startPos) <= 50 && endPos >= startPos && options.drag) {
                    animatePage(curPage, 'keep-backward');
                    direction = 'stay';
                }
                else if (Math.abs(endPos-startPos) <= 50 && endPos < startPos && options.drag) {
                    animatePage(curPage, 'keep-forward');
                    direction = 'stay';
                }
                else if (Math.abs(endPos-startPos) > 50 && endPos >= startPos && options.drag) {
                    animatePage(curPage-1, 'backward');
                    direction = 'backward';
                }
                else if (Math.abs(endPos-startPos) > 50 && endPos < startPos && options.drag) {
                    animatePage(curPage+1, 'forward')
                    direction = 'forward';
                }
                else if (Math.abs(endPos-startPos) > 50 && endPos >= startPos && !options.drag) {
                    animatePage(curPage-1, 'backward');
                    direction = 'backward';
                }
                else if (Math.abs(endPos-startPos) > 50 && endPos < startPos && !options.drag) {
                    animatePage(curPage+1, 'forward')
                    direction = 'forward';
                }
            }


            if (options.indicator) {
                $($('.parallax-h-indicator ul li, .parallax-v-indicator ul li').removeClass('current').get(curPage)).addClass('current');
            }
            stage = 3;
        }
        
    }



    // 拖拽时调用
    // ==============================

    function dragToMove() {

        if (options.swipeAnim === 'default') {

            var temp = offset + endPos - startPos;

            options.direction === 'horizontal' ?
                $pages.css("-webkit-transform", "matrix(1, 0, 0, 1, " + temp + ", 0)") :
                $pages.css("-webkit-transform", "matrix(1, 0, 0, 1, 0, " + temp + ")");
        }



        else if (options.swipeAnim === 'cover') {

            var temp      =  endPos - startPos,
                $prevPage = $($pageArr[curPage-1]),
                $nextPage = $($pageArr[curPage+1]);

            $($pageArr).css({'z-index': 0});

            if (options.direction === 'horizontal' && endPos >= startPos) {
                $prevPage.css({
                    'z-index': 2,
                    'display': 'block',
                    '-webkit-transform': 'translateX('+(temp-pageWidth) +'px)'
                })
            }
            else if (options.direction === 'horizontal' && endPos < startPos) {
                $nextPage.css({
                    'z-index': 2,
                    'display': 'block',
                    '-webkit-transform': 'translateX('+(pageWidth+temp) +'px)'
                })
            }
            else if (options.direction === 'vertical' && endPos >= startPos) {
                $prevPage.css({
                    'z-index': 2,
                    'display': 'block',
                    '-webkit-transform': 'translateY('+ (temp-pageHeight) +'px)'
                })
            }
            else if (options.direction === 'vertical' && endPos < startPos) {
                $nextPage.css({
                    'z-index': 2,
                    'display': 'block',
                    '-webkit-transform': 'translateY('+ (pageHeight+temp) +'px)'
                })
            }
        }
     
    }




    // 拖拽结束后调用
    // ==============================

    function animatePage(newPage, action) {

        curPage = newPage;

        if (options.swipeAnim === 'default') {

            var newOffset = 0;
            options.direction === 'horizontal' ?
                newOffset = newPage * (-pageWidth) :
                newOffset = newPage * (-pageHeight);

            options.direction === 'horizontal' ?
                $pages.css({'-webkit-transform': 'matrix(1, 0, 0, 1, ' + newOffset + ', 0)'}) :
                $pages.css({'-webkit-transform': 'matrix(1, 0, 0, 1, 0, ' + newOffset + ')'});

        }



        else if (options.swipeAnim === 'cover') {

            if (action === 'keep-backward' && options.drag) {
                $pageArr.removeClass('drag');
                options.direction === 'horizontal' ?
                $($pageArr[curPage-1]).css({'-webkit-transform': 'translateX(-100%)'}) :
                $($pageArr[curPage-1]).css({'-webkit-transform': 'translateY(-100%)'})
            }
            else if (action === 'keep-forward' && options.drag) {
                $pageArr.removeClass('drag');
                options.direction === 'horizontal' ?
                $($pageArr[curPage+1]).css({'-webkit-transform': 'translateX(100%)'}) :
                $($pageArr[curPage+1]).css({'-webkit-transform': 'translateY(100%)'})
            }
            else if (action === 'forward' && options.drag) {
                $pageArr.removeClass('drag');
                $($pageArr[curPage-1]).addClass('back'); // 纯粹为了在动画结束后隐藏，不涉及 CSS 中定义的动画
                $pageArr[curPage].style.webkitTransform = 'translate(0, 0)';
            }
            else if (action === 'backward' && options.drag) {
                $pageArr.removeClass('drag');
                $($pageArr[curPage+1]).addClass('back');
                $pageArr[curPage].style.webkitTransform = 'translate(0, 0)';
            }
            else if (action === 'forward' && !options.drag) {
                $pages.addClass('animate');
                $($pageArr[curPage-1]).addClass('back');
                $($pageArr[curPage]).addClass('front').show();
            }
            else if (action === 'backward' && !options.drag) {
                $pages.addClass('animate');
                $($pageArr[curPage+1]).addClass('back');
                $($pageArr[curPage]).addClass('front').show();
            }

        }

        movePrevent = true;         // 动画过程中不可移动
        setTimeout(function() {
            movePrevent = false;
        }, 300);
    }





    // 添加 forward / backward 状态类
    // ==============================

    function addDirecClass() {
        if(options.direction === 'horizontal'){
            if (endPos >= startPos) {
                $pages.removeClass('forward').addClass('backward');
            } else if (endPos < startPos) {
                $pages.removeClass('backward').addClass('forward');
            }
        } else {
            if (endPos >= startPos) {
                $pages.removeClass('forward').addClass('backward');
            } else if (endPos < startPos) {
                $pages.removeClass('backward').addClass('forward');
            }
        }
    }





    // 在第一页向前翻和末页前后翻都不允许
    // ==============================

    function isHeadOrTail() {
        if (options.direction === 'horizontal') {
            if ((endPos >= startPos && curPage === 0) ||
                (endPos <= startPos && curPage === pageCount-1)) {
                return true;
            }
        } else if ((endPos >= startPos && curPage === 0) ||
                (endPos <= startPos && curPage === pageCount-1)) {
            return true;
        }
        return false;
    }





    // 当前页动画显示
    // ==============================

    function animShow() {
        
        $animateDom.css({'-webkit-animation': 'none'});
        
        $('.current [data-animation]').each(function(index, element){
            var $element    = $(element),
                $animation  = $element.attr('data-animation'),
                $duration   = $element.attr('data-duration') || 500,
                $timfunc    = $element.attr('data-timing-function') || 'ease',
                $delay      = $element.attr('data-delay') ?  $element.attr('data-delay') : 0;


            if ($animation === 'followSlide') {
                
                if (options.direction === 'horizontal' && direction === 'forward') {
                    $animation = 'followSlideToLeft';
                }
                else if (options.direction === 'horizontal' && direction === 'backward') {
                    $animation = 'followSlideToRight';
                }
                else if (options.direction === 'vertical' && direction === 'forward') {
                    $animation = 'followSlideToTop';
                }
                else if (options.direction === 'vertical' && direction === 'backward') {
                    $animation = 'followSlideToBottom';
                }
                
            }

            $element.css({
                '-webkit-animation': $animation +' '+ $duration + 'ms ' + $timfunc + ' '+ $delay + 'ms both',
                'animation': $animation +' '+ $duration + 'ms ' + $timfunc + ' '+ $delay + 'ms both'
            })
        });
    }





    // 事件代理绑定
    // ==============================

    $(document)
        .on('touchstart', '.page', function(e) {
            onStart(e.changedTouches[0]);
        })
        .on('touchmove', '.page', function(e) {
            onMove(e.changedTouches[0]);
        })
        .on('touchend', '.page', function(e) {
            onEnd(e.changedTouches[0]);
        })
        .on('webkitAnimationEnd webkitTransitionEnd', '.pages', function() {

            if (direction !== 'stay') {
                setTimeout(function() {
                    $(".back").hide().removeClass("back");
                    $(".front").show().removeClass("front");
                    $pages.removeClass('forward backward animate');
                }, 10);
    
                $($pageArr.removeClass('current').get(curPage)).addClass('current');
                options.onchange(curPage, $pageArr[curPage], direction);  // 执行回调函数
                animShow();
            }
            
        });

    
    $('.page *').on('webkitAnimationEnd', function() {
        event.stopPropagation();    // 事件代理无法阻止冒泡，所以要绑定取消
    })



    // 页面（含资源）加载完成
    // ==============================

    $(window).on("load", function() {

        if (options.loading) {
            $(".parallax-loading").remove();
            movePrevent = false;
            $($pageArr[curPage]).addClass('current');
            options.onchange(curPage, $pageArr[curPage], direction);
            animShow();
        }

        if (options.indicator) {
            movePrevent = false;
            
            var temp = options.direction === 'horizontal' ? 'parallax-h-indicator' : 'parallax-v-indicator'; 

            $('.wrapper').append('<div class='+temp+'></div>');
            var lists = '<ul>';
            for (var i=1; i<=pageCount; i++) {
                if (i===1) {
                    lists += '<li class="current">'+i+'</li>'
                } else {
                    lists += '<li>'+i+'</li>'
                }
            }
            lists += '</ul>';
            $('.'+temp).append(lists);
        }

        if (options.arrow) {
            $pageArr.append('<span class="parallax-arrow"></span>');
            $($pageArr[pageCount-1]).find('.parallax-arrow').remove();
        }
    });
    
    
    
    
    // 翻转屏幕提示
    // ============================== 
    
    window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
        if (window.orientation === 180 || window.orientation === 0) {  
            options.orientationchange('portrait');
        }  
        if (window.orientation === 90 || window.orientation === -90 ){  
            options.orientationchange('landscape') 
        }   
    }, false);



}(Zepto)