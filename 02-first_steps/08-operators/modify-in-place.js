// Modify-in-place
let n = 2;
n = n + 5;
n = n * 2;

let n2 = 2;
n2 += 5; // now n2 = 7 (same as n2 = n2 + 5)
n2 *= 2; // now n2 = 14 (same as n2 = n2 * 2)

alert(n2); // 14

let n3 = 2;
n3 *= 3 + 5; // right part evaluated first, same as n3 *= 8

alert(n3); // 16
