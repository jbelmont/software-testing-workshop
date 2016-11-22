/**
 * Function finds index value for array condition.
 */
Array.prototype.findIdx = function(fn) {
    return this.indexOf(this.filter(val => fn(val))[0]);
};