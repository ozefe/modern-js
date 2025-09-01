// Horizontal indents: 2 or 4 spaces
// show(parameters,
//      aligned, // 5 spaces padding at the left
//      one,
//      after,
//      another
//   ) {
//   // ...
// }

// Vertical indents: empty lines for splitting code into logical blocks
function pow(x, n) {
    let result = 1;
    //              <--
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    //              <--
    return result;
}
