import getBudgetObject from './7-getBudgetObject.js';

test('getBudgetObject returns the right object', () => {
    expect(getBudgetObject(200, 500, 100)).toEqual({
	"capita": 100,
	"gdp": 500,
	"income": 200,
    });
});
