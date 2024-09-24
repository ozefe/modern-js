let user = {
  name: "John",
  age: 30,
};

alert(Object.keys(user)); // name,age
alert(Object.values(user)); // John,30
alert(Object.entries(user)); // name,John,age,30

// loop over values
for (let value of Object.values(user)) {
  alert(value); // John, then 30
}

let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let doublePrices = Object.fromEntries(
  // convert prices to array, map each key/value pair into another pair
  // and then fromEntries gives back the object
  Object.entries(prices).map((entry) => [entry[0], entry[1] * 2])
);

alert(doublePrices.meat); // 8
