// user has a reference to the object
let user = {
  name: "John",
};

// user = null; // the reference is lost

let admin = user;

user = null; // object is still reachable via admin, so it continues to live

function marry(man, woman) {
  woman.husband = man;
  man.wife = woman;

  return {
    father: man,
    mother: woman,
  };
}

let family = marry({ name: "John" }, { name: "Ann" });

// John is gone
delete family.father;
delete family.mother.husband;

// the whole family is gone
family = null;
