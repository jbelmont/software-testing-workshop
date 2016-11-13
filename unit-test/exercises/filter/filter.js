/**
 * Function takes a callback and an array and returns filtered new copy.
 * @param fn => function
 * @param collection => Array
 */
Array.prototype.customFilter = function(fn) {
	let results = [];
    for (let i = 0; i < this.length; i++) {
        let itemExists = fn(this[i]);
        if (itemExists) {
            results.push(this[i]);
        }
    }
	return results;
};