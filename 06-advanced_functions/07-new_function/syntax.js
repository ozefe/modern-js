// There's one more way to create a function. It's rarely used, but sometimes
// there's no alternative. The syntax for creating a function:
//
// let func = new Function ([arg1, arg2, ...argN], functionBody);
//
// The function is created with the arguments `arg1...argN` and the given
// `functionBody`.

let sum = new Function("a", "b", "return a + b");
alert(sum(1, 2)); // 3

// For historical reasons, arguments can also be given as a comma-separated
// list. These three declarations mean the same:
alert(new Function("a", "b", "return a + b")(34, 35)); // 69, basic syntax
alert(new Function("a,b", "return a + b")(34, 35)); // 69, comma-separated

// 69, comma-separated with spaces
alert(new Function("a , b", "return a + b")(34, 35));

let sayHi = new Function('alert("Hello")');
sayHi(); // Hello

// The major difference from other ways is that the function is created
// literally from a string, that is passed at run time. All previous
// declarations required us to write the function code in the script. But
// `new Function` allows to turn any string into a function. For example, we can
// receive a new function from a server and then execute it:
let str = /*receive the code from a server dynamically */ "alert(1)";
let func = new Function(str);
func();

// It is used in very specific cases, like when we receive code from a server,
// or to dynamically compile a function from a template, in complex
// web-applications.
