let user = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);

    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  },
};

// conversion demo:
alert(user); // hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500

user = { name: "John" };

alert(user); // [object Object]
alert(user.valueOf() === user); // true

user = {
  name: "John",
  money: 1000,

  // for hint="string"
  toString() {
    return `{name: "${this.name}"}`;
  },

  // for hint="number" or hint="default"
  valueOf() {
    return this.money;
  },
};

alert(user); // toString -> {name: "John"}
alert(+user); // valueOf -> 1000
alert(user + 500); // valueOf -> 1500

user = {
  name: "John",

  toString() {
    return this.name;
  },
};

alert(user); // toString -> John
alert(user + 500); // toString -> John500

let obj = {
  // toString handles all conversions in the absence of other methods
  toString() {
    return "2";
  },
};

alert(obj * 2); // 4, object converted to primitive "2", then multiplication made it a number
alert(obj + 2); // "22" ("2" + 2), conversion to primitive returned a string => concatenation
