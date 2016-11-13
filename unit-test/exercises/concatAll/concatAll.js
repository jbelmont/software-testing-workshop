/**
 * Function merges multiple arrays into one flat array.
 */
Array.prototype.concatAll = function() {
	let results = [];
    for (let i = 0; i < this.length; i++) {
        results.push.apply(results, this[i]);
    }
	return results;
};