// We should have an existing object on the right side, that we want to split
// into variables. The left side contains an object-like "pattern" for
// corresponding properties. In the simplest case, that's a list of variable
// names in {...}.
// let {var1, var2} = {var1:…, var2:…}

let options = {
    title: "Menu",
    width: 100,
    height: 200,
};

// let { title, width, height } = options;

// alert(title); // Menu
// alert(width); // 100
// alert(height); // 200

// The order does not matter:
let { height, width, title } = options;

alert(title); // Menu
alert(width); // 100
alert(height); // 200

// If we want to assign a property to a variable with another name, for
// instance, make options.width go into the variable named w, then we can set
// the variable name using a colon:
// { sourceProperty: targetVariable }
let { width: w, height: h, title: t } = options;

// width -> w
// height -> h
// title -> title

alert(t); // Menu
alert(w); // 100
alert(h); // 200

// For potentially missing properties we can set default values using "=":
let { a = 100, b = 200, optionTitle } = options;

alert(optionTitle); // Menu
alert(a); // 100
alert(b); // 200

// Default values can be any expressions or even function calls. They will be
// evaluated if the value is not provided:
options = { color: "black" };

let { color = prompt("color?"), size = prompt("size?") } = options;

alert(color); // black
alert(size); // (whatever the result of prompt is)

// We also can combine both the colon and equality:
// let { color: c = "blue", dimension: d = 3, size } = options;

// We can also use the rest pattern:
options = {
    menuTitle: "Menu",
    height: 200,
    width: 100,
};

// title = property named title
// rest = object with the rest of properties
let { menuTitle, ...rest } = options;

// now title="Menu", rest={height: 200, width: 100}
alert(rest.height); // 200
alert(rest.width); // 100

// NOTE: Gotcha if there's no let: we could use existing variables too, without
// let. But there's a catch. This won't work:
let gotchaTitle, gotchaWidth, gotchaHeight;

// error in this line
// {gotchaTitle, gotchaWidth, gotchaHeight} = {title: "Menu", width: 200, height: 100};

// The problem is that JavaScript treats {...} in the main code flow (not inside
// another expression) as a code block. To show JavaScript that it's not a code
// block, we can wrap the expression in parentheses (...):
// okay now
({ gotchaTitle, gotchaWidth, gotchaHeight } = {
    title: "Menu",
    width: 200,
    height: 100,
});
alert(gotchaTitle); // Menu
