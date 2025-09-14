// A function can be called with any number of arguments, no matter how it is
// defined:
function sum(a, b) {
    return a + b;
}

// There will be no error because of "excessive" arguments. But of course in the
// result only the first two will be counted.
alert(sum(1, 2, 3, 4, 5)); // 3

// The rest of the parameters can be included in the function definition by
// using three dots ... followed by the name of the array that will contain
// them:
function sumAll(...args) {
    // args is the name for the array
    let sum = 0;
    for (let arg of args) sum += arg;

    return sum;
}

alert(sumAll(1)); // 1
alert(sumAll(1, 2)); // 3
alert(sumAll(1, 2, 3)); // 6

// We can choose to get the first parameters as variables, and gather only the
// rest:
function showName(firstName, lastName, ...titles) {
    alert(firstName + " " + lastName); // Julius Caesar

    // the rest go into titles array
    // i.e. titles = ["Consul", "Imperator"]
    alert(titles[0]); // Consul
    alert(titles[1]); // Imperator
    alert(titles.length); // 2
}

showName("Julius", "Caesar", "Consul", "Imperator");

// NOTE: The rest parameters must be at the end: The rest parameters gather all
// remaining arguments, so this does not make sense and causes an error:
// function f(arg1, ...rest, arg2) { // arg2 after ...rest ?!
//   // error
// }
