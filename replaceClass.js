//@author jansesun t.qq.com/jansesun
// to avoid reflow and repaint repeatedly because of the traditional replace classname by removeClass and addClass
/**
 * @description replace className of an element
 * @param {DOM Element} el the element
 * @param {String} newClass the new classname
 * @param {String} oldClass the old classname
 */
function replaceClass(el, newClass, oldClass) {
  var className = el.className,
		arr = oldClass.split(' '),
		i, len = arr.length;
	for(i = 0; i < len; ++i) {
		className = className.replace(new RegExp('\\b' + arr[i] + '\\b'), '');
	}
	className = className.replace(/\s+$/, '');
	if(className.replace(new RegExp('\\b' + newClass + '\\b'), ''), '') == className) {
		el.className = className + ' ' + newClass;
	}
}
