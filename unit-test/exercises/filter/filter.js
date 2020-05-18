/**
 * Function takes a callback
 * @param fn => function
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