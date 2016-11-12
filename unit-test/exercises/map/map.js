/**
 * Function takes a callback and an array and returns new copy of array.
 * @param fn => function
 * @param collection => Array
 */
Array.prototype.customMap = function(fn) {
	let results = [];
    for (let i = 0; i < this.length; i++) {
        results.push(fn(this[i]));
    }
	return results;
};