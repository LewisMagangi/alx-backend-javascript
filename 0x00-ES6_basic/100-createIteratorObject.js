export default function createIteratorObject(report) {
    const employees = Object.values(report.allEmployees);
    let index = 0;

    return {
	next: function() {
	    if (index < employees.length) {
		return {
		    value: employees[index++],
		    done: false,
		};
	    }
	    return { done: true };
	},
	[Symbol.iterator]: function() {
	    return this;
	},
    };
}
