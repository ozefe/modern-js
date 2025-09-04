let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};

let sum = 0;
for (let person in salaries) {
    sum += salaries[person];
}

alert(`The sum of salaries is ${sum}`);
