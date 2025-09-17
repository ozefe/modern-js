// Accessors allow to take control over a "regular" data property at any moment
// by replacing it with a getter and a setter and tweak its behavior.

// Imagine we started implementing `user` objects using data properties `name`
// and `age`:
{
    function User(name, age) {
        this.name = name;
        this.age = age;
    }

    let john = new User("John", 33);
    alert(john.age); // 33
}

// Later instead of `age` we may decide to store `birthday`, because it's more
// precise and convenient. But we can also keep the `age` as well:
{
    function User(name, birthday) {
        this.name = name;
        this.birthday = birthday;

        // `age` is calculated from the current date and `birthday`
        Object.defineProperty(this, "age", {
            get() {
                let currentYear = new Date().getFullYear();
                return currentYear - this.birthday.getFullYear();
            },
        });
    }

    let john = new User("John", new Date(1992, 6, 1));

    alert(john.birthday); // `birthday` is available
    alert(john.age); // ...as well as the `age`
}
