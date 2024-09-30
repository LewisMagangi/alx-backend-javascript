export default function getFullBudgetObject(income, gdp, capita) {
    return {
	income,
	gdp,
	capita,
	getIncomeInDollars(income) {
	    return `$${income}`;
	},
	getIncomeInEuros(income) {
	    return `${income} euros`;
	}
    };
}
