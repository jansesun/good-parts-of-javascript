//@author jansesun t.qq.com/jansesun

/**
    @description create a string through repeating a character by n times
    @idea join an array with length of n+1 with the character
    @param {Number} n times
    @param {String} char character
    @return {String} expected string
    @example
        var myStr = createString(3, 'a'); // myStr = 'aaa'
**/
var createString = function(n, char) {
    var arr = new Array(n + 1);
    return arr.join(char);
}
