/**
 * Function finds value for array condition.
 */
Array.prototype.findInput = function(fn) {
    return this.filter(val => fn(val))[0];
};