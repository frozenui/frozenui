define("arale/sticky/1.3.1/sticky-debug", [ "$-debug" ], function(require, exports, module, undefined) {
    var $ = require("$-debug"), doc = $(document), stickyPrefix = [ "-webkit-", "-ms-", "-o-", "-moz-", "" ], guid = 0, ua = (window.navigator.userAgent || "").toLowerCase(), isIE = ua.indexOf("msie") !== -1, isIE6 = ua.indexOf("msie 6") !== -1;
    var isPositionStickySupported = checkPositionStickySupported(), isPositionFixedSupported = checkPositionFixedSupported();
    // Sticky
    // position: sticky simulator
    function Sticky(options) {
        this.options = options || {};
        this.elem = $(this.options.element);
        this.callback = options.callback || function() {};
        this.position = options.position;
        this._stickyId = guid++;
    }
    Sticky.prototype._prepare = function() {
        // save element's origin position
        var offset = this.elem.offset();
        this._originTop = offset.top;
        this._originLeft = offset.left;
        // if is fixed, force to call this_supportFixed
        if (this.position.top === Number.MAX_VALUE) {
            this._callFix = true;
            this.position.top = this._originTop;
        }
        // save element's origin style
        this._originStyles = {
            position: null,
            top: null,
            bottom: null,
            left: null
        };
        for (var style in this._originStyles) {
            if (this._originStyles.hasOwnProperty(style)) {
                this._originStyles[style] = this.elem.css(style);
            }
        }
    };
    Sticky.prototype.render = function() {
        var self = this;
        // only bind once
        if (!this.elem.length || this.elem.data("bind-sticked")) {
            return this;
        }
        this._prepare();
        // if other element change height in one page,
        // or if resize window,
        // need adjust sticky element's status
        this.adjust = function() {
            self._restore();
            var offset = self.elem.offset();
            self._originTop = offset.top;
            self._originLeft = offset.left;
            scrollFn.call(self);
        };
        var scrollFn;
        if (sticky.isPositionStickySupported && !this._callFix) {
            scrollFn = this._supportSticky;
            // set position: sticky directly
            var tmp = "";
            for (var i = 0; i < stickyPrefix.length; i++) {
                tmp += "position:" + stickyPrefix[i] + "sticky;";
            }
            if (this.position.top !== undefined) {
                tmp += "top: " + this.position.top + "px;";
            }
            if (this.position.bottom !== undefined) {
                tmp += "bottom: " + this.position.bottom + "px;";
            }
            this.elem[0].style.cssText += tmp;
            this.adjust = function() {
                scrollFn.call(self);
            };
        } else if (sticky.isPositionFixedSupported) {
            scrollFn = this._supportFixed;
        } else {
            scrollFn = this._supportAbsolute;
            // ie6
            // avoid floatImage Shake for IE6
            // see: https://github.com/lifesinger/lifesinger.
            //      github.com/blob/master/lab/2009/ie6sticked_position_v4.html
            $("<style type='text/css'> * html" + "{ background:url(null) no-repeat fixed; } </style>").appendTo("head");
        }
        // first run after document ready
        scrollFn.call(this);
        // stickyX is event namespace
        $(window).on("scroll.sticky" + this._stickyId, function() {
            if (!self.elem.is(":visible")) return;
            scrollFn.call(self);
        });
        $(window).on("resize.sticky" + this._stickyId, debounce(function() {
            self.adjust();
        }, 120));
        this.elem.data("bind-sticked", true);
        return this;
    };
    Sticky.prototype._getTopBottom = function(scrollTop, offsetTop) {
        var top;
        var bottom;
        // top is true when the distance from element to top of window <= position.top
        if (this.position.top !== undefined) {
            top = offsetTop - scrollTop <= this.position.top;
        }
        // bottom is true when the distance is from bottom of element to bottom of window <= position.bottom
        if (this.position.bottom !== undefined) {
            bottom = scrollTop + $(window).height() - offsetTop - this.elem.outerHeight() <= this.position.bottom;
        }
        return {
            top: top,
            bottom: bottom
        };
    };
    Sticky.prototype._supportFixed = function() {
        var _sticky = this.elem.data("sticked");
        var distance = this._getTopBottom(doc.scrollTop(), this._originTop);
        if (!_sticky && (distance.top !== undefined && distance.top || distance.bottom !== undefined && distance.bottom)) {
            this._addPlaceholder();
            this.elem.css($.extend({
                position: "fixed",
                left: this._originLeft
            }, distance.top ? {
                top: this.position.top
            } : {
                bottom: this.position.bottom
            }));
            this.elem.data("sticked", true);
            this.callback.call(this, true);
        } else if (_sticky && !distance.top && !distance.bottom) {
            this._restore();
        }
    };
    Sticky.prototype._supportAbsolute = function() {
        var scrollTop = doc.scrollTop();
        var _sticky = this.elem.data("sticked");
        var distance = this._getTopBottom(scrollTop, this.elem.offset().top);
        if (distance.top || distance.bottom || this._callFix) {
            // sticky status change only one time
            if (!_sticky) {
                this._addPlaceholder();
                this.elem.data("sticked", true);
                this.callback.call(this, true);
            }
            // update element's position
            this.elem.css({
                position: "absolute",
                top: this._callFix ? this._originTop + scrollTop : distance.top ? this.position.top + scrollTop : scrollTop + $(window).height() - this.position.bottom - this.elem.outerHeight()
            });
        } else if (_sticky && !distance.top && !distance.bottom) {
            this._restore();
        }
    };
    Sticky.prototype._supportSticky = function() {
        // sticky status change for callback
        var _sticky = this.elem.data("sticked");
        var distance = this._getTopBottom(doc.scrollTop(), this.elem.offset().top);
        if (!_sticky && (distance.top !== undefined && distance.top || distance.bottom !== undefined && distance.bottom)) {
            this.elem.data("sticked", true);
            this.callback.call(this, true);
        } else if (_sticky && !distance.top && !distance.bottom) {
            // don't need restore style and remove placeholder
            this.elem.data("sticked", false);
            this.callback.call(this, false);
        }
    };
    Sticky.prototype._restore = function() {
        this._removePlaceholder();
        // set origin style
        this.elem.css(this._originStyles);
        this.elem.data("sticked", false);
        this.callback.call(this, false);
    };
    // need placeholder when: 1) position: static or relative, but expect for display != block
    Sticky.prototype._addPlaceholder = function() {
        var need = false;
        var position = this.elem.css("position");
        if (position === "static" || position === "relative") {
            need = true;
        }
        if (this.elem.css("display") !== "block") {
            need = false;
        }
        if (need) {
            this._placeholder = $('<div style="visibility:hidden;margin:0;padding:0;"></div>');
            this._placeholder.width(this.elem.outerWidth(true)).height(this.elem.outerHeight(true)).css("float", this.elem.css("float")).insertAfter(this.elem);
        }
    };
    Sticky.prototype._removePlaceholder = function() {
        // remove placeholder if has
        this._placeholder && this._placeholder.remove();
    };
    Sticky.prototype.destroy = function() {
        this._restore();
        this.elem.data("bind-sticked", false);
        $(window).off("scroll.sticky" + this._stickyId);
        $(window).off("resize.sticky" + this._stickyId);
    };
    // APIs
    // ---
    module.exports = sticky;
    function sticky(elem, position, callback) {
        if (!$.isPlainObject(position)) {
            position = {
                top: position
            };
        }
        if (position.top === undefined && position.bottom === undefined) {
            position.top = 0;
        }
        return new Sticky({
            element: elem,
            position: position,
            callback: callback
        }).render();
    }
    // sticky.stick(elem, position, callback)
    sticky.stick = sticky;
    // sticky.fix(elem)
    sticky.fix = function(elem) {
        return new Sticky({
            element: elem,
            // position.top is Number.MAX_VALUE means fixed
            position: {
                top: Number.MAX_VALUE
            }
        }).render();
    };
    // for tc
    sticky.isPositionStickySupported = isPositionStickySupported;
    sticky.isPositionFixedSupported = isPositionFixedSupported;
    // Helper
    // ---
    function checkPositionFixedSupported() {
        return !isIE6;
    }
    function checkPositionStickySupported() {
        if (isIE) return false;
        var container = doc[0].body;
        if (doc[0].createElement && container && container.appendChild && container.removeChild) {
            var isSupported, el = doc[0].createElement("div"), getStyle = function(st) {
                if (window.getComputedStyle) {
                    return window.getComputedStyle(el).getPropertyValue(st);
                } else {
                    return el.currentStyle.getAttribute(st);
                }
            };
            container.appendChild(el);
            for (var i = 0; i < stickyPrefix.length; i++) {
                el.style.cssText = "position:" + stickyPrefix[i] + "sticky;visibility:hidden;";
                if (isSupported = getStyle("position").indexOf("sticky") !== -1) break;
            }
            el.parentNode.removeChild(el);
            return isSupported;
        }
    }
    // https://github.com/jashkenas/underscore/blob/master/underscore.js#L699
    function getTime() {
        return (Date.now || function() {
            return new Date().getTime();
        })();
    }
    function debounce(func, wait, immediate) {
        var timeout, args, context, timestamp, result;
        return function() {
            context = this;
            args = arguments;
            timestamp = getTime();
            var later = function() {
                var last = getTime() - timestamp;
                if (last < wait) {
                    timeout = setTimeout(later, wait - last);
                } else {
                    timeout = null;
                    if (!immediate) result = func.apply(context, args);
                }
            };
            var callNow = immediate && !timeout;
            if (!timeout) {
                timeout = setTimeout(later, wait);
            }
            if (callNow) result = func.apply(context, args);
            return result;
        };
    }
});
