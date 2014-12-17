/**
 * @description 原型继承工厂
 * @param {Constructor} child 子类构造函数
 * @param {Constructor} parent 基类构造函数
 */
inherit = (function() {
	var F = function() {};
	return function(child, base) {
		// 利用空构造函数转接原型链以节省空间
		F.prototype = base.prototype;
		child.prototype = new F();
		child.prototype.constructor = child;
	};
}());
