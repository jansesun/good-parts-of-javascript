//@author jansesun t.qq.com/jansesun

/**
    A class should be created regularly
**/

/** for examaple **/
// packed by Seajs
define(function(require, exports, module) {
    //import jQeury
    $ = require('jquery');
    
    /**
        @description {Class} ClassA example class
        @param {String} id exampled required parameters
        @param {Object} opt optional parameters
        @config {Function} call callback function
        @example 
            var classA = new ClassA('id');
            var classA = new ClassA('id', {
                call: function() {
                    // your code
                }
            });
    **/
    function ClassA(id, opt) {
        // store 'this' object
        var Self = this,
        // Compatible optional parameters
        opt = opt || {}; 
    
        // private varieble
        Self._body = $(id);
    
        Self._init();
    
        // execute callback function
        if(opt.call) {
            opt.call();
        }
    };
    
    // exports Class
    module.exports = ClassA;
    /**
        Class prototype
    **/
    ClassA.prototype = {
        /**
            @description add Event
        **/
        _addEvent: function() {
            var Self = this;
    
            // avoid events added repeatedly
            if(Self._eventAdded) {
                return false;
            }
            Self._eventAdded = 1;
    
            // add an event processor to current or future matched elements
            $(Self._list, 'li').live('click', function(){
                // your code
            });
    
            // add one or more event processors to current or future childern elements of matched elements
            $(Self._list).delegate('li', 'click', function(){
                // your code
            });
        },
        /**
            @description Class interface function
        **/
        _init: function() {
            var Self = this;
    
            // find DOM elements
            Self._list = Self.$('ul');
    
            // attact event
            Self._addEvent();
        },
        /**
            @description avoid global traversal DOM tree
            @param {String} selector CSS selector
            @example
                var li = classA.$('li');
        **/
        $: function(selector) {
            var Self = this;
            return $(Self._body, selector)[0];
        }
    };
});
 
