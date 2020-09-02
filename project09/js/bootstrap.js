/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2017 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

/*!
 * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=cdd5b52756716c10c7372882e242ae2d)
 * Config saved to config.json and https://gist.github.com/cdd5b52756716c10c7372882e242ae2d
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(t){"use strict";var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1||e[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var n=t(this),i=n.data("bs.alert");i||n.data("bs.alert",i=new a(this)),"string"==typeof e&&i[e].call(n)})}var n='[data-dismiss="alert"]',a=function(e){t(e).on("click",n,this.close)};a.VERSION="3.3.7",a.TRANSITION_DURATION=150,a.prototype.close=function(e){function n(){o.detach().trigger("closed.bs.alert").remove()}var i=t(this),s=i.attr("data-target");s||(s=i.attr("href"),s=s&&s.replace(/.*(?=#[^\s]*$)/,""));var o=t("#"===s?[]:s);e&&e.preventDefault(),o.length||(o=i.closest(".alert")),o.trigger(e=t.Event("close.bs.alert")),e.isDefaultPrevented()||(o.removeClass("in"),t.support.transition&&o.hasClass("fade")?o.one("bsTransitionEnd",n).emulateTransitionEnd(a.TRANSITION_DURATION):n())};var i=t.fn.alert;t.fn.alert=e,t.fn.alert.Constructor=a,t.fn.alert.noConflict=function(){return t.fn.alert=i,this},t(document).on("click.bs.alert.data-api",n,a.prototype.close)}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var a=t(this),i=a.data("bs.button"),s="object"==typeof e&&e;i||a.data("bs.button",i=new n(this,s)),"toggle"==e?i.toggle():e&&i.setState(e)})}var n=function(e,a){this.$element=t(e),this.options=t.extend({},n.DEFAULTS,a),this.isLoading=!1};n.VERSION="3.3.7",n.DEFAULTS={loadingText:"loading..."},n.prototype.setState=function(e){var n="disabled",a=this.$element,i=a.is("input")?"val":"html",s=a.data();e+="Text",null==s.resetText&&a.data("resetText",a[i]()),setTimeout(t.proxy(function(){a[i](null==s[e]?this.options[e]:s[e]),"loadingText"==e?(this.isLoading=!0,a.addClass(n).attr(n,n).prop(n,!0)):this.isLoading&&(this.isLoading=!1,a.removeClass(n).removeAttr(n).prop(n,!1))},this),0)},n.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var n=this.$element.find("input");"radio"==n.prop("type")?(n.prop("checked")&&(t=!1),e.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==n.prop("type")&&(n.prop("checked")!==this.$element.hasClass("active")&&(t=!1),this.$element.toggleClass("active")),n.prop("checked",this.$element.hasClass("active")),t&&n.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var a=t.fn.button;t.fn.button=e,t.fn.button.Constructor=n,t.fn.button.noConflict=function(){return t.fn.button=a,this},t(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(n){var a=t(n.target).closest(".btn");e.call(a,"toggle"),t(n.target).is('input[type="radio"], input[type="checkbox"]')||(n.preventDefault(),a.is("input,button")?a.trigger("focus"):a.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(e){t(e.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(e.type))})}(jQuery),+function(t){"use strict";function e(e){var n=e.attr("data-target");n||(n=e.attr("href"),n=n&&/#[A-Za-z]/.test(n)&&n.replace(/.*(?=#[^\s]*$)/,""));var a=n&&t(n);return a&&a.length?a:e.parent()}function n(n){n&&3===n.which||(t(i).remove(),t(s).each(function(){var a=t(this),i=e(a),s={relatedTarget:this};i.hasClass("open")&&(n&&"click"==n.type&&/input|textarea/i.test(n.target.tagName)&&t.contains(i[0],n.target)||(i.trigger(n=t.Event("hide.bs.dropdown",s)),n.isDefaultPrevented()||(a.attr("aria-expanded","false"),i.removeClass("open").trigger(t.Event("hidden.bs.dropdown",s)))))}))}function a(e){return this.each(function(){var n=t(this),a=n.data("bs.dropdown");a||n.data("bs.dropdown",a=new o(this)),"string"==typeof e&&a[e].call(n)})}var i=".dropdown-backdrop",s='[data-toggle="dropdown"]',o=function(e){t(e).on("click.bs.dropdown",this.toggle)};o.VERSION="3.3.7",o.prototype.toggle=function(a){var i=t(this);if(!i.is(".disabled, :disabled")){var s=e(i),o=s.hasClass("open");if(n(),!o){"ontouchstart"in document.documentElement&&!s.closest(".navbar-nav").length&&t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click",n);var r={relatedTarget:this};if(s.trigger(a=t.Event("show.bs.dropdown",r)),a.isDefaultPrevented())return;i.trigger("focus").attr("aria-expanded","true"),s.toggleClass("open").trigger(t.Event("shown.bs.dropdown",r))}return!1}},o.prototype.keydown=function(n){if(/(38|40|27|32)/.test(n.which)&&!/input|textarea/i.test(n.target.tagName)){var a=t(this);if(n.preventDefault(),n.stopPropagation(),!a.is(".disabled, :disabled")){var i=e(a),o=i.hasClass("open");if(!o&&27!=n.which||o&&27==n.which)return 27==n.which&&i.find(s).trigger("focus"),a.trigger("click");var r=" li:not(.disabled):visible a",l=i.find(".dropdown-menu"+r);if(l.length){var d=l.index(n.target);38==n.which&&d>0&&d--,40==n.which&&d<l.length-1&&d++,~d||(d=0),l.eq(d).trigger("focus")}}}};var r=t.fn.dropdown;t.fn.dropdown=a,t.fn.dropdown.Constructor=o,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=r,this},t(document).on("click.bs.dropdown.data-api",n).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",s,o.prototype.toggle).on("keydown.bs.dropdown.data-api",s,o.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",o.prototype.keydown)}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var a=t(this),i=a.data("bs.tab");i||a.data("bs.tab",i=new n(this)),"string"==typeof e&&i[e]()})}var n=function(e){this.element=t(e)};n.VERSION="3.3.7",n.TRANSITION_DURATION=150,n.prototype.show=function(){var e=this.element,n=e.closest("ul:not(.dropdown-menu)"),a=e.data("target");if(a||(a=e.attr("href"),a=a&&a.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var i=n.find(".active:last a"),s=t.Event("hide.bs.tab",{relatedTarget:e[0]}),o=t.Event("show.bs.tab",{relatedTarget:i[0]});if(i.trigger(s),e.trigger(o),!o.isDefaultPrevented()&&!s.isDefaultPrevented()){var r=t(a);this.activate(e.closest("li"),n),this.activate(r,r.parent(),function(){i.trigger({type:"hidden.bs.tab",relatedTarget:e[0]}),e.trigger({type:"shown.bs.tab",relatedTarget:i[0]})})}}},n.prototype.activate=function(e,a,i){function s(){o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),r?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu").length&&e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),i&&i()}var o=a.find("> .active"),r=i&&t.support.transition&&(o.length&&o.hasClass("fade")||!!a.find("> .fade").length);o.length&&r?o.one("bsTransitionEnd",s).emulateTransitionEnd(n.TRANSITION_DURATION):s(),o.removeClass("in")};var a=t.fn.tab;t.fn.tab=e,t.fn.tab.Constructor=n,t.fn.tab.noConflict=function(){return t.fn.tab=a,this};var i=function(n){n.preventDefault(),e.call(t(this),"show")};t(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',i).on("click.bs.tab.data-api",'[data-toggle="pill"]',i)}(jQuery),+function(t){"use strict";function e(e){var n,a=e.attr("data-target")||(n=e.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,"");return t(a)}function n(e){return this.each(function(){var n=t(this),i=n.data("bs.collapse"),s=t.extend({},a.DEFAULTS,n.data(),"object"==typeof e&&e);!i&&s.toggle&&/show|hide/.test(e)&&(s.toggle=!1),i||n.data("bs.collapse",i=new a(this,s)),"string"==typeof e&&i[e]()})}var a=function(e,n){this.$element=t(e),this.options=t.extend({},a.DEFAULTS,n),this.$trigger=t('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};a.VERSION="3.3.7",a.TRANSITION_DURATION=350,a.DEFAULTS={toggle:!0},a.prototype.dimension=function(){var t=this.$element.hasClass("width");return t?"width":"height"},a.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var e,i=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(i&&i.length&&(e=i.data("bs.collapse"),e&&e.transitioning))){var s=t.Event("show.bs.collapse");if(this.$element.trigger(s),!s.isDefaultPrevented()){i&&i.length&&(n.call(i,"hide"),e||i.data("bs.collapse",null));var o=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[o](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var r=function(){this.$element.removeClass("collapsing").addClass("collapse in")[o](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!t.support.transition)return r.call(this);var l=t.camelCase(["scroll",o].join("-"));this.$element.one("bsTransitionEnd",t.proxy(r,this)).emulateTransitionEnd(a.TRANSITION_DURATION)[o](this.$element[0][l])}}}},a.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var n=this.dimension();this.$element[n](this.$element[n]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var i=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return t.support.transition?void this.$element[n](0).one("bsTransitionEnd",t.proxy(i,this)).emulateTransitionEnd(a.TRANSITION_DURATION):i.call(this)}}},a.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},a.prototype.getParent=function(){return t(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(t.proxy(function(n,a){var i=t(a);this.addAriaAndCollapsedClass(e(i),i)},this)).end()},a.prototype.addAriaAndCollapsedClass=function(t,e){var n=t.hasClass("in");t.attr("aria-expanded",n),e.toggleClass("collapsed",!n).attr("aria-expanded",n)};var i=t.fn.collapse;t.fn.collapse=n,t.fn.collapse.Constructor=a,t.fn.collapse.noConflict=function(){return t.fn.collapse=i,this},t(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(a){var i=t(this);i.attr("data-target")||a.preventDefault();var s=e(i),o=s.data("bs.collapse"),r=o?"toggle":i.data();n.call(s,r)})}(jQuery),+function(t){"use strict";function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var n in e)if(void 0!==t.style[n])return{end:e[n]};return!1}t.fn.emulateTransitionEnd=function(e){var n=!1,a=this;t(this).one("bsTransitionEnd",function(){n=!0});var i=function(){n||t(a).trigger(t.support.transition.end)};return setTimeout(i,e),this},t(function(){t.support.transition=e(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){return t(e.target).is(this)?e.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery);