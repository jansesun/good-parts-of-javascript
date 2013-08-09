var func1 = function(times) {
  var innerFun = function() {
		setTimeout(function(){
			if(times) {
				console.log('func1');
				innerFun();
				times--;
			}
		}, 50);
	}
	innerFun();
};
var func2 = function() {
	setTimeout(function() {
		console.log('func2');
	}, 100);
};
//print 'func2' after print 'func1'
//correct example
func1(3);
setTimeout(function() {
	func2();
}, 50);
//
var func1 = function(times, call) {
	var innerFun = function() {
		setTimeout(function(){
			if(times) {
				//codes go here
				innerFun();
				times--;
			} else {
				if(call) {
					call();
				}
			}
		}, 50);
	}
	innerFun();
};
var func2 = function() {
	setTimeout(function() {
		console.log('func2');
	}, 100);
};
//print 'func2' after print 'func1'
//correct example
func1(3, function(){
	func2();
});
// by this way, we can make sure func2 will be executed after the 3 times innerFun

