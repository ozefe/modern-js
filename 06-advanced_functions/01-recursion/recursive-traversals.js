let company = {
    sales: [
        {
            name: "John",
            salary: 1000,
        },
        {
            name: "Alice",
            salary: 1600,
        },
    ],

    development: {
        sites: [
            {
                name: "Peter",
                salary: 2000,
            },
            {
                name: "Alex",
                salary: 1800,
            },
        ],

        internals: [
            {
                name: "Jack",
                salary: 1300,
            },
        ],
    },
};

// Using an iterative approach to get the sum of all salaries is not easy,
// because the structure is not simple. The first idea may be to make a `for`
// loop over `company` with nested sub-loop over 1st level departments. But then
// we need more nested sub-loops to iterate over the staff in 2nd level
// departments like `sites`. And then another sub-loop inside those for 3rd
// level departments that might appear in the future? If we put 3-4 nested
// subloops in the code to traverse a single object, it becomes rather ugly.

// With recursion, when our function gets a department to sum, there are two
// possible cases:
// 1. Either it's a "simple" department with an array of people, then we can sum
//    the salaries in a simple loop.
// 2. Or it's an object with N sub-departments, then we can make N recursive
//    calls to get the sum for each of the sub-departments and combine the
//    results.

function sumSalaries(department) {
    if (Array.isArray(department)) {
        // Case 1: We're dealing with a "simple" department, all we have to do
        // is sum the array
        return department.reduce(
            (salarySum, employee) => salarySum + employee.salary,
            0
        );
    } else {
        // Case 2: We're dealing with a department that has sub-departments
        let salarySum = 0;
        for (let subDepartment of Object.values(department)) {
            // recursively call for sub-departments, sum the results
            salarySum += sumSalaries(subDepartment);
        }

        return salarySum;
    }
}

alert(sumSalaries(company)); // 7700
