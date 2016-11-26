/**
 * Function finds value for array.
 */
Array.prototype.findInput = function(fn) {
    return this.filter(val => fn(val))[0];
};