function sumInput() {
    let values = [];

    while (true) {
        let value = prompt("Please provide a number:", 2);
        if (value === "" || value === null || !isFinite(value)) break;

        values.push(+value);

        alert(values); // DEBUG
    }

    let array_sum = 0;
    for (let value of values) array_sum += value;

    return array_sum;
}

alert(`Sum: ${sumInput()}`);
