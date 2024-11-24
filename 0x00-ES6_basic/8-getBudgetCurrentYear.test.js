import getBudgetForCurrentYear from './8-getBudgetCurrentYear.js';

test('getBudgetForCurrentYear returns the right object', () => {
    const currentYear = new Date().getFullYear();
    const expectedResult = {};
    expectedResult[`capita-${currentYear}`] = 100;
    expectedResult[`gdp-${currentYear}`] = 500;
    expectedResult[`income-${currentYear}`] = 200;
    expect(getBudgetForCurrentYear(200, 500, 100)).toEqual(expectedResult);
});
