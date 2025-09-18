let dictionary = Object.create(null);

// add dictionary.toString method
Object.defineProperty(dictionary, "toString", {
    value: function () {
        return Object.keys(dictionary).join();
    },

    writable: true,
    enumerable: false,
    configurable: true,
});

// add some data
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // __proto__ is a regular property key here

// only apple and __proto__ are in the loop
for (let key in dictionary) {
    alert(key); // "apple", then "__proto__"
}

// your toString in action
alert(dictionary); // "apple,__proto__"
