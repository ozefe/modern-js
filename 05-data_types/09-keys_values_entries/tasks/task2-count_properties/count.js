let count = (obj) => Object.values(obj).length;

let user = {
    name: "John",
    age: 30,
};

alert(count(user)); // 2
