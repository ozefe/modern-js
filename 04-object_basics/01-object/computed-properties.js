// We can use square brackets in an object literal, when creating an object.
// That's called computed properties:
let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
    [fruit]: 5, // the name of the property is taken from the variable fruit
};
alert(`There are ${bag.apple} of ${fruit} in the bag.`); // 5 if fruit="apple"

// Essentially, that works the same as:
bag = {};

// take property name from the fruit variable
bag[fruit] = 5;
alert(`There are ${bag.apple} of ${fruit} in the bag.`); // 5 if fruit="apple"

// We can use more complex expressions inside square brackets:
bag = {
    [fruit + "Computers"]: 5, // bag.appleComputers = 5
};
alert(`There are ${bag.appleComputers} computers in the bag.`);
