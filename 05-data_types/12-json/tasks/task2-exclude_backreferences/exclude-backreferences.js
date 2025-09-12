let room = {
    number: 23,
};

let meetup = {
    title: "Conference",
    occupiedBy: [{ name: "John" }, { name: "Alice" }],
    place: room,
};

// circular references
room.occupiedBy = meetup;
meetup.self = meetup;

alert(
    JSON.stringify(meetup, (key, value) =>
        key && Object.is(value, meetup) ? undefined : value
    )
);
/* result should be:
{
  "title":"Conference",
  "occupiedBy":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}
*/
