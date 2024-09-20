let john = {
  name: "John",
  sayHi: function () {
    alert("Hi buddy!");
  },
};

john.sayHi(); // Hi buddy!

let str = "Hello";
alert(str.toUpperCase()); // HELLO

let n = 1.23456;
alert(n.toFixed(2)); // 1.23

alert(typeof 0); // "number"
alert(typeof new Number(0)); // "object"

let zero = new Number(0);
// zero is true, because it's an object
if (zero) {
  alert("zero is truthy??");
}

let num = Number("123"); // convert a string to a number

alert(null.test); // TypeError: Cannot read properties of null (reading 'test')
