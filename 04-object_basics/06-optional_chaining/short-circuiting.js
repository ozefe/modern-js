// the ?. immediately stops ("short-circuits") the evaluation if the left part
// doesn't exist. So, if there are any further function calls or operations to
// the right of ?., they won't be made:
let user = null;
let x = 0;

// no "user", so the execution doesn't reach `sayHi` call and `x++`.
user?.sayHi(x++);

alert(`x: ${x}`); // 0, value not incremented
