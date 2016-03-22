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
	oldClass = oldClass.split(/\s+/).join('|');
	className = className.replace(new RegExp('(?:\\s|^)(?:' + oldClass + ')(?=\\s|$)', 'g'), '');
	className = className.replace(/\s+$/, '');
	if(className.replace(new RegExp('(?:\\s|^)' + newClass + '(?:\\s|$)'), '') == className) {
		el.className = className + ' ' + newClass;
	}
};
