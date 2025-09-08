let str = "Hello";

str.test = 5;
alert(str.test); // undefined

// 1. When a property of str is accessed, a "wrapper object" is created.
// 2. In strict mode, writing into it is an error.
// 3. Otherwise, the operation with the property is carried on, the object gets
//    the test property, but after that the "wrapper object" disappears, so in
//    the last line str has no trace of the property.
