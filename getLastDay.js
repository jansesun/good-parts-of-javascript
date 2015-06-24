//@author jansesun t.qq.com/jansesun


/**
    @description get last day of given month
    @traditional idea
    @param {Object} opt optional parameters
    @config {Number (started from 0)} month given month, with current month as default value
    @config {Number} year given year, with current year as default value
    @return (Number) last day of given month
    @example 
        var lastDay = getLastDay({
            month: 0,
            year: 2013
        }); // lastDay = 31
        var lasrDay = getLastDay();
**/
var getLastDay = function(opt) {
    // get current date
    var curDate = new Date(),
    opt = opt || {},

    // days of every month
    days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],    
    
    // given year
    year = opt.year || curDate.getYear(),
    
    // given month
    month = isUndefined(opt.month)? curDate.getMonth() : opt.month;
    
    // 29 days in February of a leap year
    if(isLeap(year)) {
        days[1] = 29;
    }

    return days[month];
};

/**
    @description get last day of given month
    @idea last day of given month is yesterday of the first day of next month
    @param {Object} opt optional parameters
    @config {Number (started from 0)} month given month, with current month as default value
    @config {Number} year given year, with current year as default value
    @return (Number) last day of given month
    @example 
        var lastDay = getLastDay({
            month: 0,
            year: 2013
        }); // lastDay = 31
        var lasrDay = getLastDay();
**/
var getLastDay = function(opt) {
     // get current date
    var curDate = new Date(), month;
    opt = opt || {};
    
    // given month
    month = isUndefined(opt.month)? curDate.getMonth() : opt.month;

    // milliseconds of one day
    ONEDAY = 86400000;
    if(opt.year) {
        curDate.setYear(opt.year);
    }

    // set curDate to the first day of next month
    curDate.setMonth(month + 1);
    curDate.setDate(1);

    // get the yesterday of curDate
    curDate.setTime(curDate.getTime() - ONEDAY);

    // return the lastDay of given month
    return curDate.getDate();
};
/**
    @description get last day of given month
    @idea get the yesterday of the first day of next month by setDate(0)
    @param {Object} opt optional parameters
    @config {Number (started from 0)} month given month, with current month as default value
    @config {Number} year given year, with current year as default value
    @return (Number) last day of given month
    @example 
        var lastDay = getLastDay({
            month: 0,
            year: 2013
        }); // lastDay = 31
        var lasrDay = getLastDay();
**/
var getLastDay = function(opt) {
    var curDate = new Date(), month;
    opt = opt || {};
    // given month
    month = opt.month !== undefined ? opt.month : curDate.getMonth();
    if(opt.year !== undefined) {
        curDate.setYear(opt.year);
    }
    curDate.setMonth(month + 1);
    // set curDate to the day before the first day of next month
    curDate.setDate(0);
    return curDate.getDate();
};
/**
    @description judge if a variable is undefined
    @param {} o
    @return {Boolean} true when the variable is not defined, false when the variable is defined
    @example 
        if(isUndefined(opt.month)){
            // your code
        }
**/

var isUndefined = function(o) {
    return o === undefined;
};
/**
    @description judge if a year is leap
    @idea a year mod 400 is 0 or mod 4 is 0 and mod 100 not 0 is leap
    @param {Number} year
    @return {Boolean} true when the year is leap, false or 0 when the year is not leap
    @example 
        if(isLeap(2012)){
            // your code
        }
**/
var isLeap = function(year) {
    return !(year % 400) || year % 100 && !(year % 4);
}
