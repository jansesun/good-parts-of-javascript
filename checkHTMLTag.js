//@author jansesun t.qq.com/jansesun


/**
 * @description check if HTML tags are matched
 * @param {String} str string to be checked
 * @param {Object} opt optional config
 * @return {Boolean} true when html tags matched, false otherwise
 * @example
 *    checkHTMLTags('a');
 * @perfomance
 *  when the string is great as 10 millions, call this function will bring out the browser crashing.
 * no use of replace of string can void this problem 
 * /
function checkHTMLTags(str, opt) {
    var tags, opt, curStr = str;
    console.time('checkHTMLTag');
    tags = ['div', 'a', 'span', 'p', 'li', 'ul'];
	opt = opt || {},
    isMatched = true;
	foreach(tags, function(o, i){
        // the regular expression of start tags
        var regStart = new RegExp(['<', o ,'\\b[^>]*>'].join(''), 'ig'),
        // the regular expression of close tags
        regEnd = new RegExp(['<\/', o, '>'].join(''), 'ig'),
        // counters of start tags and close ones
        startCnt = 0, endCnt = 0,
        // arrays of start tags and close ones
        startTags, endTags;;
        // break if no tags
        if(!curStr.match(/<[^>]*>/)) {
        	return 1;
        }
		// replace and count start tags
		startTags = curStr.replace(regStart) || [];
		startCnt = startTags.length;
		if(startCnt) {
			curStr = curStr.replace(regStart, '');
		}
		// replace and count close tags
		endTags = curStr.replace(regEnd) || [];
		endCnt = endTags.length;
		if(endCnt) {
			curStr = curStr.replace(regEnd, '');
		}
		// set flag and break if unmatched
		if(startCnt != endCnt) {
            isMatched = false;
            return 1;
		}
	});
    return isMatched;
}
