// title: (meetup title), date: (meetup date)
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup = JSON.parse(str);

// The value of `meetup.date` is a string, not a `Date` object:
// alert(meetup.date.getDate()); // Error!

// the reviving function as the second argument returns all values "as is", but
// date will become a `Date`:
meetup = JSON.parse(str, (key, value) =>
    key === "date" ? new Date(value) : value
);
alert(meetup.date.getDate()); // 30, now works!

// Also works for nested objects:
let schedule = `{
  "meetups": [
    {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
    {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
  ]
}`;

schedule = JSON.parse(schedule, (key, value) =>
    key === "date" ? new Date(value) : value
);
alert(schedule.meetups[1].date.getDate()); // 18, works!
