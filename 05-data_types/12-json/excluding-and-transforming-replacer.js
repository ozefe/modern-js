// let json = JSON.stringify(value[, replacer, space])

// If we pass an array of properties to the second argument, only these
// properties will be encoded:
let room = {
    number: 23,
};

let meetup = {
    title: "Conference",
    participants: [{ name: "John" }, { name: "Alice" }],
    place: room, // meetup references room
};

room.occupiedBy = meetup; // room references meetup

// The property list is applied to the whole object structure. So the objects in
// `participants` are empty, because `name` is not in the list:
alert(JSON.stringify(meetup, ["title", "participants"]));
// {"title":"Conference","participants":[{},{}]}

// Now everything except `occupiedBy` is serialized:
alert(
    JSON.stringify(meetup, ["title", "participants", "place", "name", "number"])
);
/*
{
  "title":"Conference",
  "participants":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}
*/

// We can use a function instead of an array as the `replacer`. The function
// will be called for every (key, value) pair and should return the "replaced"
// value, which will be used instead of the original one. Or `undefined` if the
// value is to be skipped.
alert(
    JSON.stringify(meetup, (key, value) => {
        alert(`${key}: ${value}`);
        return key === "occupiedBy" ? undefined : value; // ignore `occupiedBy`
    })
);
/* key:value pairs that come to replacer:
:             [object Object]
title:        Conference
participants: [object Object],[object Object]
0:            [object Object]
name:         John
1:            [object Object]
name:         Alice
place:        [object Object]
number:       23
occupiedBy:   [object Object]
*/

// Please note that replacer function gets every key/value pair including nested
// objects and array items. It is applied recursively. The value of `this`
// inside replacer is the object that contains the current property.

// The first call is special. It is made using a special "wrapper object":
// `{"": meetup}`. In other words, the first (key, value) pair has an empty key,
// and the value is the target object as a whole. That's why the first line is
// ":[object Object]" in the example above.
