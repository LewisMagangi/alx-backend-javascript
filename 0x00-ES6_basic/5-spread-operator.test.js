import concatArrays from './5-spread-operator.js';

test('returns the array', () => {
  expect(concatArrays(['a', 'b'], ['c', 'd'], 'Hello')).toStrictEqual(['a', 'b', 'c', 'd', 'H', 'e', 'l', 'l', 'o']);
});
