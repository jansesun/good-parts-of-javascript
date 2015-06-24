/**
 * @description 是否以某个子串打头
 * @param {String} str 子串
 * @return {Boolean}
 */
String.prototype.startWith = String.prototype.startWith || function(str) {
    return this.substr(0, str.length) === str;
};
/**
 * @description 是否以某个子串结尾
 * @param {String} str 子串
 * @return {Boolean}
 */
String.prototype.endWith = String.prototype.endWith || function(str) {
    return this.substr(-str.length) === str;
};
/**
 * @description 是否包含某个子串
 * @param {String} str 子串
 * @return {Boolean}
 */
String.prototype.includes = String.prototype.includes || function(str) {
    return !!~this.indexOf(str);
};
