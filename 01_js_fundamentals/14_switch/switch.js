let a = 2 + 2;
switch (a) {
    case 3:
        alert("Too small");
        break;
    case 4: // "Exactly"
        alert("Exactly!");
        break;
    case 5:
        alert("Too big");
        break;
    default:
        alert("I don't know such values");
}

a = "1";
let b = 0;
switch (+a) {
    case b + 1:
        alert("this runs, because +a is 1, exactly equals b+1");
        break;
    default:
        alert("this doesn't run");
}

a = 3;
switch (a) {
    case 4:
        alert("Right!");
        break;
    case 3:
    case 5:
        alert("Wrong!");
        alert("Why don't you take a math class?");
        break;
    default:
        alert("The result is strange. Really.");
}

let arg = prompt("Enter a value?", "");
switch (arg) {
    case "0":
    case "1":
        alert("One or zero");
        break;
    case "2":
        alert("Two");
        break;
    case 3:
        alert("Never executes!");
        break;
    default:
        alert("An unknown value");
}
