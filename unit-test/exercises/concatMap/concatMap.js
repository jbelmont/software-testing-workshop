/**
 * Function does the same behavior as map and concatAll in action.
 * @param fn => fn is a callback.
 */
Array.prototype.concatMap = function(fn) {
    return this
        .map((item, index, arr) => fn(index))
        .concatAll();
};