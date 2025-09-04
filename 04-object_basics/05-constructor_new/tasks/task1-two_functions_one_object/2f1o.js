let commonObject = {};

function A() {
    return commonObject;
}
function B() {
    return commonObject;
}

let a = new A();
let b = new B();

alert(a == b); // true
