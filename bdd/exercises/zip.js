/**
 * Function groups sets 2-dimensional arrays like this:
 *  [ [1,2,3], ["one","two","three"], [true,false,true] ] 
 *  => [ [1,"one",true], [2,"two",false], [3,"three",true] ] 
 */
Array.prototype.zip = function() {
    return this.map((value, index, arr) => {
        return arr.map((val, idx, array) => {
            return val[index];
        });
    });
};

// Here is how it is built step by step
// => Remember map always returns an array
// => [1], [2], [3]
// => [1, "one"], [2, "two"], [3, "three"]
// => [1, "one", true], [2, "two", false], [3, "three", true]