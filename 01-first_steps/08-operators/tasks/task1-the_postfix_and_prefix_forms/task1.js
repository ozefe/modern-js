let a = 1,
    b = 1;

let c = ++a; // 2, prefix form returns the new value
let d = b++; // 1, postfix form returns the old value

alert(a); // 2
alert(b); // 2
alert(c); // 2
alert(d); // 1
