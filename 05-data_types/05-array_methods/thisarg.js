// Almost all array methods that call functions -- like `find`, `filter`,
// `map`, with a notable exception of `sort`, accept an optional additional
// parameter `thisArg`:
// arr.find(func, thisArg);
// arr.filter(func, thisArg);
// arr.map(func, thisArg);
// ...
// thisArg is the optional last argument

// The value of `thisArg` parameter becomes this for func:
let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user) {
        return user.age >= this.minAge && user.age < this.maxAge;
    },
};

let users = [{ age: 16 }, { age: 20 }, { age: 23 }, { age: 30 }];

// find users, for who army.canJoin returns true
let soldiers = users.filter(army.canJoin, army);

alert(soldiers.length); // 2
alert(soldiers[0].age); // 20
alert(soldiers[1].age); // 23

// If in the example above we used `users.filter(army.canJoin)`, then
// `army.canJoin` would be called as a standalone function, with
// `this=undefined`, thus leading to an instant error.

// This does the same, wrapping it in an arrow function:
soldiers = users.filter((user) => army.canJoin(user));

alert(soldiers.length); // 2
alert(soldiers[0].age); // 20
alert(soldiers[1].age); // 23
