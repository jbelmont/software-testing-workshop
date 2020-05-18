function avg(input) {
    return input.reduce((prev, curr) => prev + curr, 0) / input.length;
}

function average(input) {
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        sum += input[i];
    }
    return sum / input.length;
}

module.exports = {
    average,
    avg
}