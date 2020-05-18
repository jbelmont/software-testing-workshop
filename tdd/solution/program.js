const average = input => {
    return input.reduce((prev, curr) => prev + curr, 0) / input.length;
};

const standardDeviation = input => {
    const avg = average(input);
    const summation = input
        .map(val => Math.pow(Math.abs(val - avg), 2))
        .reduce((prev, curr) => prev + curr, 0) / input.length;
    return Math.sqrt(summation);
};

module.exports = {
    average,
    standardDeviation
};