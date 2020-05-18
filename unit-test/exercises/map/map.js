/**
 * Function takes a callback.
 * @param fn => function
 */
Array.prototype.customMap = function(fn) {
	let results = [];
    for (let i = 0; i < this.length; i++) {
        results.push(fn(this[i]));
    }
	return results;
};