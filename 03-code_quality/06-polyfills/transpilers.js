// A transpiler is a special piece of software that translates source code to
// another source code. It can parse ("read and understand") modern code and
// rewrite it using older syntax constructs, so that it'll also work in
// outdated engines.
let height;

// before running the transpiler
height = height ?? 100;
alert(height);

// after running the transpiler
height = height !== undefined && height !== null ? height : 100;
alert(height);
