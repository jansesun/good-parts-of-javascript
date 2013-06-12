//@author jansesun t.qq.com/jansesun

/**
  *@description copy an object deeply
  *@param {Object} obj object to be cloned
  *@return {Object} new object
  *@example
  *      clone(obj);
**/

function clone(obj) {
    var newObj, key;
    if(obj === null || typeof obj != 'object') {
        newObj = obj;
    } else {
        newObj = new obj.constructor();
        for(key in obj) {
            newObj[key] = clone(obj[key]);
        }
    }
    return newObj;
}
          
