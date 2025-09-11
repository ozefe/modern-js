function sumSalaries(salaries) {
    let sum = 0;
    for (let salary of Object.values(salaries)) sum += salary;

    return sum;
}

// Or...
function sumSalariesReduce(salaries) {
    return Object.values(salaries).reduce((a, b) => a + b, 0); // 650
}

let salaries = {
    John: 100,
    Pete: 300,
    Mary: 250,
};

alert(sumSalaries(salaries)); // 650
alert(sumSalariesReduce(salaries)); // 650
