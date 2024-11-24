import returnHowManyArguments from './4-rest-parameter.js';

test('returns the right number of arguments', () => {
    expect(returnHowManyArguments(10, 20, 30, 4)).toBe(4);
});
