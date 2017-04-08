const { check, gen, property } = require('testcheck');
const test = require('tape');

test('addition is commutative', check(gen.int, gen.int, (t, numA, numB) => {
  t.plan(1);
  t.equal(numA + numB, numB + numA)
}));
