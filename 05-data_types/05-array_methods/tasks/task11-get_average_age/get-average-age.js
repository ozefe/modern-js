function getAverageAge(users) {
    let age_sum = users.reduce((sum, user) => sum + user.age, 0);

    return age_sum / users.length;
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [john, pete, mary];

alert(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28
