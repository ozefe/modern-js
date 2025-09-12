// We have a complex object, and we'd like to convert it into a string. We could
// implement the conversion like this:
let user = {
    name: "John",
    age: 30,

    toString() {
        return `{name: "${this.name}", age: ${this.age}}`;
    },
};

alert(user); // {name: "John", age: 30}

// But in the process of development, new properties are added, old properties
// are renamed and removed. Updating such `toString` every time can become a
// pain. We could try to loop over properties in it, but what if the object is
// complex and has nested objects in properties? We'd need to implement their
// conversion as well.
