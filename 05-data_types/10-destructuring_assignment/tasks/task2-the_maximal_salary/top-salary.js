function topSalary(salaries) {
    let topPerson = null;
    let topSalary = 0;

    for (let [person, salary] of Object.entries(salaries)) {
        if (salary > topSalary) {
            topPerson = person;
            topSalary = salary;
        }
    }

    return topPerson;
}

let salaries = {
    John: 100,
    Pete: 300,
    Mary: 250,
};

alert(topSalary(salaries));
