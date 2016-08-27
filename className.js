let className = function(obj) {
	let set = new Set();
	if(!Array.isArray(obj)) {
		obj = [obj];
	}
	obj.forEach(o => {
		if(typeof o === 'string') {
			set.add(o);
		} else {
			Object.keys(o).forEach(key => {
				if(o[key]) {
					set.add(key);
				}
			});
		}
	});
	return Array.from(set.values()).join(' ');
};
export default className;