alert(2 > 1); // true (correct)
alert(2 == 1); // false (wrong)
alert(2 != 1); // true (correct)

let result = 5 > 4; // assign the result of the comparison
alert(result); // true

alert("Z" > "A"); // true
alert("Glow" > "Glee"); // true
alert("Bee" > "Be"); // true

alert("2" > 1); // true, string "2" becomes a number 2
alert("01" == 1); // true, string "01" becomes a number 1

alert(true == 1); // true
alert(false == 0); // true

let a = 0;
alert(Boolean(a)); // false

let b = "0";
alert(Boolean(b)); // true

alert(a == b); // true!

alert(0 == false); // true
alert("" == false); // true

alert(0 === false); // false, because the types are different

alert(null === undefined); // false

alert(null == undefined); // true

alert(null > 0); // false
alert(null == 0); // false
alert(null >= 0); // true

alert(undefined > 0); // false
alert(undefined < 0); // false
alert(undefined == 0); // false
