// Increment/decrement
let counter = 2;
counter++; // works the same as counter = counter + 1, but is shorter
alert(counter); // 3

let counter2 = 2;
counter2--; // works the same as counter2 = counter2 - 1, but is shorter
alert(counter2); // 1

let counter3 = 1;

// the prefix form ++counter3 increments counter and returns the new value, 2
let a3 = ++counter3;
alert(a3); // 2

let counter4 = 1;

// the postfix form counter4++ also increments counter but returns the old
// value (prior to increment)
let a4 = counter4++;
alert(a4); // 1

let counter5 = 0;
counter5++;
++counter5;
alert(counter5); // 2, the lines above did the same

let counter6 = 0;
alert(++counter6); // 1

let counter7 = 0;
alert(counter7++); // 0

// Increment/decrement among other operators
let counter8 = 1;
alert(2 * ++counter8); // 4

let counter9 = 1;
alert(2 * counter9++); // 2, because counter9++ returns the "old" value
