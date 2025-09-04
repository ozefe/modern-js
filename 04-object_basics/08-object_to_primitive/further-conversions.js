let obj = {
    // `toString` handles all conversions in the absence of other methods
    toString() {
        return "2";
    },
};

// 4, object converted to primitive "2", then multiplication made it a number
alert(obj * 2);

// "22" ("2" + 2), conversion to primitive returned a string => concatenation
alert(obj + 2);
