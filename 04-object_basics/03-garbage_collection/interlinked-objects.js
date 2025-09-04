// “marries” two objects by giving them references to each other and returns a
// new object that contains them both.
function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;

    return {
        father: man,
        mother: woman,
    };
}

let family = marry(
    {
        name: "John",
    },
    {
        name: "Ann",
    }
);

// As of now, all objects are reachable. Let's remove two references:
delete family.father;
delete family.mother.husband;

// It's not enough to delete only one of these two references, because all
// objects would still be reachable. But if we delete both, then John has no
// incoming reference any more.

// Outgoing references do not matter. Only incoming ones can make an object
// reachable. So, John is now unreachable and will be removed from the memory
// with all its data that also became unaccessible.
